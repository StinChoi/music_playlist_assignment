import React from "react";
import { Button, Table, } from "semantic-ui-react";

const Playlist = ({ song, artist, remove, id }) => (
  <Table.Row>
    <Table.Cell>{song}</Table.Cell>
    <Table.Cell>{artist}</Table.Cell>
    <Table.Cell>
      <Button color="blue" onClick={() => remove(id)}>
        Delete
      </Button>
    </Table.Cell>
  </Table.Row>
);

export default Playlist;