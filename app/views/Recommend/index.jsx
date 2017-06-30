import React,{Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Banner from './subPage/Banner'

import styles from './style.styl'

import * as appActions from 'app/redux/actions/app'

class Recommend extends Component{
	constructor(props) {
	  super(props);
	  this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render() {
		const opt = {
			auto:2500,
			continuous: true,
			callback:(index)=>{ // 这个index就表示当前在第几页
				this.setState({
					index:index
				})
			}
		}
		return (
			<div>
				<Banner/>
			</div>
		)
	}
	componentDidMount() {
	}
}

function mapStateToProps(state) {
	return {
	}
}

function mapDispatchToProps(dispatch) {
	return {
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Recommend)
