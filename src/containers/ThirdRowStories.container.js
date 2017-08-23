/**
 * Created by rahulkookal on 23/8/17.
 */
import React from 'react'
//import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ThirdRowStoriesComponent from '../components/ThirdRowStories.component'

const ThirdRowStories = ({mainStory, secondColStories }) => (
    <ThirdRowStoriesComponent mainStory={mainStory} secondColStories={secondColStories}/>
)
ThirdRowStories.propTypes = {
}
//TODO- handle array
const mapStateToProps = (state) => ({
    mainStory: state.thirdRowArticles[0],
    secondColStories: state.thirdRowArticles[1]
})

export default connect(
    mapStateToProps
)(ThirdRowStories)

