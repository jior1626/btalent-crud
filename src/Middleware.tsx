import {  Route, Navigate, useLocation, Outlet  } from 'react-router-dom';

interface MiddlewareInterface {
    path: string,
    Element: React.ReactNode
}
const Middleware: React.FC<MiddlewareInterface> = ({path, Element}) => {
    const location = useLocation();
    const token = localStorage.getItem("auth");

    return (<>{token != null ? <>{Element}</> : <Navigate to={"/"}  replace={true} state={location}/> }</>)
}

export default Middleware;