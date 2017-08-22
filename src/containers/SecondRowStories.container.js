/**
 * Created by rahulkookal on 22/8/17.
 */
import React from 'react'
//import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import SecondRowStoriesComponent from '../components/SecondRowStories.component'

const SecondRowStories = ({ Sample, sectionName }) => (
    <SecondRowStoriesComponent Sample={Sample} sectionName={sectionName}/>
)

SecondRowStories.propTypes = {

}

const mapStateToProps = (state) => ({
    Sample:"http://quintype-01.imgix.net/quintype-demo/2015-11/21006f30-9d7e-4219-ba96-4b2fd945e53c/cuba14.jpg",
    sectionName:"Travel"
})

export default connect(
    mapStateToProps
)(SecondRowStories)
