import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {loadStories } from '../actions'
import SecondRowStories from './SecondRowStories.container'
import ThirdRowStories from './ThirdRowStories.container'
import './App.css'

class App extends Component {
  static propTypes = {
  }

  componentDidMount() {
    this.props.dispatch(loadStories());
  }

  componentWillReceiveProps(nextProps) {
      console.log(nextProps)
  }

  handleChange = nextReddit => {

  }

  handleRefreshClick = e => {
    e.preventDefault()
    //const { dispatch} = this.props
  }

  render() {
    const { imgSrc, headLine, sectionName, authorName, publishedAt} = this.props
    return (
    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 no-padding">
        {/*Main Story Shown on top*/}
        <div className="row no-margin main-article">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 no-padding">
                <img alt="" src={imgSrc} className="main-article-img"></img>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 no-padding">
                <div className="story-title">
                    <span className="line-copy">{sectionName}</span>
                </div>
                <div className="story-headline">{headLine}</div>
                <div className="story-description">{headLine}</div>
                <div className="auther-details row">
                    <div className="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1 no-padding">
                        <img alt="" className="search-img" src="img/search-blue.png" srcset="img/search-blue@2x.png 1000w, img/search-blue@3x.png 2000w"></img>
                    </div>
                    <div className="auther-name">{authorName}<br/>
                        <span className="posted-details">Posted {publishedAt}</span>
                    </div>
                </div>
            </div>
        </div>

        {/*second row stories*/}
        <SecondRowStories></SecondRowStories>

        {/*Banner*/}
        <div className="must-reads">
            <div className="title">Must Reads</div>
            <div className="description">
                <div>
                    <img src="img/left-arrow.png"
                         srcset="img/left-arrow@2x.png 2x,
                     img/left-arrow@3x.png 3x"
                         className="left_arrow" alt=""></img>
                    test
                    <img src="img/right-arrow.png"
                         srcset="img/right-arrow@2x.png 2x,
                    img/right-arrow@3x.png 3x"
                         className="right_arrow" alt=""></img>
                </div>
            </div>
            <div className="button-div">
                <button>READ STORY</button>
            </div>
        </div>

        {/*Third Row stories*/}
        <div className="title-politics">
            <span className="line-copy">Politics</span>
        </div>
        <ThirdRowStories></ThirdRowStories>
    </div>
    )
  }
}

const mapStateToProps = state => {
  return state.mainArticle[0]
}

export default connect(mapStateToProps)(App)
