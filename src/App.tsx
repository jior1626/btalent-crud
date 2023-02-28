
import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider  } from 'react-router-dom';


import Auth from './views/auth/Auth';
import Home from './views/admin/home/Home';
import Users from './views/admin/users/Users';
import Middleware from './Middleware';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Auth />} />
      <Route path="/home" element={<Middleware Element={<Home />} path="/home"/>} />
      <Route path="/users" element={<Middleware Element={<Users />} path="/users"/>} />
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
