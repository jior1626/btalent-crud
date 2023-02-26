
import './App.css';
import {  BrowserRouter as Routes, Route } from 'react-router-dom';

import { AUTH, USERS } from './routes';

import Auth from './features/auth/Auth';
import Users from './features/admin/users/Users';

function App() {
  return (
    <Routes>
      <Route path={AUTH} element={<Auth />} />
      <Route path={USERS} element={<Users />} />
    </Routes>
  )
}

export default App;
