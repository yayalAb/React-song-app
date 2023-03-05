import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { deleteSong } from "./songSlice";
import styled from "styled-components";


const Wrapper = styled.section`
  padding: 2em;
  border-radius: 10px;
  background: #f6f7fa;
`;

const Table=styled.table`
    padding: 2em;
    width: 100%;

    `


const SongList = () => {
  const dispatch = useDispatch();
  const songs = useSelector(store => store.songs);

  const handleRemoveSong = (id) => {
    dispatch(deleteSong({ id }));
  }
  const renderCard = () =>(
  
    <Wrapper>
  <table>
    <thead>
      <th>Title</th>
      <th>Artist</th>
      <th>Album</th>
      <th>Genre</th>
      <th>Action</th>
    </thead>
    <tbody>
      { songs.map(song => (
          <tr>
            <td>{song.Title}</td>
            <td>{song.Artist}</td>
            <td>{song.Album}</td>
            <td>{song.Genre}</td>
            <td>
              <Link to={`edit-song/${song.id}`}><Button> Edit </Button></Link>
              <Button onClick={() => handleRemoveSong(song.id)} > Delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table> 
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


 