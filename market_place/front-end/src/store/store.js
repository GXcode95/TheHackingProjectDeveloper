import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import userReducer from './user/reducer'
import themeReducer from './theme/reducer';
import citiesReducer from './cities/reducer';

const rootReducer = combineReducers({
  userReducer,
  themeReducer,
  citiesReducer
})

let store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunkMiddleware),
    // Needed to use Redux DevTools
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store
