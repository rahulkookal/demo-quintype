/**
 * Created by rahulkookal on 22/8/17.
 */
import React from 'react'
//import PropTypes from 'prop-types'
import './SecondRowStories.css';

const SecondRowStoriesComponent  = ({Sample, sectionName}) => {
    return (
        <div className="row no-margin second-row-stories">
            <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 no-padding">
                <div>
                    <img alt="" src={Sample} className="main-article-img"></img>
                </div>
                <div className="padding-left-2">
                    <div className="story-title">
                        <span className="line-copy">{sectionName}</span>
                    </div>
                </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 no-padding padding-left-2">
                {/*<img alt="" src={imgSrc} className="main-article-img"></img>*/}
                test
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 no-padding padding-left-2">
                {/*<img alt="" src={imgSrc} className="main-article-img"></img>*/}
                test
            </div>
        </div>
    )
}

SecondRowStoriesComponent.propTypes = {
}

export default SecondRowStoriesComponent
