import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Inicio } from './componentes/inicio'
import { Login } from './componentes/login'
import { Registro } from './componentes/registro'
import { Informacion } from './componentes/informacion'
import './App.css'
function App() {
  return (
   <Router>
    <Routes>
      <Route path='/' element={<Inicio />} />
      <Route path='/iniciar sesion' element={<Login />} />
      <Route path='/registro' element={<Registro />} />
      <Route path='/informacion' element={<Informacion />} />
    </Routes>
   </Router>
  )
}

export default App
