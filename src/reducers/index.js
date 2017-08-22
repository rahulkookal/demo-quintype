import { combineReducers } from 'redux'
import { INITIAL_LOAD
} from '../actions'
const pageLoadedDetails = (state = {}, action) =>{
    switch (action.type) {
        case INITIAL_LOAD:
            return {
              loadedStories:20,
              offset:20
            }
        default:
            return state
    }
}
const mainArticle = (state = {}, action) =>{
    switch (action.type) {
        case INITIAL_LOAD:
            return action.stories[0]
        default:
            return state
    }
}
const rootReducer = combineReducers({
    pageLoadedDetails,
    mainArticle
})

export default rootReducer
