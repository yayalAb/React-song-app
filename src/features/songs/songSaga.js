import { call, put, takeEvery } from 'redux-saga/effects'
import { getSongsSucess,getSongsFiluere } from "./songSlice";


function* FetchSongs() {
   
    try {
      const songs = yield call('http://localhost:8080/api/songs');
      const formatedSongs=songs.json;
      yield put(getSongsSucess(formatedSongs));
    } catch (e) {
        console.log("error : ",e);
      yield put( getSongsFiluere("error occered"));
    }
  }

  function* songsSaga() {
    yield takeEvery('songs/getSongsFetch', FetchSongs)
  }

  export default songsSaga;