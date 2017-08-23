import { combineReducers } from 'redux'
//import extractData from '../actions/extractData'
import { INITIAL_LOAD ,extractData
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
            return extractData(action.stories.splice(0,1))
        default:
            return state
    }
}
const secondRowArticles = (state = {}, action) =>{
    switch (action.type) {
        case INITIAL_LOAD:
            return extractData(action.stories.splice(0,4))
        default:
            return state
    }
}
const rootReducer = combineReducers({
    pageLoadedDetails,
    mainArticle,
    secondRowArticles
})

export default rootReducer
