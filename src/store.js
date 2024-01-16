// store.js
import { createStore, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk'; // Corrected import
import rootReducer from './reducers'; // Ensure this path is correct

const initialState = {};
const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  )
);

export default store;
