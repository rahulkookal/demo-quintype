/**
 * Created by rahulkookal on 24/8/17.
 */
import React from 'react'
//import PropTypes from 'prop-types'
import './ForthRoStories.css';

const FourthRowStoriesComponent  = ({mainStory, secondColStories}) => {
    return (
        <div className="row no-margin fourth-row-stories">

            <div className="first col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <div className="row story no-margin">
                    <div className="image col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 no-padding">
                        <img alt="" src={!!mainStory?mainStory.imgSrc:''} className="side-image"></img>
                    </div>
                    <div className="content col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 no-padding">
                        <div className="header">
                            {!!mainStory?mainStory.headLine:''}
                        </div>
                        <div className="author">
                            {!!mainStory?mainStory.authorName:''}
                        </div>
                    </div>
                </div>
            </div>

            <div className="second col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 no-padding">
                <div>
                    <img alt="" src={!!mainStory?mainStory.imgSrc:''} className="main-article-img"></img>
                </div>
                <div className="main-story">
                    <div className="section">
                        <span className="line-copy">{!!mainStory?mainStory.sectionName:''}</span>
                    </div>
                    <div className="title">
                        {!!mainStory?mainStory.headLine:''}
                    </div>
                    <div className="description">
                        {!!mainStory?mainStory.headLine:''}
                    </div>
                    <div className="author">
                        {!!mainStory?mainStory.authorName:''}
                    </div>
                </div>
            </div>
        </div>
    )
}

FourthRowStoriesComponent.propTypes = {
}

export default FourthRowStoriesComponent

