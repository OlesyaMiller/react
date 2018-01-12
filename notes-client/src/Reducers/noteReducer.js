export default function NoteReducer( state = {
  notes: []
}, action) {
    switch(action.type){
      case "FETCH_NOTES": //actions
         return {...state, notes: action.payload} //takes new book state and merges it with the state
      // case "CREATE_BOOK":
      //   return {...state, books: [...state.books, action.payload]}
      // case "REMOVE_BOOK":
      //   return { books: state.books.filter(book => book.id !== action.book.id)}
      default: //this just returns default state with no changes made
        return state;
    }
  }
