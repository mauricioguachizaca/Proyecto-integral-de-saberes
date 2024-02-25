import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Asegúrate de importar Link si estás utilizando React Router
import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';

const Perfil = ({ modoNoche }) => {
    const { user, actualizarPerfilUsuario } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = async (data) => {
      try {
          if (!user) {
              console.error('Usuario no está autenticado');
              return;
          }
          
          await actualizarPerfilUsuario(user.id, data);
          alert('Perfil actualizado exitosamente');
      } catch (error) {
          console.error('Error al actualizar el perfil:', error);
          alert('Ocurrió un error al intentar actualizar el perfil');
      }
  };
  

    return (
      <div className={`${modoNoche ? 'bg-[#1c201e]' : 'bg-[#a2e3f9]'} flex justify-center items-center h-screen`}>
      <div className={`${modoNoche ? 'bg-gray-800' : 'bg-white'}  max-w-4xl p-10 rounded-md border border-[#478b6d]`}>
      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-6">
          <div>
            <div className="mb-6">
              <label htmlFor="nombre" className={`block ${modoNoche ? 'text-white' : 'text-black'} text-sm font-bold mb-2`}>Nombres:</label>
              <input
                type="text"
                {...register("nombre", { required: true })}
                className='w-full border border-[#478b6d] text-black bg-[#d4e8ee] px-4 py-2 rounded-md'
              />
              {errors.nombre && (<p className='text-red-900'>Nombres es requerido</p>)}
            </div>
            <div className="mb-6">
              <label htmlFor="apellido" className={`block ${modoNoche ? 'text-white' : 'text-black'} text-sm font-bold mb-2`}>Apellidos:</label>
              <input
                type="text"
                {...register("apellido", { required: true })}
                className='w-full border border-[#478b6d] text-black bg-[#d4e8ee] px-4 py-2 rounded-md'
              />
              {errors.apellido && (<p className='text-red-900'>Apellidos es requerido</p>)}
            </div>
            <div className="mb-6">
              <label htmlFor="cedula" className={`block ${modoNoche ? 'text-white' : 'text-black'} text-sm font-bold mb-2`}>Cédula:</label>
              <input
                type="text"
                {...register("cedula", { required: true })}
                className='w-full border border-[#478b6d] text-black bg-[#d4e8ee] px-4 py-2 rounded-md'
              />
              {errors.cedula && (<p className='text-red-900'>Cédula es requerido</p>)}
            </div>
            <div className="mb-6">
              <label htmlFor="nombreusuario" className={`block ${modoNoche ? 'text-white' : 'text-black'} text-sm font-bold mb-2`}>Nombre de usuario:</label>
              <input
                type="text"
                {...register("nombreusuario", { required: true })}
                className='w-full border border-[#478b6d] text-black bg-[#d4e8ee] px-4 py-2 rounded-md'
              />
              {errors.nombreusuario && (<p className='text-red-900'>Nombre de usuario es requerido</p>)}
            </div>
          </div>
          <div>
            <div className="mb-6">
              <label htmlFor="provincia" className={`block ${modoNoche ? 'text-white' : 'text-black'} text-sm font-bold mb-2`}>Provincia:</label>
              <input
                type="text"
                {...register("provincia", { required: true })}
                className='w-full border border-[#478b6d] text-black bg-[#d4e8ee] px-4 py-2 rounded-md'
              />
              {errors.provincia && (<p className='text-red-900'>Provincia es requerida</p>)}
            </div>
            <div className="mb-6">
              <label htmlFor="password" className={`block ${modoNoche ? 'text-white' : 'text-black'} text-sm font-bold mb-2`}>Contraseña:</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password", { required: true })}
                  className='w-full border border-[#478b6d] text-black bg-[#d4e8ee] px-4 py-2 rounded-md'
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center px-3 focus:outline-none"
                >
                  {showPassword ? "Ocultar" : "Mostrar"}
                </button>
              </div>
              {errors.password && (<p className='text-red-900'>La contraseña es requerida</p>)}
            </div>
            <div className="mb-6">
              <label htmlFor="correo" className={`block ${modoNoche ? 'text-white' : 'text-black'} text-sm font-bold mb-2`}>Correo:</label>
              <input
                type="text"
                {...register("correo", { required: true })}
                className='w-full border border-[#478b6d] text-black bg-[#d4e8ee] px-4 py-2 rounded-md'
              />
              {errors.correo && (<p className='text-red-900'>Correo es requerido</p>)}
            </div>
          </div>
          <button type="submit" className="col-span-2  bg-[#478b6d] text-white py-2 px-4 rounded hover:bg-[#5d8dee]">
            REGISTRO
          </button>
          <button type="submit" className="col-span-2  bg-[#478b6d] text-white py-2 px-4 rounded hover:bg-[#5d8dee]">
            <Link to="/medidor">REGRESAR</Link>
          </button>
        </form> 
      </div>
    </div>
    );
}

export default Perfil;
