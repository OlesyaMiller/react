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

    handleEvent = (event) => {

    }

    render(){
      return (
        <div>
          <h4><button> Add a Book </button></h4>
          <form>
            <label htmlFor="title">Book Title: </label>
            <input type="text" name="title" onChange={event => this.handleOnChange(event)} />
            <br />
            <label htmlFor="author">Book Author: </label>
            <input type="text" name="author" onChange={event => this.handleOnChange(event)} />
            <br />
            <label htmlFor="img_url">Book Image link: </label>
            <input type="text" name="img_url" onChange={event => this.handleOnChange(event)}htmlFor />
            <br />
            <input type="submit" />
          </form>
        </div>
      )
    }
  }


export default BookForm;
