import {axiosWithAuth} from '../utils/axiosWithAuth';

export const FETCH_DATA = "FETCH_DATA";
export const POST_DATA = "POST_DATA";
export const PUT_DATA = "PUT_DATA";
export const DELETE_DATA = "DELETE_DATA";

export const GET_POTLUCK = "GET_POTLUCK";
export const GET_POTLUCK_BY_ID = "GET_POTLUCK_BY_ID";
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
        console.log('Action get potluck--> ',res);
        dispatch({type: GET_POTLUCK, payload: res.data})
    })
    .catch(err => {
        console.log(err)
    })
}

export const getPotluckByID = (id) => dispatch => {
    axiosWithAuth().get(`/api/potluck/${id}`)
        .then(res => {
            console.log('Action getByID --> ', res);
            return res.data
        })
        .catch(err => {
        console.log(err);
    })    
}

export const postPotluck = (data) => dispatch => {
    console.log('Action --> ', data);
    axiosWithAuth().post("/api/potluck", data)
    .then(res => {
       // dispatch({type: POST_POTLUCK, payload: res.data})
       window.location.reload()
    })
    .catch(err => {
        console.log(err)
    })
}

export const putPotluck = ( id, changes) => dispatch => {
    axiosWithAuth().put(`/api/potluck/${id}`, changes)
    .then(res => {
        dispatch({type: PUT_POTLUCK, payload: res.data})
    })
    .catch(err => {
        console.log(err)
    })
}

export const deletePotluck = ( id) => dispatch => {
    axiosWithAuth().delete(`/api/potluck/${id}`)
    .then(res => {
        // dispatch({type: DELETE_POTLUCK, payload: res.data})
       window.location.reload()

    })
    .catch(err => {
        console.log(err)
    })
}