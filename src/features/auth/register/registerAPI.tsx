export const loginUser = async (email = "", pass ="") => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users?'+email)
    .then(response => response.json())
    return data[0];
}