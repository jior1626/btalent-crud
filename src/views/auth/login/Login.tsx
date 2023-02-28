

import Logo from "./../../../assets/images/logo.png";
import {useState} from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/esm/Button";

import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { setAuthFailed, setAuthSuccess, setLoading, authSelector } from "../authSlice";

import AuthService from "./../../../services/AuthAPI";

import Loading from "../../../shared/molecules/Spinner/Spinner";
import AlertBoostrap from "../../../shared/molecules/Alert/Alert";

import "./Login.css"
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [showAlert, setShowAlert] = useState(false);

    const [messageAlert, setMessageAlert] = useState("");

    const [typeAlert, setTypeAlert] = useState("");

    const { user, isLoading, error, isAuth } = useAppSelector(authSelector)

    const dispatch = useAppDispatch();

    let navigate = useNavigate();

    const authLogin = async (e: any) => {
        e.preventDefault();
        dispatch(setLoading(true));

        if(email != "" && password != "") {
            const user = await AuthService.loginUser(email, password);
            if(user.length > 0) {
                dispatch(setAuthSuccess(user[0]));
                navigate(`/home`)
            } else {
                dispatch(setAuthFailed("Usuario no registrado. Por favor registrese!!!"));
                setTypeAlert("danger");
                setMessageAlert("Usuario no registrado. Por favor registrese!!!")
                setShowAlert(true);
            }
        } else {
            setTypeAlert("danger");
            setMessageAlert("Correo o contraseña vacios!")
            setShowAlert(true);
        }
    }

    return (
        <>
            { isLoading ? <Loading /> : <></> }
            <div className="d-flex flex-column justify-content-center">
                <div className="contain-alert">
                    { showAlert ? <AlertBoostrap setShowAlert={setShowAlert} type={typeAlert} message={messageAlert} />: <></> }
                </div>
                <div className="content-auth">
                    <div className="image-logo">
                        <img src={Logo} alt="logo-login-btalent" />
                    </div>
                    <div className="form-login">
                        <Form className="ml-5" onSubmit={authLogin}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Correo <strong className="text-danger">*</strong></Form.Label>
                                <Form.Control type="email" required placeholder="Ingrese el correo" onChange={e => setEmail(e.target.value)} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password <strong className="text-danger">*</strong></Form.Label>
                                <Form.Control type="password" required placeholder="Contraseña" onChange={e => setPassword(e.target.value)}/>
                            </Form.Group>
                            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Recordarme" />
                            </Form.Group>
                            */}
                            <div className="row">
                                <div className="col-md-5">
                                    <Button variant="primary" type="submit">
                                        Ingresar
                                    </Button>
                                </div>
                                <div className="col-md-7 ml-4">
                                <a className="recovery-text">Olvidaste tu contraseña?</a>
                                </div>

                            </div>
                            
                        </Form>
                    </div>
                </div>
               
            </div>
        </>
        
    )
}

export default Login;