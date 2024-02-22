import { createContext , useContext, useState } from "react";
import { creadispositivos , misdispositivos } from "../api/medidor";

const MedidorContext = createContext();

export const useMedidor = () => {
    const context = useContext(MedidorContext);

    if(!context){
        throw new Error("usemedidor must be used")
    }
    return context
};

export function MedidorProvider({children}){
    const [medidor, setMedidor] = useState([])

    const  mostrarmedidor = async () => {
        try{
            const res = await misdispositivos()
            setMedidor(res.data);
        }catch(error){
            console.error(error);
        }
    }

    const crearMedidor =  async (medidor) => {
        const res = await creadispositivos(medidor)
        console.log(res)
    }



    return(
        <MedidorContext.Provider value={{
           medidor,
           crearMedidor,
           mostrarmedidor,

        }}>
            {children}
        </MedidorContext.Provider>
    )
}