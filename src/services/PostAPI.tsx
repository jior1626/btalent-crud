import axios from "axios";


export const getPosts = async (postId: number) => {
    const result = await axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => response)
    return result;
}

export const getPostsById = async (postId: number) => {
    const result = await axios.get('https://jsonplaceholder.typicode.com/posts?postId='+postId)
    .then(response => response)
    return result;
}

export const registerPost = async (post: any) => {
    const result = await axios.post('https://jsonplaceholder.typicode.com/posts', post)
    .then(response => response)
    return result;
}