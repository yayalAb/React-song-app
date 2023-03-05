import { configureStore } from '@reduxjs/toolkit'
import songsReducer from './features/songs/songSlice';

import songsSaga from './features/songs/songSaga';
import createSagaMiddleware from 'redux-saga'


const saga= createSagaMiddleware()

export const store = configureStore({
  reducer: {
    songs: songsReducer
},
middleware:[saga],

}) 

saga.run(songsSaga);