import axios from "axios";

class AuthService {

    async loginUser (email: string, pass: string) {
        return await axios.get('https://jsonplaceholder.typicode.com/users?email='+email).then(data => data.data);
    }
    
    async registerUser (user: any) {
        return await axios.post('https://jsonplaceholder.typicode.com/users', user).then(data => data.data);
    }
}

export default new AuthService();