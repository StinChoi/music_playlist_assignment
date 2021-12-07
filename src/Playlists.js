import React from "react";
import { Button, Table, } from "semantic-ui-react";
import Playlist from "./Playlist"

const Playlists = ({ playlists, remove }) => (
  //render data here
  // using the first table in react.semantic
  <Table celled padded>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Song</Table.HeaderCell>
        <Table.HeaderCell>Artist</Table.HeaderCell>
        <Table.HeaderCell>Options</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      { //code is breaking here
        playlists.map(playlist => (
          <Playlist key={playlist.id} {...playlist} remove={remove} />
        ))
      }
    </Table.Body>
  </Table>
);

export default Playlists;