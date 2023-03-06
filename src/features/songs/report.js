import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { useEffect } from "react";
import {getReportFetch,deleteSong } from "./songSlice";
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
    width: 70%;
    `;

const Report = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(getReportFetch());
    }, [dispatch]);
    const songs =  useSelector( state=>state.songs);
    console.log("Report :",songs)
     
  const renderCard = () =>(
  
    <Wrapper>
      <Title>Total # of songs, artists, albums, genres </Title>
      <hr></hr>
          <Table>
            <tbody>
              <tr>
                <td>Total #</td>
                <td>Songs</td>
                <td>Artist</td>
                <td>Album</td>
                <td>Genere</td>
              </tr>
                <tr>
                  <td>1</td>
                  <td>{songs?.songs.Allsong}</td>
                  <td>{songs?.songs.DistnctByartist}</td>
                  <td>{songs?.songs.DistnctByalbum}</td>
                  <td>{songs?.songs.DistnctBygenres}</td>
                </tr>
              </tbody>
          </Table> 
          <hr></hr>
          <Title># of songs in every genre</Title>
           <hr></hr>
          <Table>
            <tbody>
              <tr>
                <td>#</td>
                <td>Genre</td>
                <td># of Song</td>
              </tr>
              { songs?.songs.CountByGEnere.map(song => (
                <tr>
                  <td>1</td>
                  <td>{song._id}</td>
                  <td>{song.totaldocs}</td>
                </tr>
              ))
              }
              </tbody>
            </Table> 
            <hr></hr>
            <Title># of songs & albums each artist has</Title>
            <hr></hr>
            
          <Table>
            <tbody>
              <tr>
                <td>#</td>
                <td>Artist</td>
                <td># of Song</td>
                <td># albums</td>
              </tr>
              { songs?.songs.query3.map(song => (
                <tr>
                  <td>1</td>
                  <td>{song._id}</td>
                  <td>{song.Artists}</td>
                  <td>{song.album}</td>
                </tr>
              ))}
              </tbody>
            </Table> 
            <hr></hr>
            <Title># of songs in each album</Title>
            <hr></hr>
          <Table>
            <tbody>
              <tr>
                <td>#</td>
                <td># Albums</td>
                <td># of Song</td>
                
              </tr>
              { songs?.songs.SongsInEachAlbum.map(song => (
                <tr>
                  <td>1</td>
                  <td>{song._id}</td>
                  <td>{song.Album}</td>

                </tr>
              ))}
              </tbody>
            </Table> 
            <hr></hr>
    </Wrapper>
  )
    
  return (
    <div>
      <Link to="/add-song"><Button>Add Song</Button></Link> 
      <Link to="/"><Button>Back</Button></Link>
      <Wrapper>
        {songs?.songs.Allsong>0 ? renderCard() :<p>No song</p>}
      </Wrapper>
    </div>
  )
}

export default Report


 