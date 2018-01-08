import React, { Component } from 'react';
import { connect } from 'react-redux';

import BookForm from './BookForm';
import BookList from './BookList'

class Books extends Component {
  //why dont we need a constructor after redux??
  // constructor(props) {
  //   super(props);
  // }

  // addBook = (book) => {
  //   this.setState({
  //     books: [...this.state.books, book]
  //   })
  // }

  render() {
    return (
      <div>
        <BookForm />
        <BookList books={this.props.books} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { books: state.books.books }
}

export default connect(mapStateToProps, null)(Books);
