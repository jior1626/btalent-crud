import { useState } from "react";
import "./Auth.css"
import Login from "./login/Login";
import Register from "./register/Register";

const Auth = () => {

    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="content-auth">
            {isLogin ? <Login /> : <Register />}
        </div>
    )
}

export default Auth;