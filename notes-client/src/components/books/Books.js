import React, { Component } from 'react';
import { connect } from 'react-redux';
import {deleteBook} from '../../Actions/BookAction';
import {fetchNotes} from '../../Actions/notesAction';

import BookForm from './BookForm';
import BookList from './BookList'


//books={this.props.books} -> this.props.children??
class Books extends Component {

  render() {
    return (
      <div>
        <BookForm />
        <BookList books={this.props.books}
        handleOnClick={(book) => this.props.deleteBook(book)}
        handleNoteClick={(book) => this.props.fetchNotes(book)} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { books: state.books.books }
}

export default connect(mapStateToProps, {fetchNotes, deleteBook})(Books);
//connect to store
