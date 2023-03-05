import { call, put, takeEvery } from 'redux-saga/effects'
import { getSongsSucess,getSongsFiluere } from "./songSlice";


function* FetchSongs() {
    try {
        // console.log(yield call('http://localhost:8080/api/songs'));
      const songs= yield call('http://localhost:8080/api/songs');
      const formatedSongs=songs.json();
      console.log("songs :",formatedSongs);
      yield put(getSongsSucess(formatedSongs));
    } catch (e) {
      yield put( getSongsFiluere("error occered"));
    }
  }

  function* songsSaga() {
    console.log("Example saga reached");
    yield takeEvery('songs/getSongsFetch', FetchSongs)
  }

  export default songsSaga;