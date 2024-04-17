import axios from "axios";

export const getUsers = () => {
    return axios.get(`http://localhost:8080/users`)
}

export const deleteUser = (id) => {
    return axios.delete(`http://localhost:8080/users/${id}`)
}

export const addUser = (data) => {
    return axios.post(`http://localhost:8080/users`, {
        name: data,
        isCompleted: false
    })
}

export const toggleButton = (id, name) => {
    return axios.put(`http://localhost:8080/users/${id}`, {
        name: name,
        isCompleted: true,
    })
}