import React,{Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as appActions from '../../redux/actions/app'

import styles from './style.styl'

class NotFound extends Component{
	constructor(props) {
	  super(props);
	  this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
		return (
			<div>
				<h2 style={{textAlign:"center"}}>404页面丢失了...</h2>
				<i className="icon-search"></i>
				<i className="icon-list"></i>
				<i className="icon-back"></i>
				<i className="icon-play"></i>
				<i className="icon-next"></i>
				<i className="icon-prev"></i>
				<i className="icon-loop"></i>
				<i className="icon-pause"></i>
				<i className="icon-next-line"></i>
				<div className={styles["hehe"]}>hehe</div>
			</div>
		)
	}
	componentDidMount(){
		this.props.appActionList.menu({
			location:-1
		})
	}
}

function mapStateToProps(state){
	return {
	}
}

function mapDispatchToProps(dispatch){
	return {
		appActionList:bindActionCreators(appActions,dispatch)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(NotFound)
