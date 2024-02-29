import { useForm } from "react-hook-form";
import { useMedidor } from "../context/MedidorContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

function Agregarmedidor({ modoNoche }) {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const { crearMedidor, mimedidor, actualizarmedidor } = useMedidor();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function cargaMedidor() {
      if (params.id) {
        const medidor = await mimedidor(params.id);
        console.log(medidor);
        setValue("nombredispositivo", medidor.nombredispositivo);
        setValue("cantidad", medidor.cantidad);
        setValue("potencia", medidor.potencia);
        setValue("tiempodeuso", medidor.tiempodeuso);
        setValue("numerodeuso", medidor.numerodeuso);
      }
    }
    cargaMedidor();
  }, []);

  const onSubmit = handleSubmit((data) => {
    // Validar valores negativos
    if (
      data.cantidad < 1 ||
      data.potencia < 1 ||
      data.tiempodeuso < 1 ||
      data.numerodeuso < 1
    ) {
      alert("Valor no aceptado");
      return;
    }
    // Validar campos vacíos
    if (!data.nombredispositivo) {
      alert("Por favor completa el campo Nombre del dispositivo");
      return;
    }
    if (!data.cantidad) {
      alert("Por favor completa el campo Cantidad");
      return;
    }
    if (!data.potencia) {
      alert("Por favor completa el campo Potencia");
      return;
    }
    if (!data.tiempodeuso) {
      alert("Por favor completa el campo Tiempo de uso diario");
      return;
    }
    if (!data.numerodeuso) {
      alert("Por favor completa el campo Número de días de uso al mes");
      return;
    }
    if (params.id) {
      actualizarmedidor(params.id, data);
    } else {
      crearMedidor(data);
    }
    navigate("/medidor");
  });

  return (
    <div className={`${modoNoche ? 'bg-[#1c201e] text-white' : 'bg-[#a2e3f9] text-black'} flex justify-center items-center h-screen ]`}>
      <form onSubmit={onSubmit} className={`w-full max-w-md border border-[#478b6d] shadow-md rounded px-8 pt-6 pb-8 mb-4 ${modoNoche ? 'bg-gray-800' : 'bg-white'}`}>
        <h1 className={`${modoNoche ? 'text-white' : 'text-black'} text-3xl font-bold mb-6 text-center`}>Ingreso de dispositivos</h1>
        <div className="mb-4">
          <label className={`block text-black text-sm font-bold mb-2 ${modoNoche ? 'text-white' : ''}`} htmlFor="nombredispositivo">
            Nombre del dispositivo
          </label>
          <input 
            className={`shadow appearance-none border rounded w-full border-[#478b6d] py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline ${modoNoche ? 'bg-[#d4e8ee] text-black' : 'bg-[#d4e8ee] text-black'}`} 
            id="nombredispositivo" 
            type="text" 
            {...register("nombredispositivo", { required: true })}
            autoFocus
          />
          {errors.nombredispositivo && errors.nombredispositivo.type === 'required' && (
            <p className='text-red-900'>Complete este campo</p>
          )}
        </div>
        <div className="mb-4">
          <label className={`block text-black text-sm font-bold mb-2 ${modoNoche ? 'text-white' : ''}`} htmlFor="cantidad">
            Cantidad
          </label>
          <input 
            className={`shadow appearance-none border rounded w-full border-[#478b6d] py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline ${modoNoche ? 'bg-[#d4e8ee] text-black' : 'bg-[#d4e8ee] text-black'}`}  
            id="cantidad" 
            type="number" 
            {...register("cantidad", { required: true, min: 1 })}
          />
          {errors.cantidad && errors.cantidad.type === 'required' && (
            <p className='text-red-900'>Complete este campo</p>
          )}
          {errors.cantidad && errors.cantidad.type === 'min' && (
            <p className='text-red-900'>Ingrese un valor válido</p>
          )}
        </div>
        <div className="mb-4">
          <label className={`block text-black text-sm font-bold mb-2 ${modoNoche ? 'text-white' : ''}`} htmlFor="potencia">
            Potencia (W)
          </label>
          <input 
            className={`shadow appearance-none border rounded w-full border-[#478b6d] py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline ${modoNoche ? 'bg-[#d4e8ee] text-black' : 'bg-[#d4e8ee] text-black'}`} 
            id="potencia" 
            type="number" 
            {...register("potencia", { required: true, min: 1 })}
          />
          {errors.potencia && errors.potencia.type === 'required' && (
            <p className='text-red-900'>Complete este campo</p>
          )}
          {errors.potencia && errors.potencia.type === 'min' && (
            <p className='text-red-900'>Ingrese un valor válido</p>
          )}
        </div>
        <div className="mb-4">
          <label className={`block text-black text-sm font-bold mb-2 ${modoNoche ? 'text-white' : ''}`} htmlFor="tiempodeuso">
            Tiempo de uso diario (Horas)
          </label>
          <input 
            className={`shadow appearance-none border rounded w-full border-[#478b6d] py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline ${modoNoche ? 'bg-[#d4e8ee] text-black' : 'bg-[#d4e8ee] text-black'}`} 
            id="tiempodeuso" 
            type="number" 
            {...register("tiempodeuso", { required: true, min: 1 })}
          />
          {errors.tiempodeuso && errors.tiempodeuso.type === 'required' && (
            <p className='text-red-900'>Complete este campo</p>
          )}
          {errors.tiempodeuso && errors.tiempodeuso.type === 'min' && (
            <p className='text-red-900'>Ingrese un valor válido</p>
          )}
        </div>
        <div className="mb-4">
          <label className={`block text-black text-sm font-bold mb-2 ${modoNoche ? 'text-white' : ''}`} htmlFor="numerodeuso">
            Número de días de uso al mes
          </label>
          <input 
            className={`shadow appearance-none border rounded w-full border-[#478b6d] py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline ${modoNoche ? 'bg-[#d4e8ee] text-black' : 'bg-[#d4e8ee] text-black'}`} 
            id="numerodeuso" 
            type="number" 
            {...register("numerodeuso", { required: true, min: 1, max: 31})}
          />
          {errors.numerodeuso && errors.numerodeuso.type === 'required' && (
            <p className='text-red-900'>Complete este campo</p>
          )}
          {errors.numerodeuso && errors.numerodeuso.type === 'min' && (
            <p className='text-red-900'>Ingrese un valor válido</p>
          )}
          {errors.numerodeuso && errors.numerodeuso.type === 'max' && (
            <p className='text-red-900'>Ingrese un valor válido</p>
          )}
        </div>

        <button 
          type="submit"
          className={`bg-[#478b6d] hover:bg-[#5d8dee] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${modoNoche ? 'bg-[#478b6d] hover:bg-[#5d8dee]' : ''}`}
        >
          Guardar
        </button>
        <button 
          type="button"
          className={`bg-[#478b6d] hover:bg-[#5d8dee] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2 ${modoNoche ? 'bg-[#478b6d] hover:bg-[#5d8dee]' : ''}`}
          onClick={() => navigate(-1)} // Regresa a la página anterior
        >
          Regresar
        </button>
      </form>
    </div>
  );
}

export default Agregarmedidor;
