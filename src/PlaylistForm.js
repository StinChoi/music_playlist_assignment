import React from "react";
import { Form, Button } from "semantic-ui-react";

class PlaylistForm extends React.Component {
  state = {
    song: "", artist: "",
    show: true,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.add(this.state);
    this.setState({ song: "", artist: "", });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, });
  };
  toggleForm = () => {
    this.setState({ show: !this.state.show })
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Song"
            placeholder="Song"
            name="song"
            value={this.state.song}
            onChange={this.handleChange}
          />
          <Form.Input
            fluid
            label="Artist"
            placeholder="Artist"
            name="artist"
            value={this.state.artist}
            onChange={this.handleChange}
          />
          <Form.Button color="blue">Add</Form.Button>
        </Form.Group>
      </Form >
    );
  }
}

export default PlaylistForm;