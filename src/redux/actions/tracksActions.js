import{ ADD_TRACKS, ADD_TRACKS_SUCCESS, ADD_TRACKS_ERROR}from "../types/tracksType";


export const getTracks = (payload) =>({
    type:ADD_TRACKS,
    payload:payload
});
export const getTracksSuccess = tracks =>({
    type:ADD_TRACKS_SUCCESS,
    payload:tracks
})
export const getTracksError = (error) =>({
    type:ADD_TRACKS_ERROR,
    payload:error
})  