import { Navigate, Outlet } from 'react-router-dom';
import {useAuth} from './context/AuthContext';

function Rutasprotegidas() {
   const { loading, isAuthenticated } =  useAuth();
   console.log(loading, isAuthenticated);


   if (loading) return <h1>cargando...</h1>;
   if( !loading && !isAuthenticated) return <Navigate to="/iniciar" replace />;

  return <Outlet />;
}

export default Rutasprotegidas;