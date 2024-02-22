import axios from './axios'

export const misdispositivos = () => axios.get('/medidor')

export const midispositivos = (id) => axios.get(`/medidor/${id}`)

export const creadispositivos = (medidor) => axios.post('/medidor', medidor)

export const actualizardispositivos = (medidor) => 
axios.put(`/medidor/${medidor._id}`, medidor)

export const eliminardispositivos = (id) => axios.delete(`/medidor/${id}`)