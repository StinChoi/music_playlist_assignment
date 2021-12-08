import './App.css';
import Playlists from "./Playlists";
import PlaylistForm from "./PlaylistForm";
// import SemanticDemo from "./SemanticDemo";
import React, { Component } from "react";
import { Button, Icon, Segment, } from "semantic-ui-react";
import HeaderText from "./components/HeaderText";
import { AppContainer, Transparent } from "./components/ExportImport";
import axios from "axios";

class App extends Component {
  state = {
    playlists: [
      { id: 1, song: "Go With U", artist: "BAYNK", },
      { id: 2, song: "Best Day Ever", artist: "Mac Miller", },
      { id: 3, song: "Sleepyhead", artist: "Passion Pit", },
      { id: 4, song: "Tell It How It Is", artist: "The Growlers", },
    ],
    showForm: true,
  };

  toggleForm = () => this.setState({ showForm: !this.state.showForm, })

  getId = () => {
    return Math.floor((1 + Math.random()) * 10000);
  };

  removePlaylist = (id) => {
    const playlists = this.state.playlists.filter(playlist => {
      if (playlist.id !== id)
        return playlist
    });
    this.setState({ playlists: [...playlists], });
  };

  editPlaylist = (editedPlaylist) => {
    const newPlaylists = this.state.playlists.map((playlist) => playlist.id === editedPlaylist.id ? editedPlaylist : playlist);
    this.setState({ playlists: newPlaylists });
  }

  addPlaylist = (playlistData) => {
    console.log(playlistData)
    let playlist = { id: this.getId(), ...playlistData, };
    this.setState({ playlists: [playlist, ...this.state.playlists], });
  };

  render() {
    const { showForm, } = this.state;
    return (
      <AppContainer style={{ paddingTop: "25px" }}>
        <HeaderText fSize="large">Music Playlist</HeaderText>
        <br />
        <Segment as={Transparent}>
          <Button icon color="blue" onClick={this.toggleForm}>
            <Icon name={this.state.showForm ? 'angle double up' : 'angle double down'} />
          </Button>
          {this.state.showForm ? <PlaylistForm add={this.addPlaylist} /> : null}
        </Segment>
        <br />
        <Playlists playlists={this.state.playlists} remove={this.removePlaylist} editPlaylist={this.editPlaylist} />
      </AppContainer>
    );
  }
}

export default App;
