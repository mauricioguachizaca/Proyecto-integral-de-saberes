import { createContext , useContext, useState } from "react";
import { creadispositivos , misdispositivos, eliminardispositivos, midispositivo, actualizardispositivos
 } from "../api/medidor";

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
    
    const eliminarmedidor = async (id) => {
       try{
        const res = await eliminardispositivos(id)
        if(res.status = 204) setMedidor(medidor.filter((medidor) => medidor._id != id))
       }catch (error){
    console.log(error)}

    }
    
    const mimedidor = async (id) => {
      try{
        const res =  await midispositivo(id) 
        return res.data
      } catch (error) {
        console.error(error)
      }
    }


    const actualizarmedidor = async (id,  medidor) => {
       try {
          await actualizardispositivos(id, medidor)
       }catch(error) {
        console.error(error)
       }
    }

    return(
        <MedidorContext.Provider value={{
           medidor,
           crearMedidor,
           mostrarmedidor,
           eliminarmedidor,
           mimedidor,
           actualizarmedidor,

        }}>
            {children}
        </MedidorContext.Provider>
    )
}