import React from "react";
import { Button, Table, } from "semantic-ui-react";
import PlaylistForm from "./PlaylistForm";

const Playlist = ({ song, artist, remove, id }) => (
  <Table.Row>
    <Table.Cell>{song}</Table.Cell>
    <Table.Cell>{artist}</Table.Cell>
    <Table.Cell>
      <Button color="red" onClick={() => remove(id)}>
        Delete
      </Button>
      <Button color="blue">Edit</Button>
    </Table.Cell>
    <PlaylistForm song={song} id={id} artist={artist} />
  </Table.Row>
);

export default Playlist;