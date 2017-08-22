/**
 * Created by rahulkookal on 22/8/17.
 */
import React from 'react'
//import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import SecondRowStoriesComponent from '../components/SecondRowStories.component'

const SecondRowStories = ({ Sample }) => (
    <SecondRowStoriesComponent Sample={Sample}/>
)

SecondRowStories.propTypes = {

}

const mapStateToProps = (state) => ({
    Sample:"value"
})

export default connect(
    mapStateToProps
)(SecondRowStories)
