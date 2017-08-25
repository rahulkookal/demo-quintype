import { combineReducers } from 'redux'
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
const thirdRowArticles = (state = {}, action) =>{
    switch (action.type) {
        case INITIAL_LOAD:
            return extractData(action.stories.splice(0,3))
        default:
            return state
    }
}

const recentStories = (state = {}, action) =>{
    switch (action.type) {
        case INITIAL_LOAD:
            return extractData(action.stories.splice(0,12))
        default:
            return state
    }
}
const rootReducer = combineReducers({
    pageLoadedDetails,
    mainArticle,
    secondRowArticles,
    thirdRowArticles,
    recentStories
})

export default rootReducer
