import textDB from "../db/textDB";

export const initialState = {
    playlists: textDB,
    playing:null,
    bannerOpen: false,
    search:null,
    language: null
};
const textReducer = (state=initialState,action) => {

};

export default textReducer;