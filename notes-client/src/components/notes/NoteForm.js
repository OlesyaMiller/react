import React, { Component } from 'react';

  class NoteForm extends Component {
    constructor(props) {
      super(props);

      this.state = {
        content: "",
      }
    }

    handleChange = (event) => {
      const { name, value } = event.target;
      this.setState({[name]: value});
    }

    handleOnSubmit = (event) => {
      event.preventDefault();
      this.props.onSubmit(this.state);
      this.setState({
        content: ''
      })
    }

    render(){
      return (
        <div>
          <h4>Add a Note</h4>
          <form className="NoteForm" onSubmit={(event) => this.handleOnSubmit(event)}>
            <label htmlFor="content"><b>Enter notes:</b> </label>
            <input
              type="textarea"
              name="content"
              value={this.state.content}
              onChange={(event) => this.handleChange(event)}
            />
            <br />
            <input type="submit" />

          </form>
        </div>
      )
    }
  }

export default NoteForm;
