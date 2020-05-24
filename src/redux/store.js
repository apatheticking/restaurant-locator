import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import restaurantReducer from './restaurants/restaurantReducer'

const store = createStore(
  restaurantReducer, 
  composeWithDevTools(applyMiddleware(thunk))
)

export default store