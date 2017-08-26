import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import $ from 'jquery'
import {loadStories, loadMoreStories} from '../actions'
import SecondRowStories from './SecondRowStories.container'
import ThirdRowStories from './ThirdRowStories.container'
import FourthRowStories from './FourthRowStories.container'
// import RecentStories from './RecentStories.container'
import './App.css'

class App extends Component {
  static propTypes = {
      imgSrc: PropTypes.string.isRequired,
      headLine: PropTypes.string.isRequired,
      sectionName: PropTypes.string.isRequired,
      authorName: PropTypes.string.isRequired,
      publishedAt: PropTypes.number,
  }

  handleScollEvent = ()=> {
      if($(window).scrollTop() + $(window).height() === $(document).height()) {
          this.props.dispatch(loadMoreStories(this.props));
      }
  }

  componentDidMount() {
    this.props.dispatch(loadStories());
    window.addEventListener('scroll', this.handleScollEvent);
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
                    <div className="author-icon col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1 no-padding">
                        <img alt="" className="search-img" src="img/search-blue.png" srcSet="img/search-blue@2x.png 1000w, img/search-blue@3x.png 2000w"></img>
                    </div>
                    <div className="auther-name">{authorName}<br/>
                        <span className="posted-details">Posted {publishedAt}</span>
                    </div>
                </div>
            </div>
        </div>
        {/*second row stories*/}
        <SecondRowStories></SecondRowStories>

        {/*Carosol*/}
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
        {/*Fourth Row stories*/}
        <div className="title-politics">
            <span className="line-copy">Food & Health</span>
        </div>

        <FourthRowStories></FourthRowStories>
        {/*Recent stories*/}
        {/*<RecentStories></RecentStories>*/}
    </div>
    )
  }
}
/*
* App is the main Root Component - all sub Component are inside App
* Mainly holds the pageLoadedDetails for update url construction and Main story  detail to
* Disply the story.
*/

const mapStateToProps = state => {
  return {
      ...state.mainArticle[0],
      ...state.pageLoadedDetails
  }
}

export default connect(mapStateToProps)(App)
