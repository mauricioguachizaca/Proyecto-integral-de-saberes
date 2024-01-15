import React from 'react';
import { Link } from 'react-router-dom';
import GitHubIcon from '@material-ui/icons/GitHub';
import PersonIcon from '@material-ui/icons/Person';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import InfoIcon from '@material-ui/icons/Info';
import fondoImagen from './imagenes/compu.jpg';  // Asegúrate de tener la ruta correcta
//Imgenes de cada perfil de github
import testimonio1 from './imagenes/face.jpg';
import testimonio2 from './imagenes/face2.jpg';
import testimonio3 from './imagenes/face3.jpg';
import testimonio4 from './imagenes/face4.jpg';
import testimonio5 from './imagenes/face5.jpg';


const SeccionTestimonios = () => {
  return (
    <section className="testimony flex justify-center ">
      <div id="nosotros"  className="testimony__container container  ">
        <h2 className="title text-4xl font-bold text-center mt-80 mb-8">
          Conoce sobre Nosotros
        </h2>
        {/* Testimonio 1 */}
        <div className="flex items-center justify-between border p-4 mb-8 bg-[#a2e3f9] rounded-md">
          <section className="testimony__body testimony__body--show" data-id="1">
            <div className="testimony__texts ml-36 mr-32">
              <h2 className="subtitle  text-2xl font-bold ml text-center">
                <hr className="border-t-2 border-black my-3" />
                Nathaly Angamarca, <span className="testimony__course">Estudiante de UNL.</span></h2>
              <hr className="border-t-2 border-black my-3" />
              <p className="testimony__review">Estudiante de la carrera de Ingeniería en Sistemas/Computación de la Universidad Nacional de Loja</p>
              <a href="https://github.com/NathalyAngamarca" className="testimony__github block bg-[#5d8dee] 
              border rounded p-2 max-w-xs mx-auto mt-10 mb-5 text-center font-bold" target="_blank" rel="noopener noreferrer">
                Visita mi repositorio
              </a>
            </div>
          </section>
          <figure className="testimony__picture">
            <img src={testimonio1} className="testimonio rounded-full" alt="Nathaly's face" style={{ maxWidth: '60%' }} />
          </figure>
        </div>

        {/* Testimonio 2 */}
        <div className="flex items-center justify-between border p-4 mb-8 bg-[#cff4e0] rounded-md">
          <figure className="testimony__picture backdrop ml-36">
            <img src={testimonio2} className="testimonio rounded-full " alt="Descripción de la imagen" style={{ maxWidth: '62%' }} />
          </figure>
          <section className="testimony__body testimony__body--show" data-id="2">
            <div className="testimony__texts mr-36">
              <h2 className="subtitle text-2xl font-bold ml text-center">
                <hr className="border-t-2 border-black my-3" />
                Letty Cañar, <span className="testimony__course">Estudiante de UNL.</span>
                <hr className="border-t-2 border-black my-3" />
              </h2>
              <p className="testimony__review">Estudiante de la carrera de Ingeniería en Sistemas/Computación de la Universidad Nacional de Loja</p>
              <a href="https://github.com/LettyYas" className="testimony__github block bg-[#478b6d]
              border rounded p-2 max-w-xs mx-auto mt-10 mb-5 text-center font-bold" target="_blank" rel="noopener noreferrer">
                Visita mi repositorio
              </a>
            </div>
          </section>
        </div>

        {/* Testimonio 3 */}
        <div className="flex items-center justify-between border p-4 mb-8 bg-[#a2e3f9] rounded-md">
          <section className="testimony__body testimony__body--show" data-id="3">
            <div className="testimony__texts ml-36 mr-32">
              <h2 className="subtitle  text-2xl font-bold ml text-center">
                <hr className="border-t-2 border-black my-3" />
                Jose  Encalada, <span className="testimony__course">Estudiante de UNL.</span></h2>
              <hr className="border-t-2 border-black my-3" />
              <p className="testimony__review">Estudiante de la carrera de Ingeniería en Sistemas/Computación de la Universidad Nacional de Loja</p>
              <a href="https://github.com/FerminEncalada" className="testimony__github block bg-[#5d8dee]
              border rounded p-2 max-w-xs mx-auto mt-10 mb-5 text-center font-bold" target="_blank" rel="noopener noreferrer">
                Visita mi repositorio
              </a>
            </div>
          </section>
          <figure className="testimony__picture">
            <img src={testimonio3} className="testimonio rounded-full" alt="Nathaly's face" style={{ maxWidth: '60%' }} />
          </figure>
        </div>


        {/* Testimonio 4 */}
        <div className="flex items-center justify-between border p-4 mb-8 bg-[#cff4e0] rounded-md">
          <figure className="testimony__picture backdrop ml-36">
            <img src={testimonio4} className="testimonio rounded-full " alt="Descripción de la imagen" style={{ maxWidth: '62%' }} />
          </figure>
          <section className="testimony__body testimony__body--show" data-id="4">
            <div className="testimony__texts mr-36">
              <h2 className="subtitle text-2xl font-bold ml text-center">
                <hr className="border-t-2 border-black my-3" />
                Mauricio Guachizaca, <span className="testimony__course">Estudiante de UNL.</span>
                <hr className="border-t-2 border-black my-3" />
              </h2>
              <p className="testimony__review">Estudiante de la carrera de Ingeniería en Sistemas/Computación de la Universidad Nacional de Loja</p>
              <a href="https://github.com/mauricioguachizaca" className="testimony__github block bg-[#478b6d]
              border rounded p-2 max-w-xs mx-auto mt-10 mb-5 text-center font-bold" target="_blank" rel="noopener noreferrer">
                Visita mi repositorio
              </a>
            </div>
          </section>
        </div>


        {/* Testimonio 5 */}
        <div className="flex items-center justify-between border p-4 mb-8 bg-[#a2e3f9] rounded-md">
          <section className="testimony__body testimony__body--show" data-id="5">
            <div className="testimony__texts ml-36 mr-32">
              <h2 className="subtitle  text-2xl font-bold ml text-center">
                <hr className="border-t-2 border-black my-3" />
                Boris Rengel , <span className="testimony__course">Estudiante de UNL.</span></h2>
              <hr className="border-t-2 border-black my-3" />
              <p className="testimony__review">Estudiante de la carrera de Ingeniería en Sistemas/Computación de la Universidad Nacional de Loja</p>
              <a href="https://github.com/Borisir" className="testimony__github block bg-[#5d8dee]
              border rounded p-2 max-w-xs mx-auto mt-10 mb-5 text-center font-bold" target="_blank" rel="noopener noreferrer">
                Visita mi repositorio
              </a>
            </div>
          </section>
          <figure className="testimony__picture">
            <img src={testimonio5} className="testimonio rounded-full" alt="Nathaly's face" style={{ maxWidth: '60%' }} />
          </figure>
        </div>

      </div>
    </section>
  );
};

export const Inicio = () => {
  return (
    <div>
      <nav className='bg-[#154918] p-5 flex items-center justify-between fixed top-0 w-full z-50 shadow-xl'>
        <div>
          <Link to="/" className='text-white font-extrabold text-2xl'>CLIK WED</Link>
        </div>
        <div className='flex items-center space-x-4 ml-auto'>
          <Link to="/" className="text-white transition duration-300 hover:font-bold hover:shadow-md fon">Inicio</Link>
          <span className="text-white">|</span> {/* Línea divisoria */}
          <a href="#nosotros" className='text-white transition duration-75 hover:font-bold hover:shadow-md'>Conoce sobre nosotros</a>
          <span className="text-white">|</span> {/* Línea divisoria */}
          <Link to="https://github.com/mauricioguachizaca/Proyecto-integral-de-saberes.github.io" className="text-white">
            <GitHubIcon style={{ color: 'black'[500] }} fontSize="large" />
          </Link>
        </div>
      </nav>


      <section className="w-1000 h-100 mt-20 flex items-center justify-center flex-col h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${fondoImagen})` }}>
        <h1 className='font-bold text-6xl text-white mb-10'>BIENVENIDO/A A NUESTRA PAGINA WEB.</h1>
        <p className=' text-2xl text-white mb-4'>Quieres conocer cuanto consume de energía tus dispositivos eléctricos.</p>
        <a href="#" className="bg-[#47d9e1] text-white  py-2 px-4 rounded-full text-lg hover:bg-blue-600 transition duration-300">Descubrelo aquí</a>
      </section>

      <div className='mt-60 flex items-center justify-evenly mb-2'>
        {/* boton y icono de iniciar sesion no cambiar solo agregar estilos*/}
        <Link to="/iniciar sesion" className="text-center flex flex-col items-center">
          <div className="border border-gray-300 p-4 rounded">
            <PersonIcon fontSize="large" style={{ fontSize: '4rem' }} />
          </div>
          <div className="text-center mt-2">
            <button className="bg-[#4c4b4c] text-white font-bold py-2 px-4 rounded">
              Iniciar Sesión
            </button>
          </div>
        </Link>

        {/* boton y icono de registro no cambiar solo agregar estilos*/}
        <Link to="/registro" className="text-center flex flex-col items-center">
          <div className="border border-gray-300 p-4 rounded">
            <PersonAddIcon fontSize="large" style={{ fontSize: '4rem' }} />
          </div>
          <div className="text-center mt-2">
            <button className="bg-[#4c4b4c] text-white font-bold py-2 px-4 rounded">
              Registrarse
            </button>
          </div>
        </Link>

        {/* boton y icono de informacion no cambiar solo agregar estilos*/}
        <Link to="/informacion" className="text-center flex flex-col items-center">
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

      <footer className="bg-cyan-900 mt-28 p-5  text-blue-gray-100 text-center">Derechos reservados © Click Wed</footer>

    </div>
  );
}
