import { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap"
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { UserDto } from "../../../services/dto/UserDto";
import { setLoading, setUsersInStage, usersSelector, deleteUserSuccess } from "../../../views/admin/users/UsersSlice";

import UsersService from "./../../../services/UserAPI";

interface ListUserInterface {
    showEditUser: Function
}

const ListUsers: React.FC<ListUserInterface> = ({showEditUser}) => {

    const dispatch = useAppDispatch();

    // const [usersList, setUsersList] = useState<UserDto[]>([]);

    const { users } = useAppSelector(usersSelector);

    const loadUsers = async () => {
        dispatch(setLoading(true));
        if(users.length > 0) {
            // setUsersList(users);
            console.log("in stage", users);
        } else {
            const response = await UsersService.getUsers();
            dispatch(setUsersInStage(response))
            // setUsersList(users);
            console.log("consume services", response);
        }
        dispatch(setLoading(false))
    }

    const editUser = (item: UserDto) => {
        showEditUser(item);
    }

    const deleteUser = async (id: number) => {
        if(id) {
            dispatch(setLoading(true));
            await UsersService.deleteUser(id);
            dispatch(deleteUserSuccess(id))
        }
    }

    useEffect(() => {
        loadUsers();
    }, []);

    return (
        <Table striped bordered hover responsive size="sm" >
            <thead>
                <tr>
                    <th>Nombres</th>
                    <th>Correo</th>
                    <th>Empresa</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.company?.name}</td>
                                <td className="d-flex justify-content-around">
                                    <Button variant="primary" onClick={() => editUser(item)}>
                                        <span className="bi bi-pencil-fill"></span>
                                    </Button>
                                    <Button variant="danger" onClick={() => deleteUser(Number(item.id ? item.id : 0))}>
                                        <span className="bi bi-trash-fill"></span>
                                    </Button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </Table>
    )
}

export default ListUsers;