import axios from "axios";
import { UserDto } from "./dto/UserDto";

const UsersService = {
    getUsers: async function () {
        const result = await axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => response.data)
        return result;
    },

    getUserById: async function (userId: number)  {
        const result = await axios.get('https://jsonplaceholder.typicode.com/users/'+userId)
        .then(response => response.data)
        return result;
    },
    
    deleteUser: async function (userId: number)  {
        const result = await axios.delete('https://jsonplaceholder.typicode.com/users/'+userId)
        .then(response => response.data)
        return result;
    },
    
    saveUser: async function (user: UserDto)  {
        const result = await axios.post('https://jsonplaceholder.typicode.com/users/', user)
        .then(response => response.data)
        return result;
    },
    
    updateUser: async function (userId: number, user: UserDto)  {
        const result = await axios.put('https://jsonplaceholder.typicode.com/users/'+userId, user)
        .then(response => response.data)
        return result;
    }
}

export default UsersService;