import './App.css';
import Playlists from "./Playlists";
// import PlaylistForm from "./PlaylistForm";
// import SemanticDemo from "./SemanticDemo";
import React, { Component } from "react";
import { Container, Header, } from "semantic-ui-react";

class App extends Component {
  state = {
    playlists: [
      { id: 1, song: "Go With U", artist: "BAYNK", },
      { id: 2, song: "Best Day Ever", artist: "Mac Miller", },
      { id: 3, song: "Sleepyhead", artist: "Passion Pit", },
      { id: 4, song: "Tell It How It Is", artist: "The Growlers", },
    ],
  };
  render() {
    return (
      <Container>
        <Header as="h1">Some Bangers</Header>
        <Playlists playlists={this.state.playlists} />
      </Container>
    );
  }
}

export default App;
