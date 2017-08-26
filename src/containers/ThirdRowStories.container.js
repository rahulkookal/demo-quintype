/**
 * Created by rahulkookal on 23/8/17.
 */
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ThirdRowStoriesComponent from '../components/ThirdRowStories.component'

const ThirdRowStories = ({mainStory}) => (
    <ThirdRowStoriesComponent mainStory={mainStory}/>
)
ThirdRowStories.propTypes = {
    mainStory:PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
    mainStory: state.thirdRowArticles[0]
})

export default connect(
    mapStateToProps
)(ThirdRowStories)

