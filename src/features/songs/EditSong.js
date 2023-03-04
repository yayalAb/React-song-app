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

const Wrapper2=styled.section`
        display:flex;
        min-width:20em;
`

const EditSong = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const songs = useSelector(store => store.songs);
  const navigate = useNavigate();
  const existingSong = songs.filter(song => song.id === params.id);
  const {  Title, Artist, Album , Genre } = existingSong[0];
  const [values, setValues] = useState({
    Title ,
    Artist,
    Album ,
    Genre
  });

  const handleEditSong = () => {
    setValues({  Title : '', Artist : '', Album : '', Genre: '' });
    dispatch(editSong({
      id: params.id,
      Title : values.Title,
      Artist : values.Artist,
      Album : values.Album,
      Genre: values.Genre
    }));
    navigate('/');
  }

  return (
    <Wrapper>
      <Wrapper2>
        <TextField
          label="Artist"
          value={values.Artist}
          onChange={(e) => setValues({ ...values, Artist: e.target.value })}
          inputProps={{ type: 'text', placeholder: 'Artist' }}
        />
        <TextField
          label="Title"
          value={values.Title}
          onChange={(e) => setValues({ ...values, Title: e.target.value })}
          inputProps={{ type: 'text', placeholder: 'Song Title' }}
        />
      </Wrapper2>
      <Wrapper2>
        <TextField
          label="Album"
          value={values.Album}
          onChange={(e) => setValues({ ...values, Album: e.target.value })}
          inputProps={{ type: 'text', placeholder: 'Album' }}
        />
        <TextField
          label="Genre"
          value={values.Genre}
          onChange={(e) => setValues({ ...values, Genre: e.target.value })}
          inputProps={{ type: 'text', placeholder: 'Genre' }}
        />
      </Wrapper2>
      <Button onClick={handleEditSong}>Edit</Button>
    </Wrapper>
  )
}

export default EditSong