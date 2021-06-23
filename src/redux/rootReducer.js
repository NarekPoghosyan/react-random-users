// libraries
import { combineReducers } from 'redux'

// reducers
import { getUser } from './reducers'

export const rootReducer = combineReducers({
    getUser
})