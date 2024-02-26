import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react"; // Agregamos el useState




const Login = ({ modoNoche }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { inicios, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false); // Estado para controlar la visibilidad de la contraseña


  const onSubmit = handleSubmit((data) => {
    inicios(data);
  });


  useEffect(() => {
    if (isAuthenticated) navigate("/medidor")
  }, [isAuthenticated])


  return (
    <div className={`${modoNoche ? 'bg-[#1c201e]' : 'bg-[#a2e3f9]'} flex justify-center items-center h-screen`}>
      <div className={`${modoNoche ? 'bg-gray-800' : 'bg-white'} max-w-sm p-6 rounded-md border border-[#478b6d]`}>
        <form onSubmit={onSubmit} className="grid grid-cols-1 gap-6">
          <div>
            <div className="mb-3">
              <label htmlFor="nombreusuario" className={`block ${modoNoche ? 'text-white' : 'text-black'} text-sm font-bold mb-2`}>Nombre de usuario:</label>
              <input
                type="text"
                {...register("nombreusuario", { required: true })}
                className='w-full border border-[#478b6d] text-black bg-[#d4e8ee] px-4 py-2 rounded-md'
              />
              {errors.nombreusuario && (<p className='text-red-900'>Nombre de usuario es requerido</p>)}
            </div>
            <div className="mb-3">
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
          </div>
          <button type="submit" className="bg-[#478b6d] text-white py-2 px-4 rounded hover:bg-[#5d8dee] w-full">
            INICIAR SESIÓN
          </button>
        </form>
        <p className={`${modoNoche ? 'text-white' : 'text-black'} flex items-center justify-between mt-4`}>
          <span>¿No tienes una cuenta aún?</span>
          <span className="mr-8"></span>
          <Link to="/registro" className={`font-bold ${modoNoche ? 'text-[#84dcec]' : 'text-[#47728b]'}`}>Regístrate</Link>
        </p>
      </div>
    </div>
  )
}

export default Login;

