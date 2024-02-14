import { useForm } from 'react-hook-form';
import { registrorespuesta } from '../api/auth';



function Registro() {
  const { register, handleSubmit } = useForm()
 
 const onSubmit =  handleSubmit( async (values) => {
    console.log(values);
    const res = await registrorespuesta(values)
    console.log(res)   
     })
  return(
     <div className='bg-teal-700 max-w-md p-10 rounded-md' >  
         <form 
         onSubmit={onSubmit}
         >
      <div className="mb-4">
          <label htmlFor="nombre" className="block text-black text-sm font-bold mb-2">Nombre:</label>
          <input
            type="text"
            {...register("nombre", { required: true })}
            className='w-full bg-cyan-400 text-black px-4 py-2 rounded-md my-2'
          />
        </div>
        <div className="mb-4">
          <label htmlFor="apellido" className="block text-black text-sm font-bold mb-2">Apellido:</label>
          <input
            type="text"
            {...register("apellido", { required: true })}
            className='w-full bg-cyan-400 text-black px-4 py-2 rounded-md my-2'
          />
          </div>
          <div className="mb-4">
          <label htmlFor="cedula" className="block text-black text-sm font-bold mb-2">Cedula:</label>
          <input
            type="text"
            {...register("cedula", { required: true })}
            className='w-full bg-cyan-400 text-black px-4 py-2 rounded-md my-2'
          />
          </div>
          <div className="mb-4">
          <label htmlFor="correo" className="block text-black text-sm font-bold mb-2">Correo:</label>
          <input
            type="text"
            {...register("correo", { required: true })}
            className='w-full bg-cyan-400 text-black px-4 py-2 rounded-md my-2'
          />
          </div>
          <div className="mb-4">
          <label htmlFor="provincia" className="block text-black text-sm font-bold mb-2">Provincia:</label>
          <input
            type="text"
            {...register("provincia", { required: true })}
            className='w-full bg-cyan-400 text-black px-4 py-2 rounded-md my-2'
          />
          </div><div className="mb-4">
          <label htmlFor="nombreusuario" className="block text-black text-sm font-bold mb-2">Nombre de usuario:</label>
          <input
            type="text"
            {...register("nombreusuario", { required: true })}
            className='w-full bg-cyan-400 text-black px-4 py-2 rounded-md my-2'
          />
          </div>
          <div className="mb-4">
          <label htmlFor="password" className="block text-black text-sm font-bold mb-2">Contraseña:</label>
          <input
            type="password"
            {...register("password", { required: true })}
            className='w-full bg-cyan-400 text-black px-4 py-2 rounded-md my-2'
          />
          </div>
     
     <button type="submit"  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
      Registar
     </button>
         </form>
     </div>
  )
}

export default Registro;