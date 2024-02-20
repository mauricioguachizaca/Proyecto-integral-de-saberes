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
        try {
            const res = await registrorespuesta(user);
            console.log("Registro respuesta:", res);
            setIsAuthenticated(true);  
        } catch (error) {
            console.error("Error en registro respuesta:", error);
            setErrors(error.response.data)
        }
    };

    const inicios = async (user) => {
        try {
            const res = await iniciorespuestas(user);
            console.log("Inicio respuestas:", res);
            setIsAuthenticated(true)
            setUser(res.data)
        } catch (error) {
            console.error("Error en inicio respuestas:", error);
        }
    }
    
    useEffect(() => {
        async function checkLogin() {
            const cookies = Cookies.get();

            if (!cookies.token) {
                setIsAuthenticated(false);
                setLoading(false);
                return setUser(null);
            }

            try {
                const res = await verificarTokenRe(cookies.token);
                console.log("Verificar token:", res);
                if (!res.data) {
                    console.log(res);
                    setIsAuthenticated(false);
                    setLoading(false);
                    return;
                }
                
                setIsAuthenticated(true);
                setUser(res.data);
                setLoading(false);
            } catch (error) {
                console.error("Error en verificar token:", error);
                setIsAuthenticated(false);
                setUser(null);
                setLoading(false);
            }
        }
        checkLogin();
    }, []);
    
    return (
        <AuthContext.Provider
            value={{
                validarcredenciales,
                inicios,
                loading,
                user,
                isAuthenticated,
                errors,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
