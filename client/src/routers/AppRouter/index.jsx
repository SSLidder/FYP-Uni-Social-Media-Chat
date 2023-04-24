import { Route, Routes, Navigate } from 'react-router-dom';
import { Homepage, SignUp, Dashboard, Login } from '../../components'; 
import { AuthRoute } from "../../routers"

const AppRouter = () => {
  return(
    <Routes>
      <Route path='/' index element={<Homepage />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/login' element={<Login />} />
      <Route element={<AuthRoute />}>
        <Route path='/dashboard' element={<Dashboard />} />
      </Route>
      <Route path='*' element={<Navigate to="/" replace />}/>
    </Routes>
  )
}

export default AppRouter;
