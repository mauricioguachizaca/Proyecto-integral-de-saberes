import { useForm } from 'react-hook-form';
import { useMedidor } from '../context/MedidorContext';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

function Agregarmedidor({ modoNoche }) {
  const { register, handleSubmit, setValue } = useForm();
  const { crearMedidor, mimedidor, actualizarmedidor } = useMedidor();
  const navigate = useNavigate();
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
  }, []);

  const onSubmit = handleSubmit((data) => {
    if (params.id) {
      actualizarmedidor(params.id, data);
    } else {
      crearMedidor(data);
    }
    navigate('/medidor');
  });

  return (
    <div className={`${modoNoche ? 'bg-[#1c201e] text-white' : 'bg-[#a2e3f9] text-black'} flex justify-center items-center h-screen ]`}>
     <form onSubmit={onSubmit} className={`w-full max-w-md border border-[#478b6d] shadow-md rounded px-8 pt-6 pb-8 mb-4 ${modoNoche ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="mb-4">
          <label className={`block text-black text-sm font-bold mb-2 ${modoNoche ? 'text-white' : ''}`} htmlFor="nombredispositivo">
            Nombre del dispositivo
          </label>
          <input 
            className={`shadow appearance-none border rounded w-full border-[#478b6d] py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline ${modoNoche ? 'bg-[#d4e8ee] text-black' : 'bg-[#d4e8ee] text-black'}`} 
            id="nombredispositivo" 
           type="text" 
           {...register("nombredispositivo")}
          autoFocus
           />
        </div>
        <div className="mb-4">
          <label className={`block text-black text-sm font-bold mb-2 ${modoNoche ? 'text-white' : ''}`} htmlFor="cantidad">
            Cantidad
          </label>
          <input 
             className={`shadow appearance-none border rounded w-full border-[#478b6d]  py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline ${modoNoche ? 'bg-[#d4e8ee] text-black' : 'bg-[#d4e8ee] text-black'}`}  
            id="cantidad" 
            type="number" 
            {...register("cantidad")}
          />
        </div>
        <div className="mb-4">
          <label className={`block text-black text-sm font-bold mb-2 ${modoNoche ? 'text-white' : ''}`} htmlFor="potencia">
            Potencia (W)
          </label>
          <input 
             className={`shadow appearance-none border rounded w-full border-[#478b6d]  py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline ${modoNoche ? 'bg-[#d4e8ee] text-black' : 'bg-[#d4e8ee] text-black'}`} 
            id="potencia" 
            type="number" 
            {...register("potencia")}
          />
        </div>
        <div className="mb-4">
          <label className={`block text-black text-sm font-bold mb-2 ${modoNoche ? 'text-white' : ''}`} htmlFor="tiempodeuso">
            Tiempo de uso diario (Horas)
          </label>
          <input 
             className={`shadow appearance-none border rounded w-full border-[#478b6d] py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline ${modoNoche ? 'bg-[#d4e8ee] text-black' : 'bg-[#d4e8ee] text-black'}`} 
            id="tiempodeuso" 
            type="number" 
            {...register("tiempodeuso")}
          />
        </div>
        <div className="mb-4">
          <label className={`block text-black text-sm font-bold mb-2 ${modoNoche ? 'text-white' : ''}`} htmlFor="numerodeuso">
            Número de días de uso al mes
          </label>
          <input 
             className={`shadow appearance-none border rounded w-full border-[#478b6d] py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline ${modoNoche ? 'bg-[#d4e8ee] text-black' : 'bg-[#d4e8ee] text-black'}`} 
            id="numerodeuso" 
            type="number" 
            {...register("numerodeuso")}
          />
        </div>

        <button 
  type="submit"
  className={`bg-[#478b6d] hover:bg-[#5d8dee] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${modoNoche ? 'bg-[#478b6d] hover:bg-[#5d8dee]' : ''}`}
>
  Guardar
</button>
      </form>
    </div>
  );
}

export default Agregarmedidor;
