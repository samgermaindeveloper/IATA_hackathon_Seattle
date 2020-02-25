// action types
export const SET_PRICE = 'SET_PRICE'
export const SET_RATING = 'SET_RATING'

// action creators
export const setPrice = update => ({
  type: SET_PRICE,
  payload: update,
})

export const setRating = update => ({
  type: SET_RATING,
  payload: update,
})