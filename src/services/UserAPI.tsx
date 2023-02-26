import axios from "axios";
import { UserDto } from "./dto/UserDto";

export const getUsers = async () => {
    const result = await axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => response)
    return result;
}

export const getUserById = async (userId: number) => {
    const result = await axios.get('https://jsonplaceholder.typicode.com/users/'+userId)
    .then(response => response)
    return result;
}

export const deleteUser = async (userId: number) => {
    const result = await axios.delete('https://jsonplaceholder.typicode.com/users/'+userId)
    .then(response => response)
    return result;
}

export const updateUser = async (userId: number, user: UserDto) => {
    const result = await axios.put('https://jsonplaceholder.typicode.com/users/'+userId, user)
    .then(response => response)
    return result;
}