import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {deleteBook} from '../../Actions/BookAction';


import BookForm from './BookForm';
import BookList from './BookList'

class Books extends Component {

  handleOnClick = (book) => {
     this.props.deleteBook(book)
  }

  render() {
    return (
      <div>
        <BookForm />
        <BookList books={this.props.books} handleOnClick={this.handleOnClick} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { books: state.books.books }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deleteBook }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps, null)(Books);
