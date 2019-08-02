import { combineReducers } from 'redux'
import todos from './todos'
import clean from './clean'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
    todos,
    clean,
    visibilityFilter
})

