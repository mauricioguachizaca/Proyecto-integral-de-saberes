import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Registro() {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const { validarcredenciales, isAuthenticated } = useAuth();
  const navigation = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigation("/medidor");
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    console.log(values);
    validarcredenciales(values);
  });

  const password = watch("password", "");

  return (
    <div className="flex justify-center items-center h-screen bg-[#a2e3f9]">
      <div className='bg-white max-w-4xl p-10 rounded-md border border-[#478b6d]'>
        <form onSubmit={onSubmit} className="grid grid-cols-2 gap-6">
          <div>
            <div className="mb-6">
              <label htmlFor="nombre" className="block text-black text-sm font-bold mb-2">Nombres:</label>
              <input
                type="text"
                {...register("nombre", { required: true })}
                className='w-full border border-[#478b6d] text-black px-4 py-2 rounded-md'
              />
              {errors.nombre && (<p className='text-red-900'>Nombres es requerido</p>)}
            </div>
            <div className="mb-6">
              <label htmlFor="apellido" className="block text-black text-sm font-bold mb-2">Apellidos:</label>
              <input
                type="text"
                {...register("apellido", { required: true })}
                className='w-full border border-[#478b6d] text-black px-4 py-2 rounded-md'
              />
              {errors.apellido && (<p className='text-red-900'>Apellidos es requerido</p>)}
            </div>
            <div className="mb-6">
              <label htmlFor="cedula" className="block text-black text-sm font-bold mb-2">Cédula:</label>
              <input
                type="text"
                {...register("cedula", { required: true })}
                className='w-full border border-[#478b6d] text-black px-4 py-2 rounded-md'
              />
              {errors.cedula && (<p className='text-red-900'>Cédula es requerido</p>)}
            </div>
            <div className="mb-6">
              <label htmlFor="nombreusuario" className="block text-black text-sm font-bold mb-2">Nombre de usuario:</label>
              <input
                type="text"
                {...register("nombreusuario", { required: true })}
                className='w-full border border-[#478b6d] text-black px-4 py-2 rounded-md'
              />
              {errors.nombreusuario && (<p className='text-red-900'>Nombre de usuario es requerido</p>)}
            </div>
          </div>
          <div>
            <div className="mb-6">
              <label htmlFor="provincia" className="block text-black text-sm font-bold mb-2">Provincia:</label>
              <input
                type="text"
                {...register("provincia", { required: true })}
                className='w-full border border-[#478b6d] text-black px-4 py-2 rounded-md'
              />
              {errors.provincia && (<p className='text-red-900'>Provincia es requerida</p>)}
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-black text-sm font-bold mb-2">Contraseña:</label>
              <input
                type="password"
                {...register("password", { required: true })}
                className='w-full border border-[#478b6d] text-black px-4 py-2 rounded-md'
              />
              {errors.password && (<p className='text-red-900'>La contraseña es requerida</p>)}
            </div>
            <div className="mb-6">
              <label htmlFor="correo" className="block text-black text-sm font-bold mb-2">Correo:</label>
              <input
                type="text"
                {...register("correo", { required: true })}
                className='w-full border border-[#478b6d] text-black px-4 py-2 rounded-md'
              />
              {errors.correo && (<p className='text-red-900'>Correo es requerido</p>)}
            </div>
          </div>
          <button type="submit" className="col-span-2  bg-[#478b6d] text-white py-2 px-4 rounded hover:bg-[#5d8dee]">
            Registrar
          </button>
        </form>
        <p className="flex gap-x-2 justify-between mt-4">
          Si ya tienes una cuenta <Link to="/iniciar" className="text-[#5d8dee]">Iniciar Sesión</Link>
        </p>
      </div>
    </div>
  );
}

export default Registro;
