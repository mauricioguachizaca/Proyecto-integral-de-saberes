import { useForm } from 'react-hook-form';
import { useMedidor } from '../context/MedidorContext';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

function Agregarmedidor() {
  const { register, handleSubmit, setValue } = useForm();
  const { crearMedidor, mimedidor, actualizarmedidor } = useMedidor();
  const navigate = useNavigate(); // Corregida la variable navitage a navigate
  const params = useParams();

  useEffect(() => {
    async function cargaMedidor() {
      if (params.id) {
        const medidor = await mimedidor(params.id);
        console.log(medidor);
        setValue('nombredispositivo', medidor.nombredispositivo);
        setValue('cantidad', medidor.cantidad);
        setValue('potencia', medidor.potencia);
        setValue('tiempodeuso', medidor.tiempodeuso);
        setValue('numerodeuso', medidor.numerodeuso);
      }
    }
    cargaMedidor();
  }, [params.id]); // Agregada la dependencia params.id para que el efecto se ejecute cuando cambie

  const onSubmit = handleSubmit((data) => {
    if (params.id) {
      actualizarmedidor(params.id, data);
    } else {
      crearMedidor(data);
    }
    navigate('/medidor'); // Corregida la función de navegación
  });

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200"> {/* Cambiado el color de fondo */}
      <form onSubmit={onSubmit} className="w-full max-w-md bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border border-[#478b6d]"> {/* Añadidos bordes oscuros */}
        <div className="mb-4">
          <label className="block text-black text-sm font-bold mb-2" htmlFor="nombredispositivo"> {/* Cambiado el color del texto */}
            Nombre del dispositivo
          </label>
          <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline border-[#478b6d]" // Añadidos bordes oscuros
            id="nombredispositivo" 
            type="text" 
            {...register("nombredispositivo")}
            autoFocus
          />
        </div>
        <div className="mb-4">
          <label className="block text-black text-sm font-bold mb-2" htmlFor="cantidad"> {/* Cambiado el color del texto */}
            Cantidad
          </label>
          <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline border-[#478b6d]" // Añadidos bordes oscuros
            id="cantidad" 
            type="number" 
            {...register("cantidad")}
          />
        </div>
        <div className="mb-4">
          <label className="block text-black text-sm font-bold mb-2" htmlFor="potencia"> {/* Cambiado el color del texto */}
            Potencia (w)
          </label>
          <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline border-[#478b6d]" // Añadidos bordes oscuros
            id="potencia" 
            type="number" 
            {...register("potencia")}
          />
        </div>
        <div className="mb-4">
          <label className="block text-black text-sm font-bold mb-2" htmlFor="tiempodeuso"> {/* Cambiado el color del texto */}
            Tiempo de uso diario (Horas)
          </label>
          <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline border-[#478b6d]" // Añadidos bordes oscuros
            id="tiempodeuso" 
            type="number" 
            {...register("tiempodeuso")}
          />
        </div>
        <div className="mb-4">
          <label className="block text-black text-sm font-bold mb-2" htmlFor="numerodeuso"> {/* Cambiado el color del texto */}
            Número de días de uso al mes
          </label>
          <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline border-[#478b6d]" // Añadidos bordes oscuros
            id="numerodeuso" 
            type="number" 
            {...register("numerodeuso")}
          />
        </div>

        <button type="submit" className="bg-[#478b6d] text-white py-2 px-4 rounded hover:bg-[#5d8dee] w-full">
            GUARDAR
          </button>
      </form>
    </div>
  );
}

export default Agregarmedidor;
