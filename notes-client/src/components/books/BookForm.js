import React, { Component } from 'react';

  class BookForm extends Component {
    constructor(props) {
      super(props);

      this.state = {
        title: "",
        author: "",
        img_url: "",
      }
    }

    handleChange = (event) => {
      const { name, value} = event.target;

      this.setState({[name]: value});
    }

    handleOnSubmit = (event) => {
      event.preventDefault();
      this.props.onSubmit(this.state);
      this.setState({
        title: '',
        author: '',
        img_url: ''
      })
    }

    render(){
      return (
        <div>
          <h4>Add a Book</h4>
          <form onSubmit={(event) => this.handleOnSubmit(event)}>
            <label htmlFor="title"><b>Book Title:</b> </label>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={(event) => this.handleChange(event)}
            />

            <br />

            <label htmlFor="author"><b>Book Author:</b> </label>
            <input
              type="text"
              name="author"
              value={this.state.author}
              onChange={(event) => this.handleChange(event)}
            />

            <br />

            <label htmlFor="img_url"><b>Book Image link:</b> </label>
            <input
              type="text"
              name="img_url"
              value={this.state.img_url}
              onChange={(event) => this.handleChange(event)}
              />

            <br />
            <input type="submit" />

          </form>
        </div>
      )
    }
  }

export default BookForm;
