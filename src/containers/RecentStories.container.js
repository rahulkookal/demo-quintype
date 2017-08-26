/**
 * Created by rahulkookal on 25/8/17.
 */
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import RecentStoriesComponent from '../components/RecentStories.component'

const RecentStories = ({stories }) => (
    <RecentStoriesComponent stories={stories} />
)
RecentStories.propTypes = {
    stories: PropTypes.array.isRequired
}
const mapStateToProps = (state) => ({
    stories: state.recentStories
})

export default connect(
    mapStateToProps
)(RecentStories)
