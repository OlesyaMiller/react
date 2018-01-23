import React, { Component } from 'react';
import { connect } from 'react-redux';

import BookForm from './BookForm';
import BookList from './BookList'


class Books extends Component {

  render() {
    return (
      <div>
        < BookForm />
        < BookList books={this.props.books} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { books: state.books }
}

export default connect(mapStateToProps, null)(Books);
//connect to store
