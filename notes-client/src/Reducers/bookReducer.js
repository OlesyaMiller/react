export default function BookReducer( state = {
  books: []
}, action) {
    switch(action.type){
      case "FETCH_BOOKS":
         return {...state, books: action.payload}
      case "CREATE_BOOK":
        return {...state, books: [...state.books, action.payload]}
      case "REMOVE_BOOK":
        return { books: state.books.filter(book => book.id !== action.book.id)}
      default: //this just returns default state with no changes made
        return state;
    }
  }


// case "REMOVE_BOOK":
// let books = state.filter(book => book.id !== action.book.id)
      // return books
//
//
//
// return { hostnames: state.hostnames.filter(hostname =>
//      hostname.id !== action.hostnameId
