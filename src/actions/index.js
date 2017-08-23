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
    //Should be replace with hosting proxy server server
    let proxyUrl = 'https://cors-anywhere.herokuapp.com/',
        targetUrl = `https://rio.quintype.io/api/v1/stories`
    return fetch(proxyUrl + targetUrl)
        .then(response => response.json())
        .then(json => dispatch(requestStories(json.stories)))
        .catch( e => console.log(e))
}

export const extractData = (arrayObject) => {
    let extractedData = arrayObject.map((object) =>{
        return {
            sectionName:!!object.sections?object.sections[0].name:'',
            imgSrc:'http://quintype-01.imgix.net/' + object['hero-image-s3-key'],
            headLine: object['headline'],
            authorName: object['author-name'],
            publishedAt: new Date(object['published-at']).getDay()
        }
    })
    return extractedData
}
