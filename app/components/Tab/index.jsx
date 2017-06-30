import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import styles from './style.styl'

export default class NotFound extends Component{
	constructor(props) {
	  super(props);
	  this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
    const tabDatas = this.props.tabDatas
		return (
			<div className={styles["tab"]} ref="tab">
        {
          tabDatas.length
  				? tabDatas.map((item, index) => {
            return <NavLink className={styles["tab-item"]}
                            activeClassName={styles["active"]}
                            to={item.path}
                            onClick={this.clickHandle.bind(this, index)}
                            key={index}>
                      {item.name}
                   </NavLink>
          })
          : <div>加载中...</div>
        }
        <i ref="itemLine" className={styles["item-line"]}></i>
			</div>
		)
	}
	componentDidMount(){
    // console.log(this.props.history.location)
    const currentPath = this.props.history.location.hash
    console.log(currentPath)
    this.props.tabDatas.forEach((item, index) => {
      if(currentPath.indexOf(item.path) >= 0){
        this.refs.itemLine.style.left = index * 25 + '%'
      }
    })
  }
  clickHandle(index) {
    this.refs.itemLine.style.left = index * 25 + '%'
    // 这个是类数组对象，所以没有佛rEach方法。只能用for循环
    for(let i = 0; i < this.refs.tab.getElementsByTagName('a').length; i++){
      this.refs.tab.getElementsByTagName('a')[i].style.color = '#000'
    }
    this.refs.tab.getElementsByTagName('a')[index].style.color = 'red'
  }
}
