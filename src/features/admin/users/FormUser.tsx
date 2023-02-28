import {useRef, useLayoutEffect, useState} from "react";
import { Table, Button, Form} from "react-bootstrap";
import { useAppDispatch } from "../../../app/hooks";
import { UserDto } from "../../../services/dto/UserDto";
import UsersService from "../../../services/UserAPI";
import { setLoading, saveUserSuccess, editUserSuccess } from "../../../views/admin/users/UsersSlice";

interface FormUserInterface {
    user: UserDto,
    type: string,
}

const FormUser: React.FC<FormUserInterface> = ({user, type}) => {

    const dispatch = useAppDispatch();

    let formUser = useRef<HTMLFormElement>(null)

    const [id, setId] = useState(user.id || 0);

    const [name, setName] = useState(user.name || "");

    const [username, setUsername] = useState(user.username || "");

    const [company, setCompany] = useState(user.company?.name || "");

    const [phone, setPhone] = useState(user.phone || "");

    const [email, setEmail] = useState(user.email || "");

    const [password, setPassword] = useState("");

    const saveUser = async (e: any) => {
        e.preventDefault();
        console.log("entro a guardar");
        dispatch(setLoading(true));

        let data: UserDto = {};
        data.id = id;
        data.name = name;
        data.username = username;
        data.company = {}
        data.company.name = company;
        data.phone = phone;
        data.email = email;

        if (type == "save") {
            const result = await UsersService.saveUser(data);
            dispatch(saveUserSuccess(result));
        } else {
            const result = await UsersService.updateUser(id, data);
            dispatch(editUserSuccess(result));
        }
        dispatch(setLoading(false));
    }   

    return (
        <>
            <Form id="form-user" className="p-3" onSubmit={saveUser} ref={formUser}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Nombre Completo <strong className="text-danger">*</strong></Form.Label>
                    <Form.Control type="text" placeholder="Digite el nombre completo..." onChange={(e) => setName(e.target.value)} value={name} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicUsername">
                    <Form.Label>Usuario <strong className="text-danger">*</strong></Form.Label>
                    <Form.Control type="text" placeholder="Digite el nombre de usuario..."  onChange={(e) => setUsername(e.target.value)} value={username}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Compañia <strong className="text-danger">*</strong></Form.Label>
                    <Form.Control type="text" placeholder="Digite la empresa..."  onChange={(e) => setCompany(e.target.value)} value={company}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Teléfono <strong className="text-danger">*</strong></Form.Label>
                    <Form.Control type="text" placeholder="Digite el teléfono..."  onChange={(e) => setPhone(e.target.value)} value={phone}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Correo <strong className="text-danger">*</strong></Form.Label>
                    <Form.Control type="email" placeholder="Digite el correo..."   onChange={(e) => setEmail(e.target.value)} value={email}/>
                    <Form.Text className="text-muted">
                        Nunca compartiremos tu correo electrónico con nadie más.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password <strong className="text-danger">*</strong></Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button className="text-center" variant="primary" type="submit">
                    Guardar
                </Button>
            </Form>
    
        </>
    )
}

export default FormUser;