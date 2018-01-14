import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './Reducers/Root';

//creates store
//rootReducer, is a reducer combiner
//thunk middleware allows you to write function
//action creators instead of actions, it also allows
//for delay of action until promise is resolved
const store = createStore(rootReducer,
    compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

//provider wraps App component and provides it with the store.
//since app is top level component, then the child components
//connected to the store receive this provider.
//store is passed in as a prop to be available to other components
ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root'));
  registerServiceWorker();
