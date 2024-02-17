import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { inicios } = useAuth();

  const onSubmit = handleSubmit((data) => {
    inicios(data);
  });

  return (
    <div className="flex justify-center items-center h-screen bg-blue-100">
      <div className='bg-teal-700 max-w-md p-10 rounded-md'>
        <form onSubmit={onSubmit}>
          <div className="mb-4">
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
            {errors.password && (<p className='text-red-900'>La contraseña es requerida</p>)}
          </div>

          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded w-full hover:bg-blue-600"> {/* Modificado para ocupar todo el ancho disponible */}
            Iniciar Sesión
          </button>
        </form>
        <p className="flex gap-x-2 justify-between">
          ¿No tienes una cuenta aún? <Link to="/registro" className="text-blue-500">Regístrate</Link>
        </p>
      </div>
    </div>
  )
}

export default Login;
