import axios from './axios'

export const misdispositivos = () => axios.get('/medidor')

export const midispositivo= (id) => axios.get(`/medidor/${id}`)

export const creadispositivos = (medidor) => axios.post('/medidor', medidor)

export const actualizardispositivos = (id, medidor) => 
axios.put(`/medidor/${id}`, medidor)

export const eliminardispositivos = (id) => axios.delete(`/medidor/${id}`)