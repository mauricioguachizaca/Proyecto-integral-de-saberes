import { useForm } from 'react-hook-form';
import { useMedidor } from '../context/MedidorContext';

function Agregarmedidor() {
  const { register, handleSubmit } = useForm();
  const {crearMedidor} = useMedidor()

  const onSubmit = handleSubmit((data) => {
    crearMedidor(data);
  });
  return (
    <div className="flex justify-center items-center h-screen">
    <form onSubmit={onSubmit} className="w-full max-w-md bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombredispositivo">
          Nombre del dispositivo
        </label>
        <input 
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          id="nombredispositivo" 
          type="text" 
          {...register("nombredispositivo")}
          autoFocus
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cantidad">
          Cantidad
        </label>
        <input 
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          id="cantidad" 
          type="number" 
          {...register("cantidad")}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="potencia">
          Potencia (w)
        </label>
        <input 
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          id="potencia" 
          type="number" 
          {...register("potencia")}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tiempodeuso">
          Tiempo de uso diario (Horas)
        </label>
        <input 
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          id="tiempodeuso" 
          type="number" 
          {...register("tiempodeuso")}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="numerodeuso">
          Número de días de uso al mes
        </label>
        <input 
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          id="numerodeuso" 
          type="number" 
          {...register("numerodeuso")}
        />
      </div>

      <button 
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Crear
      </button>
    </form>
  </div>
);
}

export default Agregarmedidor;
