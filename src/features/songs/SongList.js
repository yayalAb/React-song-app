import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { useEffect } from "react";
import {getSongsFetch,deleteSong } from "./songSlice";
import styled from "styled-components";
import TextField from "../../components/TextField"
import { useState } from "react"
import { jsx, css, Global, ClassNames } from '@emotion/react'


const Wrapper = styled.section`
  padding: 1em;
  border-radius: 10px;
  background: #f6f7fa;
`;

const Table=styled.table`
    padding: 1em;
    width: 100%;
    border: solid 1px rgb(36, 34, 34);
    box-shadow: 3px;
    border-radius: 3px;
    `

const SongList = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(getSongsFetch());
    }, [dispatch]);
    const [values, setValues] = useState({ 
      genere: ''
    });

  const songs =  useSelector( state=>state.songs);  
  const handleRemoveSong = (id) => {
    dispatch(deleteSong({ id }));
    
  }
  const renderCard = () =>(
  
    <Wrapper>
  <Table>
    <tbody>
      <tr>
        <td>Title</td>
        <td>Artist</td>
        <td>Album</td>
        <td>Genere</td>
        <td>Action</td>
      </tr>
      { songs.songs.map(song => (
          <tr>
            <td>{song.title}</td>
            <td>{song.artist}</td>
            <td>{song.album}</td>
            <td>{song.genere}</td>
            <td>
              <Link to={`edit-song/${song.id}`}><Button> Edit </Button></Link>
              <Button onClick={() => handleRemoveSong(song.id)}> Delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table> 
    </Wrapper>
  )
    
  return (
    <div>
       
      <Link to="/add-song"><Button>Add Song</Button></Link> 
      <Link to="/report"><Button>Statistic</Button></Link>
      <TextField
        label="Genere"
        value={values.genere}
        onChange={(e) => setValues({ ...values, genere: e.target.value })}
        inputProps={{ type: 'Genere', placeholder: 'Genere' }}
      /> 
      <Wrapper>
        {songs?.songs.length ? renderCard() :<p>No song</p>}
      </Wrapper>
    </div>
  )
}

export default SongList


 