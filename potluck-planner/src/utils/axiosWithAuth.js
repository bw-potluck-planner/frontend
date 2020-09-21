import axios from 'axios';

export const axiosWithAuth = () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNhcmEiLCJzdWJqZWN0IjozLCJpYXQiOjE2MDA3MDgzOTksImV4cCI6MTYwMDczNzE5OX0.trp7aWGzwfSmkP9FDPUmFWn5oySvQSH0TfsnCy_xbv8'
    return axios.create({
        headers: {
            Authorization: token
        },
        baseURL: 'https://potluck-backend-919.herokuapp.com/'
    })


}