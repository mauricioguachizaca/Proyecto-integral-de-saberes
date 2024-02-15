import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';
import { useNavigate,Link } from 'react-router-dom';


function Registro() {
  const { register, handleSubmit, 
    formState: {errors} } = useForm();
  const { validarcredenciales, isAuthenticated,  } = useAuth();
  const navigation = useNavigate()

  useEffect(()=>{
    if (isAuthenticated) navigation("/medidor")
  }, [isAuthenticated])

  const onSubmit =  handleSubmit( async (values) => {
    console.log(values);
    validarcredenciales(values);
  });
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
          {errors.nombre && (<p className='text-red-900'>Usuario es requerido</p>)}
        </div>
        <div className="mb-4">
          <label htmlFor="apellido" className="block text-black text-sm font-bold mb-2">Apellido:</label>
          <input
            type="text"
            {...register("apellido", { required: true })}
            className='w-full bg-cyan-400 text-black px-4 py-2 rounded-md my-2'
          />
          {errors.apellido && (<p className='text-red-900'>Apellido es requerido</p>)}
        
          </div>
          <div className="mb-4">
          <label htmlFor="cedula" className="block text-black text-sm font-bold mb-2">Cedula:</label>
          <input
            type="text"
            {...register("cedula", { required: true })}
            className='w-full bg-cyan-400 text-black px-4 py-2 rounded-md my-2'
          />
          {errors.cedula && (<p className='text-red-900'>Cedula es requerido</p>)}
          </div>
          <div className="mb-4">
          <label htmlFor="correo" className="block text-black text-sm font-bold mb-2">Correo:</label>
          <input
            type="text"
            {...register("correo", { required: true })}
            className='w-full bg-cyan-400 text-black px-4 py-2 rounded-md my-2'
          />
          {errors.correo && (<p className='text-red-900'>Correo es requerido</p>)}
          </div>
          <div className="mb-4">
          <label htmlFor="provincia" className="block text-black text-sm font-bold mb-2">Lugar de residencia:</label>
          <input
            type="text"
            {...register("provincia", { required: true })}
            className='w-full bg-cyan-400 text-black px-4 py-2 rounded-md my-2'
          />
          {errors.provincia && (<p className='text-red-900'>Lugar de residencia es requerido</p>)}
          </div><div className="mb-4">
          <label htmlFor="nombreusuario" className="block text-black text-sm font-bold mb-2">Nombre de usuario:</label>
          <input
            type="text"
            {...register("nombreusuario", { required: true })}
            className='w-full bg-cyan-400 text-black px-4 py-2 rounded-md my-2'
          />
          {errors.nombreusuario && (<p className='text-red-900'>Nombre de usuario es requerido</p>)}
          </div>
          <div className="mb-4">
          <label htmlFor="password" className="block text-black text-sm font-bold mb-2">Contraseña:</label>
          <input
            type="password"
            {...register("password", { required: true })}
            className='w-full bg-cyan-400 text-black px-4 py-2 rounded-md my-2'
          />
          {errors.password && (<p className='text-red-900'>La contraseña es requerido</p>)}
          </div>
     
     <button type="submit"  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
      Registar
     </button>
         </form>
         <p className="flex gap-x-2 justify-between">
         Si ya tienes una cuenta <Link to="/iniciar" className="text-blue-500" >Inicia Secion</Link>
      </p>
     </div>
  )
}

export default Registro;