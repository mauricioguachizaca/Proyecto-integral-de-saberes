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

const SeccionTestimonios = () => {
  return (
    <section className="testimony bg-gray-100 py-16">
      <div id="nosotros" className="container mx-auto">
        <h2 className="title text-4xl font-bold text-center mb-8">
          Conoce sobre Nosotros
        </h2>

        {/* Testimonio 1 */}
        <div className="testimony__item mb-8 bg-[#a2e3f9] p-6 rounded-md flex flex-col md:flex-row items-center justify-between">
          <section className="testimony__body text-center md:text-left md:w-2/3">
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
          <figure className="testimony__picture mt-4 md:mt-0">
            <img src={testimonio1} className="testimonio rounded-full" alt="Nathaly's face" style={{ maxWidth: '80%', maxHeight: '80%' }} />
          </figure>
        </div>


        {/* Testimonio 2 */}
        <div className="testimony__item mb-8 bg-[#cff4e0] p-6 rounded-md flex flex-col md:flex-row items-center justify-between">
        <figure className="testimony__picture mt-4 md:mt-0">
            <img src={testimonio2} className="testimonio rounded-full" alt="Descripción de la imagen" style={{ maxWidth: '80%', maxHeight: '80%' }} />
          </figure>
          <section className="testimony__body text-center md:text-left md:w-2/3">
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
          <section className="testimony__body text-center md:text-left md:w-2/3">
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
          <figure className="testimony__picture mt-4 md:mt-0 mx-auto"> {/* Agregada clase mx-auto */}
            <img src={testimonio3} className="testimonio rounded-full" alt="Nathaly's face" style={{ maxWidth: '80%', maxHeight: '80%' }} />
          </figure>
        </div>

        {/* Testimonio 4 */}
        <div className="testimony__item mb-8 bg-[#cff4e0] p-6 rounded-md flex flex-col md:flex-row items-center justify-between">
        <figure className="testimony__picture mt-4 md:mt-0">
            <img src={testimonio4} className="testimonio rounded-full" alt="Descripción de la imagen" style={{ maxWidth: '80%', maxHeight: '80%' }} />
          </figure>
          <section className="testimony__body text-center md:text-left md:w-2/3">
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
          <section className="testimony__body text-center md:text-left md:w-2/3">
            <h2 className="subtitle text-2xl font-bold mb-2">
              Boris Rengel , <span className="testimony__course">Estudiante de UNL.</span>
            </h2>
            <p className="testimony__review mb-4">
              Estudiante de la carrera de Ingeniería en Sistemas/Computación de la Universidad Nacional de Loja
            </p>
            <a href="https://github.com/Borisir" className="testimony__github block bg-[#5d8dee] text-white font-bold py-2 px-4 rounded" target="_blank" rel="noopener noreferrer">
              Visita mi Github
            </a>
            </section>
          <figure className="testimony__picture mt-4 md:mt-0">
            <img src={testimonio5} className="testimonio rounded-full" alt="Nathaly's face" style={{ maxWidth: '80%', maxHeight: '80%' }} />
          </figure>
        </div>

      </div>
    </section>
  );
};


export const Inicio = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div>
      <nav className="bg-[#154918] p-5 flex items-center justify-between fixed top-0 w-full z-50 shadow-xl">
        <div>
          <a href="#bienvenida" className="text-white font-extrabold text-2xl">CLIK WED</a>
        </div>
        <div className="flex items-center space-x-4 ml-auto md:hidden">
          <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <div className={`hidden md:flex items-center space-x-4 ${mobileMenuOpen ? 'hidden' : 'block'}`}>
          <a href="#bienvenida" className="text-white transition duration-75 hover:font-bold hover:shadow-md">Inicio</a>
          <span className="text-white">|</span>
          <a href="#nosotros" className="text-white transition duration-75 hover:font-bold hover:shadow-md">Conoce sobre nosotros</a>
          <span className="text-white">|</span>
          <a href="https://github.com/mauricioguachizaca/Proyecto-integral-de-saberes.github.io" className="text-white flex items-center" target="_blank" rel="noopener noreferrer">
            <GitHubIcon style={{ color: '#ffffff' }} fontSize="large" className="ml-2" />
          </a>
        </div>
      </nav>

      {/* Menú Móvil */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#154918] p-4">
          <a href="#bienvenida" className="text-white block mb-2">Inicio</a>
          <a href="#nosotros" className="text-white block mb-2">Conoce sobre nosotros</a>
          <a href="https://github.com/mauricioguachizaca/Proyecto-integral-de-saberes.github.io" className="text-white block mb-2" target="_blank" rel="noopener noreferrer">
            <GitHubIcon style={{ color: '#ffffff' }} fontSize="large" className="ml-2" />
          </a>
        </div>
      )}

      <section className="w-full h-screen bg-cover bg-center flex items-center justify-center text-white" style={{ backgroundImage: `url(${fondoImagen})` }}>
        <div className="text-center">
          <h1 className="font-bold text-3xl md:text-5xl lg:text-6xl mb-4 md:mb-8">BIENVENIDO/A A NUESTRA PÁGINA WEB.</h1>
          <p className="text-base md:text-xl mb-4">¿Quieres conocer cuánto consume de energía tus dispositivos eléctricos?</p>
          <a href="#" className="bg-[#47d9e1] text-white py-2 px-4 rounded-full text-lg md:text-xl hover:bg-blue-600 transition duration-300">Descúbrelo aquí</a>
        </div>
      </section>

      <div className="mt-10 md:mt-20 flex items-center justify-evenly flex-wrap">
        <Link to="/iniciar-sesion" className="text-center flex flex-col items-center mb-4">
          <div className="border border-gray-300 p-4 rounded">
            <PersonIcon style={{ fontSize: '4rem' }} />
          </div>
          <div className="text-center mt-2">
            <button className="bg-[#4c4b4c] text-white font-bold py-2 px-4 rounded">
               Iniciar Sesión
           </button>
      </div>
        </Link>

        {/* boton y icono de registro no cambiar solo agregar estilos*/}
        <Link to="/registro" className="text-center flex flex-col items-center mb-4">
        <div className="border border-gray-300 p-4 rounded">
          <PersonAddIcon style={{ fontSize: '4rem' }} />
        </div>
        <div className="text-center mt-2">
          <button className="bg-[#4c4b4c] text-white font-bold py-2 px-4 rounded">
            Registrarse
          </button>
        </div>
      </Link>

        {/* boton y icono de informacion no cambiar solo agregar estilos*/}
        <Link to="/informacion" className="text-center flex flex-col items-center mb-4">
        <div className="border border-gray-300 p-4 rounded">
          <InfoIcon fontSize="large" style={{ fontSize: '4rem' }} />
        </div>
        <div className="text-center mt-2">
          <button className="bg-[#4c4b4c] text-white font-bold py-2 px-4 rounded">
            Información
          </button>
        </div>
      </Link>
    </div>

      <SeccionTestimonios />
        <footer className="bg-[#154918] mt-28 p-5 text-blue-gray-100 text-center flex flex-col items-center">
        <div className="flex">
          <a href="https://www.facebook.com/UNLoficial/?locale=es_LA" target="_blank" rel="noopener noreferrer">
            <img src={facebook} alt="facebook" style={{ width: '30px', height: '30px', color: 'black', marginRight: '10px' }} />
          </a>
          <a href="https://www.youtube.com/c/UNLOficial/videos" target="_blank" rel="noopener noreferrer">
            <img src={youtube} alt="youtube" style={{ width: '30px', height: '30px', color: 'black', marginRight: '10px' }} />
          </a>
          <a href="uhttps://twitter.com/UNLoficial?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank" rel="noopener noreferrer">
            <img src={twitter} alt="twitter" style={{ width: '30px', height: '30px', color: 'black', marginRight: '10px' }} />
          </a>
        </div>
        <div>
          Derechos reservados © Click Wed
        </div>
      </footer>
    </div>
  );
};

export default Inicio;
