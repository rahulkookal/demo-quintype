/**
 * Created by rahulkookal on 22/8/17.
 */
import React from 'react'
//import PropTypes from 'prop-types'
import './SecondRowStories.css';

const SecondRowStoriesComponent  = ({mainStory, secondColStories}) => {
    return (
        <div className="row no-margin second-row-stories">
            <div className="first col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 no-padding">
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
            <div className="second col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 no-padding">
                {/* this can be looped - Keeping it  */}
                <div className="story">
                    <div className="section">
                        <span className="line-copy">{!!mainStory?mainStory.sectionName:''}</span>
                    </div>
                    <div className="description">
                        {!!mainStory?mainStory.headLine:''}
                        <div className="author">
                            {!!mainStory?mainStory.authorName:''}
                        </div>
                    </div>
                    <div className="end-line"></div>
                </div>
                <div className="story">
                    <div className="section">
                        <span className="line-copy">{!!mainStory?mainStory.sectionName:''}</span>
                    </div>
                    <div className="description">
                        {!!mainStory?mainStory.headLine:''}
                        <div className="author">
                            {!!mainStory?mainStory.authorName:''}
                        </div>
                    </div>
                    <div className="end-line"></div>
                </div>
                <div className="story">
                    <div className="section">
                        <span className="line-copy">{!!mainStory?mainStory.sectionName:''}</span>
                    </div>
                    <div className="description">
                        {!!mainStory?mainStory.headLine:''}
                        <div className="author">
                            {!!mainStory?mainStory.authorName:''}
                        </div>
                    </div>
                    <div className="end-line"></div>
                </div>
            </div>
            <div className="third col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 no-padding">
                <div className="ad-area">
                    <img src="img/group-2.png"
                         srcset="img/group-2@2x.png 2x,
                           img/group-2@3x.png 3x"
                         className="quin-image"
                         alt=""></img>
                    <div className="sub-news-letter">
                        <img src="img/message-copy.png"
                             srcset="img/message-copy@2x.png 2x,
                             img/message-copy@3x.png 3x"
                             className="sub-icon"
                        alt=""></img>
                        <div className="sub-text">Subscribe to news letter</div>
                        <input type="email"/><br/>
                        <div className="button-div">
                            <button>subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

SecondRowStoriesComponent.propTypes = {
}

export default SecondRowStoriesComponent
