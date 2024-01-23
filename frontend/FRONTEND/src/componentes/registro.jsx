import React, { useState } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField'; // Importa el componente TextField de Material-UI

export const Registro = () => {
  const [formulario, setFormulario] = useState({
    nombre: '',
    apellido: '',
    cedula: '',
    correo: '',
    provincia: '',
    nombreusuario: '',
    password: '',
  });

  const handleInputChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api/usuarios', formulario);
      console.log('Usuario registrado correctamente', response.data);
    } catch (error) {
      console.error('Error al registrar el usuario', error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 bg-white p-8 rounded shadow-md" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4">Registro de Usuario</h2>

        <div className="grid grid-cols-2 gap-4">
        {/* Campo de Nombre */}
        <div className="mb-4">
          <label htmlFor="nombre" className="block text-gray-700 text-sm font-bold mb-2">Nombre:</label>
          <TextField
            id="nombre"
            name="nombre"
            value={formulario.nombre}
            onChange={handleInputChange}
            variant="outlined"
            fullWidth
            required
          />
        </div>

        {/* Campo de Apellido */}
        <div className="mb-4">
          <label htmlFor="apellido" className="block text-gray-700 text-sm font-bold mb-2">Apellido:</label>
          <TextField
            id="apellido"
            name="apellido"
            value={formulario.apellido}
            onChange={handleInputChange}
            variant="outlined"
            fullWidth
            required
          />
        </div>

        </div>

        <div className="grid grid-cols-2 gap-4">

        {/* Campo de Cédula */}
        <div className="mb-4">
          <label htmlFor="cedula" className="block text-gray-700 text-sm font-bold mb-2">Cédula:</label>
          <TextField
            id="cedula"
            name="cedula"
            value={formulario.cedula}
            onChange={handleInputChange}
            variant="outlined"
            fullWidth
            required
          />
        </div>

        {/* Campo de Correo */}
        <div className="mb-4">
          <label htmlFor="correo" className="block text-gray-700 text-sm font-bold mb-2">Correo:</label>
          <TextField
            id="correo"
            name="correo"
            value={formulario.correo}
            onChange={handleInputChange}
            variant="outlined"
            fullWidth
            required
          />
        </div>
        </div>

        <div className="grid grid-cols-2 gap-4">

        {/* Campo de Provincia */}
        <div className="mb-4">
          <label htmlFor="provincia" className="block text-gray-700 text-sm font-bold mb-2">Lugar de residencia:</label>
          <TextField
            id="provincia"
            name="provincia"
            value={formulario.provincia}
            onChange={handleInputChange}
            variant="outlined"
            fullWidth
            required
          />
        </div>

        {/* Campo de Nombre de Usuario */}
        <div className="mb-4">
          <label htmlFor="nombreusuario" className="block text-gray-700 text-sm font-bold mb-2">Nombre de usuario:</label>
          <TextField
            id="nombreusuario"
            name="nombreusuario"
            value={formulario.nombreusuario}
            onChange={handleInputChange}
            variant="outlined"
            fullWidth
            required
          />
        </div>

        </div>

        {/* Campo de Contraseña */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Contraseña:</label>
          <TextField
            id="password"
            name="password"
            value={formulario.password}
            onChange={handleInputChange}
            variant="outlined"
            fullWidth
            required
          />
        </div>

        <div className="mb-4">
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Registrar</button>
        </div>
      </form>
    </div>
  );
};
