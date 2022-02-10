import { ADD_USER, ADD_USER_ERROR, ADD_USER_SUCCESS } from "../types/userTypes";

export const getUser = (payload) =>({
    type:ADD_USER,
    payload:payload
});
export const getUserSuccess = user =>({
    type:ADD_USER_SUCCESS,
    payload:user
})
export const getUserError = (error) =>({
    type:ADD_USER_ERROR,
    payload:error
})  
