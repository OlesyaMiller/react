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
          <h4><button> Add a Book </button></h4>
          <form onSubmit={(event) => this.handleOnSubmit(event)}>
            <label htmlFor="title">Book Title: </label>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={(event) => this.handleChange(event)}
            />

            <br />

            <label htmlFor="author">Book Author: </label>
            <input
              type="text"
              name="author"
              value={this.state.author}
              onChange={(event) => this.handleChange(event)}
            />

            <br />

            <label htmlFor="img_url">Book Image link: </label>
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
