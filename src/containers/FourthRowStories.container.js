/**
 * Created by rahulkookal on 23/8/17.
 */
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import FourthRowStoriesComponent from '../components/FourthRowStories.component'

const FourthRowStories = ({mainStory}) => (
    <FourthRowStoriesComponent mainStory={mainStory}/>
)
FourthRowStories.propTypes = {
    mainStory: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
    mainStory: state.thirdRowArticles[0]
})

export default connect(
    mapStateToProps
)(FourthRowStories)

