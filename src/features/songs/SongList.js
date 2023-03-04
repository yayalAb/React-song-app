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

const Wrapper2=styled.section`
        display:flex;
        min-width:20em;`


const SongList = () => {
  const dispatch = useDispatch();
  const songs = useSelector(store => store.songs);

  const handleRemoveSong = (id) => {
    dispatch(deleteSong({ id }));
  }
  const renderCard = () => songs.map(song => (
      <Wrapper2>
      <table>
        <tr>
          <td>{song.Title}</td>
          <td>{song.Artist}</td>
          <td>{song.Album}</td>
          <td>{song.Genre}</td>
        </tr>
      </table>
      <div className="flex gap-4">
        <Link to={`edit-song/${song.id}`}>
          <button>
            Edit
          </button>
        </Link>
        <button
          onClick={() => handleRemoveSong(song.id)}
        >
          Delete
        </button>
      </div>
    </Wrapper2>
  ))

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