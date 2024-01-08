import React from 'react';
import { Link } from 'react-router-dom';
import GitHubIcon from '@material-ui/icons/GitHub';

export const Inicio = () => {
  return (
    <div>
      <nav className='bg-cyan-700 p-5 flex items-center justify-between fixed top-0 w-full -z-50 shadow-xl'>
        <div>
          <Link to="/"  className='text-deep-purple-900 font-bold text-2xl'>CLIK WED</Link>
        </div>
        <div className='flex items-center space-x-4 ml-auto'>
          <Link to="/" className="text-white transition duration-300 hover:font-bold hover:shadow-md fon">Inicio</Link>
          <Link className='text-white transition duration-75 hover:font-bold hover:shadow-md'>Conoce sobre nosotros</Link>
          <Link to="https://github.com/mauricioguachizaca/Proyecto-integral-de-saberes.github.io" className="text-white">
            <GitHubIcon style={{ color: 'black'[500] }} fontSize="large" />
          </Link>
        </div>
      </nav>
      <div className="flex flex-col md:flex-row items-center">
      </div>
    </div>
  );
}
