import {useAuth} from './context/AuthContext'
import { Navigate, Outlet } from 'react-router-dom';


function Rutasprotegidas(){
   const {user, isAuthenticated} =  useAuth()

   if(!isAuthenticated) return <Navigate to='/iniciar' replace />


  return (
    <Outlet />
  )
}

export default Rutasprotegidas;