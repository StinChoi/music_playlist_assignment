import './App.css';
import React from "react";
import Playlists from "./Playlists";
// import SemanticDemo from "./SemanticDemo";
import React, { Component } from "react";
import { Container, Header, } from "semantic-ui-react";

class App extends Component {
  state = {
    playlists: [
      { id: 1, artist: "Pink Floyd", album: "The Darkside of the Moon", },
      { id: 2, artist: "Drake", album: "If You're Reading This, It's Too Late", },
      { id: 3, artist: "Passion Pit", album: "Gossamer", },
      { id: 4, artist: "The Growlers", album: "Dogheart II", },
    ],
  };
  render() {
    return (
      <Container>
        <Header as="h1">Music Playlist</Header>
        <Playlists playlist={this.state.playlists} />
      </Container>
    );
  }
}

export default App;
