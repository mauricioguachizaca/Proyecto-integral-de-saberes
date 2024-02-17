import axios from './axios'



export const registrorespuesta = (user) => axios.post(`/usuarios`, user);

export const iniciorespuestas = (user) => axios.post(`/verificarcredenciales`, user )

export const verificarToken = () => axios.get(`/verificartoken`)