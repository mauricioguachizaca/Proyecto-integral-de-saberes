import { createContext, useState, useContext, useEffect } from 'react';
import { registrorespuesta, iniciorespuestas, verificarTokenRe, cerrarTokenRe, actualizarperfil } from '../api/auth';
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
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(true);

    const validarcredenciales = async (user) => {
        try {
            const res = await registrorespuesta(user);
            console.log(res.data);
            setUser(res.data);
            setIsAuthenticated(true);
        } catch (error) {
            setErrors(error.response.data);
        }
    };

    const inicios = async (user) => {
        try {
            const res = await iniciorespuestas(user);
            console.log(res);
            setIsAuthenticated(true);
            setUser(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    const cerrar = async () => {
        try {
            await cerrarTokenRe();
            Cookies.remove("token");
            setIsAuthenticated(false);
            setUser(null);
        } catch (error) {
            console.error("Error al cerrar las credenciales:", error);
        }
    };

    const actualizarPerfilUsuario = async (id, userData) => {
        try {
            const res = await actualizarperfil(id, userData);
            console.log(res.data);
            setUser(res.data); // Actualiza el usuario con los datos actualizados
        } catch (error) {
            console.error("Error al actualizar el perfil:", error);
            // Maneja el error según necesites
        }
    };

    useEffect(() => {
        async function checkToken() {
            try {
                const response = await verificarTokenRe();
                setIsAuthenticated(response.data.message === "Token válido");
            } catch (error) {
                console.error("Error al verificar el token:", error);
            } finally {
                setLoading(false);
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
                actualizarPerfilUsuario // Agrega la función al contexto
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
