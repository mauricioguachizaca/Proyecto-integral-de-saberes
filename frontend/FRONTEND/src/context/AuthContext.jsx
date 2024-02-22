import { createContext, useState, useContext, useEffect } from 'react';
import { registrorespuesta, iniciorespuestas, verificarTokenRe,  cerrarTokenRe } from '../api/auth';
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

    const cerrar = async () => {
        try {
            await cerrarTokenRe(); // Llama a la función para cerrar las credenciales y eliminar la cookie del token
            Cookies.remove("token");
            setIsAuthenticated(false);
            setUser(null);
        } catch (error) {
            console.error("Error al cerrar las credenciales:", error);
            // Maneja el error según necesites
        }
    };
    
    
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
                cerrar,
                errors,
                inicios,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
