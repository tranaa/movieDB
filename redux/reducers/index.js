import { combineReducers } from 'redux'
import { movies } from './movies'

//redux reducer
const Reducers = combineReducers({
    moviesState: movies,
})

export default Reducers