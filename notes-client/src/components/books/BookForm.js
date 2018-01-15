//this is a smart component because it connects to the store
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../Actions/BookAction';

//constructor initializes the state
//this.state builds the state
  class BookForm extends Component {
    constructor() {
      super();

      this.state = {
        title: "",
        author: "",
        img_url: "",
      }
    }

    //event.target is the target of that event, the input
    //we pass in the event that comes from the onChange event
    //handler
    //this.setState here allows for input to change state
    //without it, form will not allow input
    handleChange = (event) => {

      const { name, value } = event.target;
      this.setState({[name]: value});
    }

    //this.state refers to whats inputed to change state
    //on submission of form, dispatch action to store
    handleOnSubmit = (event) => {
      event.preventDefault();
      this.props.actions.createBook(this.state);
      this.setState({
        title: '',
        author: '',
        img_url: ''
      })
    }

    //onChange={(event) => this.handleChange(event)}
      //All this code does is say that every time the user changes the input field (that is,
      //whenever he types something in) we should call our handleChange() function
      //arrow function allows to avoid creating a new lexical scope
    render(){
      return (
        <div>
          <h4>Add a Book</h4>
          <form className="BookForm" onSubmit={(event) => this.handleOnSubmit(event)}>
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

  const mapDispatchToProps = (dispatch) => {
     return { actions: bindActionCreators(actions, dispatch)};
  }

export default connect(null, mapDispatchToProps)(BookForm)
