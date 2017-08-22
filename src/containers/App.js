import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {loadStories } from '../actions'

class App extends Component {
  static propTypes = {
      string: PropTypes.string.isRequired,
      array: PropTypes.array.isRequired,
      bool: PropTypes.bool.isRequired,
      number: PropTypes.number,
      dispatch: PropTypes.func.isRequired
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
    const { imgSrc} = this.props
    return (
    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 no-padding">
        <div className="row no-margin main-article">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 no-padding">
                <img alt="" src={imgSrc} className="main-article-img"></img>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 no-padding">
                <div className="story-title">Science</div>
                <div className="line-copy"></div>
                <div className="story-description">aaaa</div>
            </div>
        </div>
    </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
      imgSrc:'http://quintype-01.imgix.net/' + state.mainArticle['hero-image-s3-key']
  }
}

export default connect(mapStateToProps)(App)
