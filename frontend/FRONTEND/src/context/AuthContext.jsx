import { createContext, useState, useContext, useEffect } from 'react';
import { registrorespuesta, iniciorespuestas, verificarTokenRe } from '../api/auth';
import Cookies from 'js-cookie';

export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null); 
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errors, setErrors] = useState([])
    const [loading, setLoading] = useState(true)

    const validarcredenciales = async (user) => {
        try{

        const res = await registrorespuesta(user);
        console.log(res.data);
        setUser(res.data);
        setIsAuthenticated(true)   
        } catch (error) {
            console.log
          setErrors(error.response.data)
        }
    };

    const inicios = async (user) => {
        try{
            const res = await iniciorespuestas(user)
            console.log(res)
            setIsAuthenticated(true)
            setUser(res.data)
        } catch (error){
            console.log(error)
        }
    }
    
    useEffect(()=>{
        async function checkToken() {
            try {
            const response = await verificarTokenRe();
            console.log("Token verificado:", response.data);
            // Actualiza isAuthenticated basado en el resultado de la verificación del token
            setIsAuthenticated(response.data.message === "Token válido");
        } catch (error) {
            console.error("Error al verificar el token:", error);
            // Maneja el error según necesites
        } finally {
            setLoading(false); // Establece loading en false después de la verificación del token
        }
    }
    checkToken();
}, []);
    return (
        <AuthContext.Provider
            value={{
                validarcredenciales,
                user,
                isAuthenticated,
                loading,
                errors,
                inicios,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
