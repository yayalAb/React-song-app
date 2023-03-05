import { Route, Routes } from "react-router-dom";
import AddSong from "./features/songs/AddSong";
import EditSong from "./features/songs/EditSong";
import Report from "./features/songs/report";
import SongList from "./features/songs/SongList";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 0.5em;
  background: #dfe2e7;
  min-height: 35em;
`;

function App() {
  return (
    <Wrapper>
      <Title> Addis Soft</Title>
      <Title>Full Stuck Developer Test Project</Title>
      <Routes>
        <Route path="/" element={<SongList />} />
        <Route path="/add-song" element={<AddSong />} />
        <Route path="/edit-song/:id" element={<EditSong />} />
        <Route path="/report" element={<Report />} />
      </Routes>
    </Wrapper>
  );
}

export default App;
