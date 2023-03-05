import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { useEffect } from "react";
import {getSongsFetch,deleteSong } from "./songSlice";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1em;
  margin-left: 10em;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 1em;
  border-radius: 10px;
  background: #f6f7fa;
`;

const Table=styled.table`
    padding: 1em;
    width: 60%;
    `;

const Report = () => {
  // const dispatch = useDispatch();
  // const songs =  useSelector(
  //   store => store.songs);

    

    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(getSongsFetch());
    }, [dispatch]);
    const songs =  useSelector( state=>state.songs);
    console.log("songs1 :",songs)
     



  const handleRemoveSong = (id) => {
    dispatch(deleteSong({ id }));
  }
  const renderCard = () =>(
  
    <Wrapper>
      <Title>Total # of songs, artists, albums, genres </Title>
          <Table>
            <tbody>
              <tr>
                <td>#</td>
                <td>Title</td>
                <td>Artist</td>
                <td>Album</td>
                <td>Genere</td>
                <td>Action</td>
              </tr>
                <tr>
                  {/* <td>Total</td>
                  <td>{song.Title}</td>
                  <td>{song.Artist}</td>
                  <td>{song.Album}</td>
                  <td>{song.Genere}</td> */}
                </tr>
              </tbody>
          </Table> 
          <Title># of songs in every genre</Title>
          <Table>
            <tbody>
              <tr>
                <td>#</td>
                <td>Genre</td>
                <td># of Song</td>
              </tr>
                <tr>
                  {/* <td>1</td>
                  <td>{song.Title}</td>
                  <td>{song.Artist}</td> */}
                </tr>
              </tbody>
            </Table> 

            <Title># of songs & albums each artist has</Title>
          <Table>
            <tbody>
              <tr>
                <td>#</td>
                <td>Artist</td>
                <td># of Song</td>
                <td># albums</td>
              </tr>
                <tr>
                  {/* <td>1</td>
                  <td>{song.Title}</td>
                  <td>{song.Artist}</td>
                  <td>{song.Artist}</td> */}
                </tr>
              </tbody>
            </Table> 

            <Title># of songs in each album</Title>
          <Table>
            <tbody>
              <tr>
                <td>#</td>
                <td># Albums</td>
                <td># of Song</td>
                
              </tr>
                <tr>
                  {/* <td>1</td>
                  <td>{song.Title}</td>
                  <td>{song.Artist}</td> */}

                </tr>
              </tbody>
            </Table> 
    </Wrapper>
  )
    
  return (
    <div>
      <Link to="/add-song"><Button>Add Song</Button></Link> 
      <Link to="/"><Button>Back</Button></Link>
      <Wrapper>
        {songs?.songs.length ? renderCard() :<p>No song</p>}
      </Wrapper>
    </div>
  )
}

export default Report


 