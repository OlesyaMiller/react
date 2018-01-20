//reducers take an action and the current state that was sent via a dispatch as arguments
//and apply the action to the current state that then returns a new state
//Reducers are functions that take “state”
//from Redux and “action” JSON object and returns a
//new “state” to be stored back in Redux.

//here we are setting the initial state []
export default function BookReducer( state = [], action) {
    switch(action.type){
      case "FETCH_BOOKS": //actions
         return action.payload //takes new book state and merges it with the state
      case "CREATE_BOOK":
        return state.concat(action.payload)
      case "REMOVE_BOOK":
        return state.filter(book => book.id !== action.book.id)
      default: //this just returns default state with no changes made
        return state;
    }
  }

  // If the reducer changes the state, Redux passes
  // the new state to each component and React
  // re-renders each component
