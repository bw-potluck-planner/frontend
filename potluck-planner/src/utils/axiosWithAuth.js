import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem("token")
    return axios.create({
        headers: {
            Authorization: token
        },
        baseURL: 'https://potluck-backend-919.herokuapp.com'
    })


}