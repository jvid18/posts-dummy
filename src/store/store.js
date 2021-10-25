import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { postReducer } from './post/reducer'
import { filterReducer } from './filter/reducer'

const reducer = combineReducers({
  posts: postReducer,
  filter: filterReducer,
})

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
)
