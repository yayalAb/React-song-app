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
      state.songs=action.payload;
      state.isloading=false;
    },
    getSongsFiluere:(state)=>{
      state.isloading=false;

    },
    addSong: (state, action) => {
      state.songs.push(action.payload);
    },
    editSong: (state, action) => {
      const { id, Title , Artist , Album , Genre } = action.payload;
      const existingSong = state.songs.find(song => song.id === id);
      if(existingSong) {
        existingSong.Title = Title;
        existingSong.Artist=Artist;
        existingSong.Album=Album;
        existingSong.Genre = Genre;
      }
    },
    deleteSong: (state, action) => {
      const { id } = action.payload;
      const existingSong = state.songs.find(song => song.id === id);
      if(existingSong) {
        return state.songs.filter(song => song.id !== id);
      }
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

export const {getSongsFetch, getSongsSucess, getSongsFiluere, addSong, editSong, deleteSong,CountsSong } = songSlice.actions;
export default songSlice.reducer;