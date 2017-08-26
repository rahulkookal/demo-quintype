/**
 * Created by rahulkookal on 23/8/17.
 */
import React from 'react'
import PropTypes from 'prop-types'
import './ThirdRowStories.css';

const ThirdRowStoriesComponent  = ({mainStory, secondColStories}) => {
    let img =!!mainStory?mainStory.imgSrc:'',
    divStyle = {
        backgroundImage: 'url(' +img  + ')'
    }
    return (
        <div className="row no-margin third-row-stories">
            <div className="first col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 no-padding" style={divStyle} >
                <div className="description">
                    {!!mainStory?mainStory.headLine:''}
                    <div className="author">
                        {!!mainStory?mainStory.authorName:''}
                    </div>
                </div>
            </div>
            <div className="second col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 no-padding">
                <div className="story-one">
                    <img alt="" src={!!mainStory?mainStory.imgSrc:''} className="main-article-img"></img>
                    <div className="description">
                        {!!mainStory?mainStory.headLine:''}
                        <div className="author">
                            {!!mainStory?mainStory.authorName:''}
                        </div>
                    </div>
                </div>
                <div className="story-two">
                    <div className="description">
                        {!!mainStory?mainStory.headLine:''}
                        <div className="author">
                            {!!mainStory?mainStory.authorName:''}
                        </div>
                    </div>
                </div>

            </div>
            <div className="third col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 no-padding">
                {/* To Do Repeat this from React-Redux*/}
                <div className="story">
                    <div className="description">
                        {!!mainStory?mainStory.headLine:''}
                        <div className="author">
                            {!!mainStory?mainStory.authorName:''}
                        </div>
                    </div>
                    <div className="end-line"></div>
                </div>
                <div className="story">
                    <div className="description">
                        {!!mainStory?mainStory.headLine:''}
                        <div className="author">
                            {!!mainStory?mainStory.authorName:''}
                        </div>
                    </div>
                    <div className="end-line"></div>
                </div>
                <div className="story">
                    <div className="description">
                        {!!mainStory?mainStory.headLine:''}
                        <div className="author">
                            {!!mainStory?mainStory.authorName:''}
                        </div>
                    </div>
                    <div className="end-line"></div>
                </div>
                <div className="story">
                    <div className="description">
                        {!!mainStory?mainStory.headLine:''}
                        <div className="author">
                            {!!mainStory?mainStory.authorName:''}
                        </div>
                    </div>
                    <div className="end-line"></div>
                </div>
            </div>
        </div>
    )
}

ThirdRowStoriesComponent.propTypes = {
    mainStory:PropTypes.object.isRequired
}

export default ThirdRowStoriesComponent
