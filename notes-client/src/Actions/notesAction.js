import fetch from 'isomorphic-fetch';

export function fetchNotes(book, note) {
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/book/${book.id}/notes/${note.id}`)
      .then(res => res.json())
      .then(data => dispatch({ type: 'FETCH_NOTES', payload: data}))
  }
}
