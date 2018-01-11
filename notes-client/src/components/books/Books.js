//this is a parent container
//parent Container passes the data to the
//presentational component, handle events,
//deal with React on behalf of Presentational component.
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {deleteBook} from '../../Actions/BookAction';
import {fetchNotes} from '../../Actions/notesAction';



import BookForm from './BookForm';
import BookList from './BookList'

class Books extends Component {

  handleOnClick = (book) => {
     this.props.deleteBook(book)
  }

  handleNoteClick = (book, note) => {
  //create action creater that fetches notes index
    this.props.fetchNotes(book, note)
  }

  render() {
    return (
      <div>
        <BookForm />
        <BookList books={this.props.books}
        handleOnClick={this.handleOnClick}
        handleCardClick={this.handleNoteClick} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { books: state.books.books }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deleteBook, fetchNotes }, dispatch)
}

// The components calls Action creators to receive Actions
// and then dispatches the actions. Redux
// then send the actions to “Reducers”

export default connect(mapStateToProps, mapDispatchToProps)(Books);
//connect intercepts the action and and dispatches it to the store
