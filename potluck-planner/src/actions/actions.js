import {axiosWithAuth} from '../utils/axiosWithAuth';

export const FETCH_DATA = "FETCH_DATA";
export const POST_DATA = "POST_DATA";
export const PUT_DATA = "PUT_DATA";
export const DELETE_DATA = "DELETE_DATA";

export const GET_POTLUCK = "GET_POTLUCK";
export const POST_POTLUCK = "POST_POTLUCK";
export const PUT_POTLUCK = "PUT_POTLUCK";
export const DELETE_POTLUCK = "DELETE_POTLUCK";

export const fetchData = () => dispatch => {
   axiosWithAuth().get("/api/profile")
   .then(res => {
       console.log(res.data)
       dispatch({type: FETCH_DATA, payload: res.data})
   })
   .catch(err => {
       console.log(err)
   })
}

export const postData = () => dispatch => {
    axiosWithAuth().post("/api/profile")
    .then(res => {
        dispatch({type: POST_DATA, payload: res.data})
    })
    .catch(err => {
        console.log(err)
    })
}

export const putData = (changes, id) => dispatch => {
    axiosWithAuth().put(`/api/profile/${id}`, changes)
    .then(res => {
        dispatch({type: PUT_DATA, payload: res.data})
    })
    .catch(err => {
        console.log(err)
    })
}

export const deleteData = (changes, id) => dispatch => {
    axiosWithAuth().delete(`/api/profile/${id}`, changes)
    .then(res => {
        dispatch({type: DELETE_DATA, payload: res.data})
    })
    .catch(err => {
        console.log(err)
    })
}

export const getPotluck = () => dispatch => {
    axiosWithAuth().get("/api/potluck")
    .then(res => {
        dispatch({type: GET_POTLUCK, payload: res.data})
    })
    .catch(err => {
        console.log(err)
    })
}

export const postPotluck = () => dispatch => {
    axiosWithAuth().get("/api/potluck")
    .then(res => {
        dispatch({type: POST_POTLUCK, payload: res.data})
    })
    .catch(err => {
        console.log(err)
    })
}

export const putPotluck = (changes, id) => dispatch => {
    axiosWithAuth().get(`/api/potluck/${id}`, changes)
    .then(res => {
        dispatch({type: PUT_POTLUCK, payload: res.data})
    })
    .catch(err => {
        console.log(err)
    })
}

export const deletePotluck = (changes, id) => dispatch => {
    axiosWithAuth().get(`/api/potluck/${id}`, changes)
    .then(res => {
        dispatch({type: DELETE_POTLUCK, payload: res.data})
    })
    .catch(err => {
        console.log(err)
    })
}