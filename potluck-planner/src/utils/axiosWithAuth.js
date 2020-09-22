import axios from 'axios';

export const axiosWithAuth = () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3R1c2VybmFtZSIsInN1YmplY3QiOjExLCJpYXQiOjE2MDA3OTIwMTEsImV4cCI6MTYwMDgyMDgxMX0.FXl9dBkZQY_8dnd6ZX8y-qROSAd0tB4Hu8Zo-KnrrG8'
    return axios.create({
        headers: {
            Authorization: token
        },
        baseURL: 'https://potluck-backend-919.herokuapp.com/'
    })


}