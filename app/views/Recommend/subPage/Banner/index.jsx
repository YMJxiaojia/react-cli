import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import BScroll from 'better-scroll'
import styles from './style.styl'

import api from 'api/index'

export default class NotFound extends Component{
	constructor(props) {
	  super(props);
	  this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      dots: [],
      currentPageIndex: 0,
      bannerDatas: [],
      clientWidth: 0,
      options: {
        loop: true,
        autoPlay: true,
        interval: 4000
      }
    }
	}
	render(){
		return (
			<div className={styles['slide']} ref="slider">
        <div className={styles["slider-group"]} ref="sliderGroup">
          {this.props.childern}
        </div>
      </div>
		)
	}
  componentDidMount() {
    api.getBannerResource().then(res => {
      this.setState({
        bannerDatas: res.data.banners,
        clientWidth: document.body.clientWidth
      })
    })
    setTimeout(() => {
      // this._setSliderWidth()
      // this._initDots()
      // this._initSlider()
      // if(this.state.options.autoPlay) {
      //   this._play
      // }
    }, 20)
    window.addEventListener('resize', () => {
      if(!this.slider) {
        return
      }
    })
  }
}
