import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { useEffect } from "react";
import {getSongsFetch,deleteSong } from "./songSlice";
import styled from "styled-components";


const Wrapper = styled.section`
  padding: 1em;
  border-radius: 10px;
  background: #f6f7fa;
`;

const Table=styled.table`
    padding: 1em;
    width: 100%;

    `


const SongList = () => {
  // const dispatch = useDispatch();
  // const songs =  useSelector(
  //   store => store.songs);

    

    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(getSongsFetch());
    }, [dispatch]);
    const songs =  useSelector( state=>state.songs.songs);
    console.log("songs :",songs)
     



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
      { songs.map(song => (
          <tr>
            <td>{song.Title}</td>
            <td>{song.Artist}</td>
            <td>{song.Album}</td>
            <td>{song.Genere}</td>
            <td>
              <Link to={`edit-song/${song.id}`}><Button> Edit </Button></Link>
              <Button onClick={() => handleRemoveSong(song.id)} > Delete</Button>
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
      <Wrapper>
        {songs.length ? renderCard() :<p>No song</p>}
      </Wrapper>
    </div>
  )
}

export default SongList


 