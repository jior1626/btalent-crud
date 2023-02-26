import axios from "axios";


export const loginUser = async (email = "", pass ="") => {
    const result = await axios.get('https://jsonplaceholder.typicode.com/users?'+email).then((data: any) => data[0])
    return result;
}

export const registerUser = async (user: any) => {
    const result = await axios.post('https://jsonplaceholder.typicode.com/users', user)
    .then(response => response)
    return result;
}