import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid';
import Button from "../../components/Button"
import TextField from "../../components/TextField"
import { addSong } from "./songSlice";
import styled from "styled-components";


const Wrapper = styled.section`
  padding: 2em;
  border-radius: 10px;
  background: #f6f7fa;
`;
const Wrapper2 = styled.section`
    margin-left: 20%;
`;


const AddSong = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState({ 
    title : '',
    artist : '',
    album : '',
    genere: ''
  });

  const handleAddSong = () => {
    setValues({  title : '', artist : '', album : '', genere: ''});
    dispatch(addSong({
      // id: uuidv4(),
      title : values.title,
      artist : values.artist,
      album : values.album,
      genere: values.genere
    }));
    navigate('/');
  }
  
  const backHandler=()=>{
    navigate('/');
  }
  return (
    <Wrapper>
      <Wrapper2> 
      <TextField
          label="Title"
          value={values.title}
          onChange={(e) => setValues({ ...values, title: e.target.value })}
          inputProps={{ type: 'text', placeholder: 'Song Title' }}
        />
      <TextField
        label="Artist"
        value={values.artist}
        onChange={(e) => setValues({ ...values, artist: e.target.value })}
        inputProps={{ type: 'text', placeholder: 'Artist' }}
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
        inputProps={{ type: 'Genere', placeholder: 'Genere' }}
      /> 
      <Button onClick={handleAddSong}>Submit</Button>
      <Button onClick={backHandler}>Back</Button>
      </Wrapper2>
    </Wrapper>
    
  )
}

export default AddSong