import React, {useState} from "react";
import FormUser from "../../../features/admin/users/FormUser";
import ListUsers from "../../../features/admin/users/ListUsers";

import Layout from "../../../shared/template/Layout";

import { Button } from "react-bootstrap"

import "./Users.css"
import { UserDto } from "../../../services/dto/UserDto";
import { usersSelector } from "./UsersSlice";
import { useAppSelector } from "../../../app/hooks";
import Loading from "../../../shared/molecules/Spinner/Spinner";
import AlertBoostrap from "../../../shared/molecules/Alert/Alert";

const UsersView = () => {

    const [showCreate, setShowCreate] = useState(false);

    const [typeForm, setTypeForm] = useState("");

    const [userSelected, setUserSelected] = useState<UserDto>({})

    const { users, isLoading, error } = useAppSelector(usersSelector);

    const [showAlert, setShowAlert] = useState(false);

    const [messageAlert, setMessageAlert] = useState("");

    const [typeAlert, setTypeAlert] = useState("");

    const showCreateUser = () => {
        setShowCreate(true);
        setTypeForm("save")
    }

    const showEditUser = (user: UserDto) => {
        setShowCreate(true);
        setUserSelected(user);
        setTypeForm("update")
    }

    const showAlertByMessage = (type: string, message: string) => {
        setShowAlert(true)
        setMessageAlert(message)
        setTypeAlert(type)
        setShowCreate(false);
    }

    return (
        <>
            { isLoading ? <Loading /> : <></> }
            <Layout>
                <div className="contain-alert">
                    { showAlert ? <AlertBoostrap setShowAlert={setShowAlert} type={typeAlert} message={messageAlert} />: <></> }
                </div>
                {
                    showCreate ?
                        <>
                            <div className="title-heading">
                                <h3>Formulario de usuario</h3>
                                <Button variant="secondary" onClick={() => setShowCreate(false)}>
                                    <span className="bi bi-arrow-bar-left"></span>
                                </Button>
                            </div>
                            <FormUser user={userSelected} type={typeForm} showAlertByMessage={showAlertByMessage}/>
                        </>
                    :  
                    <>
                        <div className="title-heading">
                            <h3 >Listado de usuarios</h3>
                            <Button onClick={() => showCreateUser()} variant="success">
                                <span className="bi bi-person-plus-fill"></span>
                            </Button>
                        </div>
                        <ListUsers showEditUser={showEditUser} showAlertByMessage={showAlertByMessage}/>
                    </>
                }
            </Layout>
        </>
       
    )
}

export default UsersView;