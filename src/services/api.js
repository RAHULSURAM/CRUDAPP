import axios from 'axios';


const API_URL = 'http://localhost:8080'

export const addUser = async (user) => {
    try{
        return await axios.post(`${API_URL}/user`, user);
    }catch(error){
        console.log("error while calling adduser api", error.message);
    }
}

export const getUsers = async () => {
    try{
        return await axios.get(`${API_URL}/users`);
    }catch(error){
        console.log("error while handling the getUsers Api", error.message);
    }
}

export const getUser = async (id) => {
    try{
        return await axios.get(`${API_URL}/users/${id}`);
    }catch(error){
        console.log("error while handling the getUser Api", error.message);
    }
}

export const editUser = async (user, id)=>{
    try{
        return await axios.put(`${API_URL}/user`,user);
    }catch(error){
        console.log("error while editing the user data",error.message);
    }
}

export const deleteUser = async (id)=>{
    try{
        return await axios.delete(`${API_URL}/user/${id}`);
    }catch(error){
        console.log("error while handling deleteUser Api",error.message);
    }
}


