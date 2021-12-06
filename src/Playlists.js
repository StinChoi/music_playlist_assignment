import React from "react";
import { Button, Table, } from "semantic-ui-react";
import Playlist from "./Playlist"

const Playlists = ({playlists}) => (
  //render data here
  // using the first table in react.semantic
  <Table celled padded>
  <Table.Header>
    <Table.Row>
      <Table.HeaderCell>Artist</Table.HeaderCell>
      <Table.HeaderCell>Album</Table.HeaderCell>
      <Table.HeaderCell>Options</Table.HeaderCell>
    </Table.Row>
  </Table.Header>

  <Table.Body>
    { //code is breaking here
      playlists.map( playlist => (    
      <Table.Row key={playlist.id}>
        <Table.Cell>{playlist.id}</Table.Cell>
        <Table.Cell>{playlist.artist}</Table.Cell>
        <Table.Cell>{playlist.album}</Table.Cell>
        <Table.Cell>
          <Button color="blue">
            Delete
          </Button>
        </Table.Cell>
      </Table.Row>
      ))
    } 
    {/* code breaks */}
    </Table.Body>
    </Table>
);

export default Playlists;