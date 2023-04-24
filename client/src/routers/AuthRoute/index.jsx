import { Navigate, Outlet } from "react-router-dom";
import Cookies from 'universal-cookie';

const AuthRoute = () => {
  const cookies = new Cookies();
  const authenticationToken = cookies.get("token");

  const getRedirectionRouteByCondition = () => {
    if (!authenticationToken) {
      return <Navigate replace to="/SignUp" />
    } else {
      return <Outlet />
    }
  }

  return getRedirectionRouteByCondition();
}

export default AuthRoute;