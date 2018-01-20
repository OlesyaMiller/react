import React, { Component } from 'react';
import { connect } from 'react-redux';
import {deleteBook} from '../../Actions/BookAction';
import {fetchNotes} from '../../Actions/notesAction';

import BookForm from './BookForm';
import BookList from './BookList'


//books={this.props.books} -> this.props.children??
class Books extends Component {
  constructor(props) {
    super(props)
    // Define the initial state:

    this.state = {
      count: 0
    };
}

  handleOnLike = (book) => {
    this.setState({count: this.state.count + 1});
  }


  render() {
    return (
      <div>
        <BookForm />
        <BookList books={this.props.books}
        count={this.state.count}
        handleOnClick={(book) => this.props.deleteBook(book)}
        handleNoteClick={(book) => this.props.fetchNotes(book)}
        handleOnLike={(book) => this.handleOnLike(book)} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { books: state.books }
}

export default connect(mapStateToProps, {fetchNotes, deleteBook})(Books);
//connect to store
