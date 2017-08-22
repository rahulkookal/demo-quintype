import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {loadStories } from '../actions'
import SecondRowStories from './SecondRowStories.container'

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
    //dispatch(invalidateReddit(selectedReddit))
  }

  render() {
    const { imgSrc, headLine, sectionName, authorName, publishedAt} = this.props
    return (
    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 no-padding">
        <div className="row no-margin main-article">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 no-padding">
                <img alt="" src={imgSrc} className="main-article-img"></img>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 no-padding">
                <div className="story-title">
                <span className="line-copy">{sectionName}</span></div>
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
        <SecondRowStories></SecondRowStories>
    </div>
    )
  }
}

const mapStateToProps = state => {
  return {
      imgSrc:'http://quintype-01.imgix.net/' + state.mainArticle['hero-image-s3-key'],
      headLine: state.mainArticle['headline'],
      sectionName: !!state.mainArticle['sections']?state.mainArticle['sections'][0].name:'',
      authorName: state.mainArticle['author-name'],
      publishedAt: new Date(state.mainArticle['published-at']).getDay()
  }
}

export default connect(mapStateToProps)(App)
