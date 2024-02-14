import axios from 'axios'

const API = "http://localhost:3000/api";

export const registrorespuesta = user => axios.post(`${API}/usuarios`, user);