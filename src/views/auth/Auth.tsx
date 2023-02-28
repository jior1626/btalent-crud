import React from 'react';
import { useState } from "react";
import "./Auth.css"
import Login from "./login/Login";
import Register from "./register/Register";

const Auth: React.FC = () => {

    const [isLogin, setIsLogin] = useState(true);

    return (
        <>
            {isLogin ? <Login /> : <Register />}
        </>
    )
}

export default Auth;