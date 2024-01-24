import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// Importa el contexto de autenticación
import { useAuth } from '../context/AuthContext'; // Asegúrate de tener la ruta correcta

export const Login = () => {
  const [credentials, setCredentials] = useState({
    nombreusuario: '',
    password: '',
  });

  const navigate = useNavigate();
  
  // Obtén las funciones de autenticación desde el contexto
  const { login } = useAuth();

  const handleInputChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const trimmedUsername = credentials.nombreusuario.trim();
    const trimmedPassword = credentials.password.trim();

    try {
      const response = await axios.post('http://localhost:3000/api/verificarCredenciales', {
        nombreusuario: trimmedUsername,
        password: trimmedPassword,
      });

      console.log('Estado de la respuesta:', response.status);
      console.log('Datos de la respuesta:', response.data);

      const isValidUser = response.data.isValidUser;

      if (isValidUser) {
        // Utiliza la función de inicio de sesión desde el contexto
        login();
        navigate('/medidor/*');
      } else {
        console.log('Credenciales incorrectas');
      }
    } catch (error) {
      console.error('Error al verificar credenciales', error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form className="w-96 bg-white p-8 rounded shadow-md" onSubmit={handleLogin}>
        <h2 className="text-2xl font-bold mb-4">Iniciar Sesión</h2>

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
      </form>
    </div>
  );
};
