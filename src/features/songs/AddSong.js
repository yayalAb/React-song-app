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
    Title : '',
    Artist : '',
    Album : '',
    Genere: ''
  });

  const handleAddSong = () => {
    setValues({  Title : '', Artist : '', Album : '', Genere: ''});
    dispatch(addSong({
      id: uuidv4(),
      Title : values.Title,
      Artist : values.Artist,
      Album : values.Album,
      Genere: values.Genere
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
          value={values.name}
          onChange={(e) => setValues({ ...values, Title: e.target.value })}
          inputProps={{ type: 'text', placeholder: 'Song Title' }}
        />
      <TextField
        label="Artist"
        value={values.email}
        onChange={(e) => setValues({ ...values, Artist: e.target.value })}
        inputProps={{ type: 'text', placeholder: 'Artist' }}
      />
      <TextField
        label="Album"
        value={values.email}
        onChange={(e) => setValues({ ...values, Album: e.target.value })}
        inputProps={{ type: 'text', placeholder: 'Album' }}
      />
       <TextField
        label="Genere"
        value={values.email}
        onChange={(e) => setValues({ ...values, Genere: e.target.value })}
        inputProps={{ type: 'Genere', placeholder: 'Genere' }}
      /> 
      <Button onClick={handleAddSong}>Submit</Button>
      <Button onClick={backHandler}>Back</Button>
      </Wrapper2>
    </Wrapper>
    
  )
}

export default AddSong