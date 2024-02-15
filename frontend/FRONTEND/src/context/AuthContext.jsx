import { createContext, useState, useContext, useEffect } from 'react';
import { registrorespuesta, iniciorespuestas } from '../api/auth';

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
        } catch (error){
            console.log(error)
        }
    }
    
    
    return (
        <AuthContext.Provider
            value={{
                validarcredenciales,
                user,
                isAuthenticated,
                errors,
                inicios,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
