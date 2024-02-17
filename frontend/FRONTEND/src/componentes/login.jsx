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
    <div className="flex justify-center items-center h-screen bg-[#a2e3f9]">
      <div className='bg-white max-w-sm p-6 rounded-md border border-[#478b6d]'>
        <form onSubmit={onSubmit} className="grid grid-cols-1 gap-6">
          <div>
            <div className="mb-3">
              <label htmlFor="nombreusuario" className="block text-black text-sm font-bold mb-2">Nombre de usuario:</label>
              <input
                type="text"
                {...register("nombreusuario", { required: true })}
                className='w-full border border-[#478b6d] text-black px-4 py-2 rounded-md'
              />
              {errors.nombreusuario && (<p className='text-red-900'>Nombre de usuario es requerido</p>)}
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="block text-black text-sm font-bold mb-2">Contraseña:</label>
              <input
                type="password"
                {...register("password", { required: true })}
                className='w-full border border-[#478b6d] text-black px-4 py-2 rounded-md'
              />
              {errors.password && (<p className='text-red-900'>La contraseña es requerida</p>)}
            </div>
          </div>
          <button type="submit" className="bg-[#478b6d] text-white py-2 px-4 rounded hover:bg-blue-600 w-full">
            Iniciar Sesión
          </button>
        </form>
        <p className="flex gap-x-2 justify-between mt-4">
          ¿No tienes una cuenta aún? <Link to="/registro" className="text-blue-500">Regístrate</Link>
        </p>
      </div>
    </div>
  )
}

export default Login;
