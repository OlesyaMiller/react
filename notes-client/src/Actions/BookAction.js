import fetch from 'isomorphic-fetch';

export function fetchBooks() {
  return (dispatch) => {
    return fetch('http://localhost:3000/api/books')
      .then(res => res.json())
      .then(data => dispatch({ type: 'FETCH_BOOKS', payload: data}))
  }
}

export function createBook(book) {
  return (dispatch) => {
    return fetch('http://localhost:3000/api/books', {
      method: 'POST',
      body: JSON.stringify(book),
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(res => res.json())
      .then(data => dispatch( { type: 'CREATE_BOOK', payload: data }))
  }
}
