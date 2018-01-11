//forms have no state since they are creating a new instance??
//
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../Actions/BookAction';

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
      const { name, value } = event.target;
      this.setState({[name]: value});
    }

    handleOnSubmit = (event) => {
      event.preventDefault();
      this.props.actions.createBook(this.state);
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
