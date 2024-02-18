import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GitHubIcon from '@material-ui/icons/GitHub';
import PersonIcon from '@material-ui/icons/Person';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import InfoIcon from '@material-ui/icons/Info';
import fondoImagen from './imagenes/compu.jpg';
import testimonio1 from './imagenes/face.jpg';
import testimonio2 from './imagenes/face2.jpg';
import testimonio3 from './imagenes/face3.jpg';
import testimonio4 from './imagenes/face4.jpg';
import testimonio5 from './imagenes/face5.jpg';
import facebook from './imagenes/facebook.svg';
import twitter from './imagenes/twitter.svg';
import youtube from './imagenes/youtube.svg';

const SeccionTestimonios = ({ darkMode }) => {
  return (
    <section id="nosotros" className={`testimony ${darkMode ? 'bg-[#101b11]' : 'bg-gray-100'} py-16`}>
      <div className="container mx-auto">
        <h2 className={`title ${darkMode ? 'text-white' : ''} text-4xl font-bold text-center mb-12`}>
          <br />Conoce sobre Nosotros
        </h2>

        {/*  los testimonios son los perfiles de cada integrantes Testimonio 1 */}
        <div className="testimony__item mb-8 bg-[#a2e3f9] p-6 rounded-md flex flex-col md:flex-row items-center justify-between">
          <section className="testimony__body text-center ml-8 mr-4 md:text-left md:w-2/3">
            <h2 className="subtitle text-2xl font-bold mb-2">
              Nathaly Angamarca, <span className="testimony__course">Estudiante de UNL.</span>
            </h2>
            <p className="testimony__review mb-4">
              Estudiante de la carrera de Ingeniería en Sistemas/Computación de la Universidad Nacional de Loja
            </p>
            <a href="https://github.com/NathalyAngamarca" className="testimony__github block bg-[#5d8dee] text-white font-bold py-2 px-4 rounded" target="_blank" rel="noopener noreferrer">
              Visita mi Github
            </a>
          </section>
          <figure className="testimony__picture mt-4 md:mt-0 flex items-center justify-center">
            <img src={testimonio1} className="testimonio rounded-full" alt="Nathaly" style={{ maxWidth: '80%', maxHeight: '80%' }} />
          </figure>
        </div>

        {/* Testimonio 2 */}
        <div className="testimony__item mb-8 bg-[#cff4e0] p-6 rounded-md flex flex-col md:flex-row items-center justify-between">
          <figure className="testimony__picture mt-4 md:mt-0 flex items-center justify-center">
            <div className="mb-4 md:mb-0" style={{ maxWidth: '80%', maxHeight: '80%' }}>
              <img src={testimonio2} className="testimonio rounded-full" alt="Letty" />
            </div>
          </figure>
          <section className="testimony__body text-center ml-8 mr-4 md:text-left md:w-2/3">
            <h2 className="subtitle text-2xl font-bold mb-2">
              Letty Cañar, <span className="testimony__course">Estudiante de UNL.</span>
            </h2>
            <p className="testimony__review mb-4">
              Estudiante de la carrera de Ingeniería en Sistemas/Computación de la Universidad Nacional de Loja
            </p>
            <a href="https://github.com/LettyYas" className="testimony__github block bg-[#478b6d] text-white font-bold py-2 px-4 rounded" target="_blank" rel="noopener noreferrer">
              Visita mi Github
            </a>
          </section>
        </div>

        {/* Testimonio 3 */}
        <div className="testimony__item mb-8 bg-[#a2e3f9] p-6 rounded-md flex flex-col md:flex-row items-center justify-between">
          <section className="testimony__body text-center ml-8 mr-4 md:text-left md:w-2/3">
            <h2 className="subtitle text-2xl font-bold mb-2">
              Jose Encalada, <span className="testimony__course">Estudiante de UNL.</span>
            </h2>
            <p className="testimony__review mb-4">
              Estudiante de la carrera de Ingeniería en Sistemas/Computación de la Universidad Nacional de Loja
            </p>
            <a href="https://github.com/FerminEncalada" className="testimony__github block bg-[#5d8dee] text-white font-bold py-2 px-4 rounded" target="_blank" rel="noopener noreferrer">
              Visita mi Github
            </a>
          </section>
          <figure className="testimony__picture mt-4 md:mt-0 flex items-center justify-center">
            <img src={testimonio3} className="testimonio rounded-full" alt="Jose" style={{ maxWidth: '80%', maxHeight: '80%' }} />
          </figure>
        </div>

        {/* Testimonio 4 */}
        <div className="testimony__item mb-8 bg-[#cff4e0] p-6 rounded-md flex flex-col md:flex-row items-center justify-between">
          <figure className="testimony__picture mt-4 md:mt-0 flex items-center justify-center">
            <div className="mb-4 md:mb-0" style={{ maxWidth: '80%', maxHeight: '80%' }}>
              <img src={testimonio4} className="testimonio rounded-full" alt="Mauricio" />
            </div>
          </figure>
          <section className="testimony__body text-center ml-8 mr-4 md:text-left md:w-2/3">
            <h2 className="subtitle text-2xl font-bold mb-2">
              Mauricio Guachizaca, <span className="testimony__course">Estudiante de UNL.</span>
            </h2>
            <p className="testimony__review mb-4">
              Estudiante de la carrera de Ingeniería en Sistemas/Computación de la Universidad Nacional de Loja
            </p>
            <a href="https://github.com/mauricioguachizaca" className="testimony__github block bg-[#478b6d] text-white font-bold py-2 px-4 rounded" target="_blank" rel="noopener noreferrer">
              Visita mi Github
            </a>
          </section>
        </div>

        {/* Testimonio 5 */}
        <div className="testimony__item mb-8 bg-[#a2e3f9] p-6 rounded-md flex flex-col md:flex-row items-center justify-between">
          <section className="testimony__body text-center ml-8 mr-4 md:text-left md:w-2/3">
            <h2 className="subtitle text-2xl font-bold mb-2">
              Boris Rengel, <span className="testimony__course">Estudiante de UNL.</span>
            </h2>
            <p className="testimony__review mb-4">
              Estudiante de la carrera de Ingeniería en Sistemas/Computación de la Universidad Nacional de Loja
            </p>
            <a href="https://github.com/borisir" className="testimony__github block bg-[#5d8dee] text-white font-bold py-2 px-4 rounded" target="_blank" rel="noopener noreferrer">
              Visita mi Github
            </a>
          </section>
          <figure className="testimony__picture mt-4 md:mt-0 flex items-center justify-center">
            <img src={testimonio5} className="testimonio rounded-full" alt="Boris" style={{ maxWidth: '80%', maxHeight: '80%' }} />
          </figure>
        </div>

      </div>
    </section>
  );
};


export const Inicio = () => {
  // Estado para controlar el modo oscuro, inicializado como falso (modo claro) por defecto
  const [darkMode, setDarkMode] = useState(false);
  // Función para alternar entre el modo oscuro y claro
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);// Cambiar el estado de darkMode al contrario de su valor actual
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <nav className={`${darkMode ? 'bg-[#17301a]' : 'bg-[#478b6d]'}  p-6 flex items-center justify-between fixed top-0 w-full z-50 shadow-xl`}>
        <div className="mr-8"> {/* Margen de Click Wed con Las demas letras*/}
          <a href="#bienvenida" className="text-white font-extrabold text-2xl">CLIK WED</a>
        </div>
        <div className="text-center flex items-center space-x-4">
          <a href="#bienvenida" className="text-white transition duration-75 hover:font-bold hover:shadow-md">Inicio</a>
          <span className="text-white">|</span>
          <a href="/iniciar" className="text-white transition duration-75 hover:font-bold hover:shadow-md">Iniciar Sesion / Registro</a>
          <span className="text-white">|</span>
          <a href="#nosotros" className="text-white transition duration-75 hover:font-bold hover:shadow-md">Conoce sobre nosotros</a>
          <span className="text-white">|</span>
          <a href="https://github.com/mauricioguachizaca/Proyecto-integral-de-saberes.github.io" className="text-white flex items-center" target="_blank" rel="noopener noreferrer">
            <GitHubIcon style={{ color: '#ffffff' }} fontSize="large" className="ml-2" />
          </a>
        </div>
      </nav>
     
      {/* Sección de bienvenida */}
      <div id="bienvenida" className="bg-[#a2e3f9] flex flex-col items-center justify-center h-screen relative">
        <img src={fondoImagen} alt="fondo" className="absolute top-20 left-0 w-full h-full object-cover z-0" />
        {/* Contenido de la sección de bienvenida */}
        <div className="container mx-auto text-center relative z-10">
          <div className="text-center bg-opacity-80 p-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-16">Bienvenido/a a Nuestra Plataforma</h1>
            <p className="text-white text-lg md:text-xl mb-6">
              ¿Quieres conocer cuánto consume de energía tus dispositivos eléctricos?
            </p>
            <a href="/registro" className="bg-[#478b6d] text-white py-2 px-4 rounded-full text-lg md:text-xl hover:bg-[#5d8dee] transition duration-300">Descúbrelo aquí</a>
          </div>
        </div>
      </div>

      {/* Sección de botones (Iniciar Sesión, Registrarse, Información) */}
      <div className= {`flex items-center justify-evenly flex-wrap ${darkMode ? 'bg-[#121212]' : 'bg-white'} py-28 md:mt-20 `}>
        {/* boton y icono de inicio sesion*/}
        <Link to="/iniciar" className="text-center flex flex-col items-center mb-4">
          <div className="border border-gray-300 p-4 rounded">
            <PersonIcon style={{ fontSize: '4rem', color: darkMode ? 'white' : ''  }} />
          </div>
          <div className="text-center mt-2">
            <button className="bg-[#a2e3f9] text-black font-bold py-2 px-4 rounded">
              Iniciar Sesión
            </button>
          </div>
        </Link>

        {/* boton y icono de registro*/}
        <Link to="/registro" className="text-center flex flex-col items-center mb-4">
          <div className="border border-gray-300 p-4 rounded">
            <PersonAddIcon style={{ fontSize: '4rem', color: darkMode ? 'white' : '' }} />
          </div>
          <div className="text-center mt-2">
            <button className="bg-[#a2e3f9] text-black font-bold py-2 px-4 rounded">
              Registrarse
            </button>
          </div>
        </Link>

        {/* boton y icono de informacion*/}
        <Link to="/informacion" className="text-center flex flex-col items-center mb-4">
          <div className="border border-gray-300 p-4 rounded">
            <InfoIcon fontSize="large" style={{ fontSize: '4rem', color: darkMode ?  'white' : ''  }} />
          </div>
          <div className="text-center mt-2">
            <button className="bg-[#a2e3f9] text-black font-bold py-2 px-4 rounded">
              Información
            </button>
          </div>
        </Link>
      </div>

       {/* Sección de los Perfiles de cada colaborador */}
       <SeccionTestimonios darkMode={darkMode} />
     
      {/* Botón para activar/desactivar el modo oscuro */}
      <button onClick={toggleDarkMode} className="fixed bottom-4 right-4 bg-[#6D6E81] text-white rounded-full w-12 h-12 flex items-center justify-center">
        {darkMode ? '🌙' : '🌞'}
      </button>

      <footer className={`${darkMode ? 'bg-[#17301a]' : 'bg-[#478b6d]'}  p-5 text-blue-gray-100 text-center flex flex-col items-center`}>
        {/* Iconos de redes sociales */}
        <div className="flex">
          <a href="https://www.facebook.com/UNLoficial/?locale=es_LA" target="_blank" rel="noopener noreferrer">
            <img src={facebook} alt="facebook" style={{ width: '30px', height: '30px', color: 'black', marginRight: '10px' }} />
          </a>
          <a href="https://www.youtube.com/c/UNLOficial/videos" target="_blank" rel="noopener noreferrer">
            <img src={youtube} alt="youtube" style={{ width: '30px', height: '30px', color: 'black', marginRight: '10px' }} />
          </a>
          <a href="https://twitter.com/UNLoficial" target="_blank" rel="noopener noreferrer">
            <img src={twitter} alt="twitter" style={{ width: '30px', height: '30px', color: 'black', marginRight: '10px' }} />
          </a>
        </div>
        <div>
          Derechos reservados © Clik Wed
        </div>
      </footer>
    </div>
  );
};

export default Inicio;





