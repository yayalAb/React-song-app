import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import Button from "../../components/Button"
import TextField from "../../components/TextField"
import { editSong } from "./songSlice"
import styled from "styled-components";


const Wrapper = styled.section`
  padding: 2em;
  border-radius: 10px;
  background: #f6f7fa;
`;
const Wrapper2 = styled.section`
    margin-left: 20%;
`;

const EditSong = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const songs = useSelector(store => store.songs.songs);
  console.log("state : ",songs)
  const navigate = useNavigate();
  const existingSong = songs.filter(song => song.id === params.id);
  const {  title, artist, album , genere } = existingSong[0];
  const [values, setValues] = useState({
     title, 
     artist,
     album , 
     genere
  });

  const handleEditSong = () => {
    setValues({  title : '', artist : '', album : '', genere: '' });
    dispatch(editSong({
      id: params.id,
      title : values.title,
      artist : values.artist,
      album : values.album,
      genere: values.genere
    }));
    navigate('/');
  }
  return (
    <Wrapper>
      <Wrapper2>
        <TextField
          label="Artist"
          value={values.artist}
          onChange={(e) => setValues({ ...values, artist: e.target.value })}
          inputProps={{ type: 'text', placeholder: 'Artist' }}
        />
        <TextField
          label="Title"
          value={values.title}
          onChange={(e) => setValues({ ...values, title: e.target.value })}
          inputProps={{ type: 'text', placeholder: 'Song Title' }}
        />
        <TextField
          label="Album"
          value={values.album}
          onChange={(e) => setValues({ ...values, album: e.target.value })}
          inputProps={{ type: 'text', placeholder: 'Album' }}
        />
        <TextField
          label="Genere"
          value={values.genere}
          onChange={(e) => setValues({ ...values, genere: e.target.value })}
          inputProps={{ type: 'text', placeholder: 'Genere' }}
        />
      <Button onClick={handleEditSong}>Edit</Button>
      </Wrapper2>
    </Wrapper>
  )
}

export default EditSong