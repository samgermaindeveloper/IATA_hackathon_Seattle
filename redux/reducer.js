import {combineReducers} from 'redux'
import {SET_PRICE} from './actions'
import {SET_RATING} from './actions'


const priceReducer = (state = [], action) => {
  if (action.type === SET_PRICE) return action.payload
  return state
}

const ratingReducer = (state = [], action) => {
  if (action.type === SET_RATING) return action.payload
  return state
}

const reducer = combineReducers({
  price: priceReducer,
  rating: ratingReducer
})

export default reducer
