import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import GitHubIcon from '@material-ui/icons/GitHub';

const Registro = ({ modoNoche }) => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const { validarcredenciales, isAuthenticated } = useAuth();
  const navigation = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  // Efecto para redireccionar si el usuario está autenticado
  useEffect(() => {
    if (isAuthenticated) navigation("/medidor");
  }, [isAuthenticated]);

  // Función para validar la contraseña
  const validatePassword = (value) => {
    const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return regex.test(value);
  };

    // Función para manejar el envío del formulario
  const onSubmit = handleSubmit(async (values) => {
    if (!validatePassword(values.password)) {
      alert("La contraseña debe tener al menos 8 caracteres, una letra mayúscula y un carácter especial.");
      return;
    }
    validarcredenciales(values);
  });

  const password = watch("password", "");

  return (
    <div>
      <nav className={`${modoNoche ? 'bg-[#17301a]' : 'bg-[#478b6d]'} p-6 flex flex-col sm:flex-row justify-between items-center`}>
        <div className="mb-4 sm:mb-0">
          <Link to="#bienvenida" className="text-white font-extrabold text-2xl">Watt Control</Link>
        </div>
        <div className="text-center px-2 ">
          <Link to="/" className="text-white transition duration-75 hover:font-bold hover:shadow-md px-4">Inicio</Link>
          <span className="text-white">|</span>
          <Link to="/informacion" className="text-white transition duration-75 hover:font-bold hover:shadow-md px-4">Información</Link>
          <span className="text-white">|</span>
          <a href="https://github.com/mauricioguachizaca/Proyecto-integral-de-saberes.github.io" target="_blank" rel="noopener noreferrer">
            <GitHubIcon style={{ color: '#ffffff' }} fontSize="large" className="ml-4" />
          </a>
        </div>
      </nav>

      {/* Contenido del formulario */}
      <div className={`${modoNoche ? 'bg-[#1c201e]' : 'bg-[#a2e3f9]'} flex justify-center items-center h-screen`}>
        <div className={`${modoNoche ? 'bg-gray-800' : 'bg-white'}  max-w-4xl p-10 rounded-md border border-[#478b6d]`}>
          <h1 className={`${modoNoche ? 'text-white' : 'text-black'} text-3xl font-bold mb-6 text-center`}>Registro de Usuarios</h1>
          <form onSubmit={onSubmit} className="grid grid-cols-2 gap-6">
            <div>
              <div className="mb-6">
                <label htmlFor="nombre" className={`block ${modoNoche ? 'text-white' : 'text-black'} text-sm font-bold mb-2`}>Nombres:</label>
                <input
                  type="text"
                  {...register("nombre", { required: true })}
                  className='w-full border border-[#478b6d] text-black bg-[#d4e8ee] px-4 py-2 rounded-md '
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
                {errors.cedula && (<p className='text-red-900'>Cédula es requerida</p>)}
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
                {errors.password && errors.password.type === "validate" && (<p className='text-red-900'>La contraseña debe tener al menos 8 caracteres, una letra mayúscula y un carácter especial.</p>)}
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
          </form>
          <p className={`${modoNoche ? 'text-white' : 'text-black'} flex items-center justify-between mt-4`}>
            ¿Si ya tienes una cuenta? <Link to="/iniciar" className={`font-bold ${modoNoche ? 'text-[#84dcec]' : 'text-[#47728b]'}`}>Iniciar Sesión</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Registro;
