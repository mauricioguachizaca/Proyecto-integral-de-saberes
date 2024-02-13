import { createContext, useContext, useState } from "react";
import axios from 'axios';

export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const signup = async (userData) => {
        try {
            const response = await axios.post('http://localhost:3000/api/usuarios', userData);
            setUser(response.data.user); // Actualiza el estado del usuario con la respuesta del servidor
            // Puedes hacer más acciones aquí, como redireccionar al usuario a una página de inicio de sesión
        } catch (error) {
            console.error('Error al registrar el usuario', error);
            // Puedes manejar el error de otra manera, como mostrar un mensaje al usuario
        }
    }

    return (
        <AuthContext.Provider value={{ user, signup }}>
            {children}
        </AuthContext.Provider>
    );
}
