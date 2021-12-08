import React from "react";
import { Table, Icon } from "semantic-ui-react";
import PlaylistForm from "./PlaylistForm";
import styled, { keyframes } from "styled-components";
import { TERTIARY_COLOR } from "./Styles";

const Playlist = ({ song, artist, remove, id, editPlaylist }) => (
  <Table.Row>
    <Table.Cell>{song}</Table.Cell>
    <Table.Cell>{artist}</Table.Cell>
    <Table.Cell>
      <Button onClick={() => remove(id)}>
        Delete
      </Button>
      <Button color="grey">Edit</Button>
    </Table.Cell>
    <PlaylistForm song={song} id={id} artist={artist} editPlaylist={editPlaylist} />
    <Star>
      <Icon name="star" />
    </Star>
  </Table.Row>
);

const rotate360 = keyframes`
  from { transform: rotate(0deg); color: yellow;}
  to {transform: rotate(360deg); color: aqua;}
`

const Star = styled.div`
  display: inline-block;
  color: red;
  text-shadow: 1px 1px 1px blue;
  animation: ${rotate360} 2s linear infinite;
`

const Button = styled.div`
  width: 70px;
  border: 1px solid white;
  display:flex;
  background: ${TERTIARY_COLOR};
  color: whitesmoke;
  padding: 5px;
  cursor: pointer;
  border-radius: 8%;

  &:hover {
    background: Coral;
  }
`

export default Playlist;