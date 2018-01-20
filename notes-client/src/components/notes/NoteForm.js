import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../Actions/notesAction';

  class NoteForm extends Component {
    constructor(props) {
      super(props);

      this.state = {
        content: "",
        likes: 0
      }
    }

    //event = change
    handleChange = (event) => {
      const { name, value } = event.target;
      this.setState({[name]: value});
    }

    //event = submit
    handleOnSubmit = (event) => {
      event.preventDefault();
      this.props.actions.createNote(this.book);
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

  const mapDispatchToProps = (dispatch) => {
     return { actions: bindActionCreators(actions, dispatch)};
  }

  const mapStateToProps = (state) => {
    return { books: state.books.books }
  }

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm)
