import { call, put, takeEvery } from 'redux-saga/effects'
import { getSongsSucess,getSongsFiluere,
  getReportSucess,getReportFiluere  ,addSongSucess,addSongFiluere,
    editSongSucess,  editSongFiluere, deleteSongSucess,  deleteSongFiluere } from "./songSlice";

    const header = new Headers();
    header.append('Access-Control-Allow-Origin', '*');   
    header.append('Content-Type', 'application/json; charset=utf-8');   

function* FetchSongs() {
   
    try {
      const songs = yield call(()=>fetch('http://localhost:8080/api/songs'));
      const formatedSongs=yield songs.json();
      yield put(getSongsSucess(formatedSongs));
    } catch (e) {
      
      yield put( getSongsFiluere("error occered"));
    }
  }

  function* FetchReport() {
    try {
      const songs = yield call(()=>fetch('http://localhost:8080/api/songs/report'));
      const formatedSongs=yield songs.json();
      yield put(getReportSucess(formatedSongs));
    } catch (e) {
      yield put( getReportFiluere("error occered"));
    }
  }

  function* AddSong(action) {
    
    try {
      const songs = yield call(()=>fetch('http://localhost:8080/api/songs',
      {
        method: 'POST',
        body:JSON.stringify(action.payload),
        headers:{
          Accept: 'application/json',
         'Content-Type': 'application/json',
          }
      }

      ));
      const formatedSongs=yield songs.json();
      yield put(addSongSucess(formatedSongs));
    } catch (e) {
      yield put( addSongFiluere("error occered"));
    }
  }


  function* EditSong(action) {
    console.log("edit song is called",action.payload.id)
    try {
      const songs = yield call(()=>fetch('http://localhost:8080/api/songs/'+action.payload.id,
      {
        method: 'PUT',
        body:JSON.stringify(action.payload),
        headers:{
          Accept: 'application/json',
         'Content-Type': 'application/json',
          }
      }
      ));
      const formatedSongs=yield songs.json();
      yield put(editSongSucess(formatedSongs));
    } catch (e) {
      yield put( editSongFiluere("error occered"));
    }
  }

  function* deleteSong(action) {
    try {
      const songs = yield call(()=>fetch('http://localhost:8080/api/songs/'+action.payload.id,
      {
        method: 'DELETE',
        body:JSON.stringify(action.payload),
        headers:{
          Accept: 'application/json',
         'Content-Type': 'application/json',
          }
      }
      ));
      const formatedSongs=yield songs.json();
      yield put(deleteSongSucess(formatedSongs));
    } catch (e) {
      yield put( deleteSongFiluere("error occered"));
    }
  }

  function* songsSaga() {
    yield takeEvery('songs/getSongsFetch', FetchSongs);
    yield takeEvery('songs/getReportFetch', FetchReport);
    yield takeEvery('songs/addSong', AddSong);
    yield takeEvery('songs/editSong', EditSong);
    yield takeEvery('songs/deleteSong', deleteSong);
  }
  export default songsSaga;
