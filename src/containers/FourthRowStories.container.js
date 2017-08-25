/**
 * Created by rahulkookal on 23/8/17.
 */
import React from 'react'
//import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import FourthRowStoriesComponent from '../components/FourthRowStories.component'

const FourthRowStories = ({mainStory, secondColStories }) => (
    <FourthRowStoriesComponent mainStory={mainStory} secondColStories={secondColStories}/>
)
FourthRowStories.propTypes = {
}
//TODO- handle array
const mapStateToProps = (state) => ({
    mainStory: state.thirdRowArticles[0],
    secondColStories: state.thirdRowArticles[1]
})

export default connect(
    mapStateToProps
)(FourthRowStories)

