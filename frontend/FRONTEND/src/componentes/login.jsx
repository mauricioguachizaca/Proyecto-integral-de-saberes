import React, { useState } from 'react';
import axios from 'axios';
import { redirect } from 'react-router-dom';

export const Login = () => {
  const [credentials, setCredentials] = useState({
    nombreusuario: '',
    password: '',
  });

  const [authenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Realizar la solicitud POST para enviar las credenciales al servidor
      const response = await axios.post('http://localhost:3000/api/verificarCredenciales', credentials);

      // Verificar si las credenciales son válidas (puedes ajustar esto según la respuesta del servidor)
      if (response.data.authenticated) {
        // Si las credenciales son válidas, establecer el estado de autenticación a verdadero
        setAuthenticated(true);
      } else {
        // Manejar caso de credenciales incorrectas (puedes mostrar un mensaje de error)
        setError('Credenciales incorrectas');
      }
    } catch (error) {
      // Manejar errores de la solicitud (puedes mostrar un mensaje de error)
      console.error('Error al iniciar sesión:', error);
      setError('Error al iniciar sesión');
    }
  };

  // Si el usuario está autenticado, redirigir a la ruta deseada
  if (authenticated) {
    return <redirect to="/medidor" />;
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <form className="w-96 bg-white p-8 rounded shadow-md" onSubmit={handleLogin}>
        <h2 className="text-2xl font-bold mb-4">Iniciar Sesión</h2>

        {/* Campo de Nombre de Usuario */}
        <div className="mb-4">
          <label htmlFor="nombreusuario" className="block text-gray-700 text-sm font-bold mb-2">Nombre de usuario:</label>
          <input
            type="text"
            id="nombreusuario"
            name="nombreusuario"
            value={credentials.nombreusuario}
            onChange={handleInputChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        {/* Campo de Contraseña */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={credentials.password}
            onChange={handleInputChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Iniciar Sesión</button>
        </div>

        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
};
