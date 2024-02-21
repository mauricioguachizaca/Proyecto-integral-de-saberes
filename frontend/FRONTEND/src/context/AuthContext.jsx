import { createContext, useState, useContext, useEffect } from 'react';
import { registrorespuesta, iniciorespuestas, verificarToken } from '../api/auth';
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
        const cookies = Cookies.get();
         
        if(cookies.token){
            try{
                const res = verificarToken(cookies.token)
                if (!res.data) setIsAuthenticated(false)

                isAuthenticated(true)
                setUser(res.data)
            } catch (error){
                setIsAuthenticated(false)
                setUser(null)

            }
            
        }
      }, [])
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
