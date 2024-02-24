import axios from './axios'

export const calculo = () => axios.get('/calculo')

export const mayor = () => axios.get('/mayorconsumo')