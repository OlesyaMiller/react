import fetch from 'isomorphic-fetch';

export function fetchNotes(book) {
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/books/44/notes`)
      .then(res => res.json())
      .then(data => dispatch({ type: 'FETCH_NOTES', payload: data}))
  }
}
