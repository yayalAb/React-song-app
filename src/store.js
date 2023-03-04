import { configureStore } from '@reduxjs/toolkit'
import songsReducer from './features/songs/songSlice';

export const store = configureStore({
  reducer: {
    songs: songsReducer
  },
})