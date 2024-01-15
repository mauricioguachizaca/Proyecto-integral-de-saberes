import React from 'react';
import { Link } from 'react-router-dom';
import GitHubIcon from '@material-ui/icons/GitHub';
import PersonIcon from '@material-ui/icons/Person';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import InfoIcon from '@material-ui/icons/Info';
import fondoImagen from './imagenes/compu.jpg';  // Asegúrate de tener la ruta correcta

export const Inicio = () => {
  return (
    <div>
      <nav className='bg-cyan-700 p-5 flex items-center justify-between fixed top-0 w-full -z-50 shadow-xl'>
        <div>
          <Link to="/" className='text-deep-purple-900 font-bold text-2xl'>CLIK WED</Link>
        </div>
        <div className='flex items-center space-x-4 ml-auto'>
          <Link to="/" className="text-white transition duration-300 hover:font-bold hover:shadow-md fon">Inicio</Link>
          <Link className='text-white transition duration-75 hover:font-bold hover:shadow-md'>Conoce sobre nosotros</Link>
          <Link to="https://github.com/mauricioguachizaca/Proyecto-integral-de-saberes.github.io" className="text-white">
            <GitHubIcon style={{ color: 'black'[500] }} fontSize="large" />
          </Link>
        </div>
      </nav>

      <section className=" w-1000 h-100 mt-16 flex items-center justify-center flex-col h-screen bg-cover bg-center "
        style={{ backgroundImage: `url(${fondoImagen})` }}>
        <h1 className='font-semibold text-4xl text-red-500 mb-4'>Quieres saber cuánto 
        <p /> consumen tus dispositivos eléctricos</h1>
        <p className='font-semibold text-4xl text-red-500 '>descubrelo aqui!!</p>
      </section>
      <div className='mt-10 flex items-center justify-evenly'>

{/* boton y icono de iniciar sesion no cambiar solo agregar estilos*/}
        <Link to="/iniciar sesion">
        <PersonIcon fontSize="large" />
        <button>Iniciar Sesion</button>

{/* boton y icono de registero no cambiar solo agregar estilos*/}
        </Link>
        <Link to="/registro">
        <PersonAddIcon fontSize="large"/>
        <button>Registrate</button>
        </Link>

{/* boton y icono de informacion no cambiar solo agregar estilos*/}
      <Link to="/informacion">
        <InfoIcon fontSize="large"/>
        <button>Informacion</button>
        </Link>
        </div>
        {/* aqui se agrega lo de mas de la pagina de inicio */}


        <footer className="bg-cyan-90 mt-28 p-5  text-blue-gray-100 text-center">hola</footer>
        

      
    </div>
  );
}
