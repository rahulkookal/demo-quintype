import {api } from '../actions/api'

export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const SELECT_REDDIT = 'SELECT_REDDIT'
export const INVALIDATE_REDDIT = 'INVALIDATE_REDDIT'
export const INITIAL_LOAD = 'INITIAL_LOAD'

export const requestStories = stories => ({
    type: INITIAL_LOAD,
    stories
})


export const loadStories = () => dispatch => {
    console.log(api);

    dispatch(requestStories(api.stories))
    // return fetch(`https://rio.quintype.io/api/v1/stories`,
    //     { mode:'no-cors'})
    //     .then(response => response.json())
    //     .then(json => dispatch(receivePosts(json)))
    //     .catch((e)=> console.log(e))
    // fetch({ url:'https://rio.quintype.io/api/v1/stories',
    //         mode:'cors',
    //         dataType: "text"})
    //     .then(function(response) {
    //         console.log(response)
    //         return response.json()
    //     }).catch((e)=>console.log(e))
}


