/**
 * Created by rahulkookal on 25/8/17.
 */
import React from 'react'
//import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import RecentStoriesComponent from '../components/RecentStories.component'

const RecentStories = ({mainStory, secondColStories }) => (
    <RecentStoriesComponent mainStory={mainStory} secondColStories={secondColStories}/>
)
RecentStories.propTypes = {
}
//TODO- handle array
const mapStateToProps = (state) => ({
    mainStory: state.thirdRowArticles[0],
    secondColStories: state.thirdRowArticles[1]
})

export default connect(
    mapStateToProps
)(RecentStories)
