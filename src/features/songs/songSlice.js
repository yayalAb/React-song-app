import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const songSlice = createSlice({
  name: 'songs',
  initialState:{
    songs : [],
    isloading:false
  },
  reducers: {
    getSongsFetch:(state)=>{
      state.isloading=true;
    },
    getSongsSucess:(state, action) => {
      console.log()
      state.songs=action.payload;
      state.isloading=false;
    },
    getSongsFiluere:(state)=>{
      state.isloading=false;
    },
    getReportFetch:(state)=>{
      state.isloading=true;
    },
    getReportSucess:(state, action) => {
      console.log()
      state.songs=action.payload;
      state.isloading=false;
    },
    getReportFiluere:(state)=>{
      state.isloading=false;
    },
    addSong:(state)=>{
      state.isloading=true;
    },
    addSongSucess:(state, action) => {
      state.songs.push(action.payload);
      state.isloading=false;
    },
    addSongFiluere:(state)=>{
      state.isloading=false;
    },
    editSong: (state, action) => {
      state.isloading=true;
      
    },
     editSongSucess:(state, action) => {
      state.songs=action.payload;
      state.isloading=false;
    },
     editSongFiluere:(state)=>{
      state.isloading=false;
    },

    deleteSong: (state, action) => {
       state.isloading=false;
    },
     deleteSongSucess:(state, action) => {
      state.songs=action.payload;
      state.isloading=false;
  },
     deleteSongFiluere:(state)=>{
      state.isloading=false;
    },

    CountsSong: (state, action) => {
      const { id } = action.payload;
      const existingSong = state.find(song => song.id === id);
      if(existingSong) {
        return state.filter(song => song.id !== id);
      }
    }
  }
});

export const {getSongsFetch, getSongsSucess, getSongsFiluere, addSong ,addSongSucess,addSongFiluere, 
  editSong,  editSongSucess,  editSongFiluere,
   deleteSong,deleteSongSucess,  deleteSongFiluere,CountsSong ,
  getReportSucess,getReportFiluere,getReportFetch} = songSlice.actions;
export default songSlice.reducer;