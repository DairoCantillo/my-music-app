import{ ADD_FAVORITES, ADD_FAVORITES_SUCCESS, ADD_FAVORITES_ERROR}from "../types/favoritesType";


export const getFavorites = (payload) =>({
    type:ADD_FAVORITES,
    payload:payload
});
export const getFavoritesSuccess = favorites =>({
    type:ADD_FAVORITES_SUCCESS,
    payload:favorites
})
export const getFavoritesError = (error) =>({
    type:ADD_FAVORITES_ERROR,
    payload:error
})  