import React,{Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {HashRouter as Router, Route, Switch, Redirect, NavLink} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

//redux流
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userInfoActionsFromOtherFiles from './redux/actions/userinfo'

import styles from './style.styl'
//本地缓存配置
import { CITYNAME } from './config/localStorekey'
import LocalStore from './util/localStore'

// bundle模型用来异步加载组件
import Bundle from 'util/bundle';

// 引入Tab组件
import Tab from 'components/Tab'

// 不需要异步加载的组件
import recommend from 'views/Recommend'

// 异步加载文件
// import NotFoundContainer from 'bundle-loader?lazy!./views/NotFound'
// import NotFoundContainer from 'bundle-loader?lazy!./views/NotFound'
// import NotFoundContainer from 'bundle-loader?lazy!./views/NotFound'
// import NotFoundContainer from 'bundle-loader?lazy!./views/NotFound'
import NotFoundContainer from 'bundle-loader?lazy!./views/NotFound'

const NotFound = (props)=>(
	<Bundle load={NotFoundContainer}>
		{(NotFound)=><NotFound history={props.props.history}/>}
	</Bundle>
)


class AppContainer extends Component{
	constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      initDone: false
    }
  }
	render(){
		const history = createBrowserHistory();
		const tabDatas = [
			{name: '推荐', path: '/recommend'},
			{name: '歌单', path: '/list'},
			{name: '电台', path: '/fm'},
			{name: '排行', path: '/rank'}
		]
		return (
			<Router>
			{
				this.state.initDone
				?	<div id="app">
						<div className={styles["logo"]}>
							<i className={styles["music-icon"] + ' icon-music'}></i>
							<span className={styles.title}>music by react</span>
						</div>
						<Tab tabDatas={tabDatas} history={history}/>
						<Switch>
							<Redirect exact path="/" to='/recommend'/>
							<Route exact
										 path="/recommend"
										 component={recommend} />
							<Route
								render={props=>(
									<NotFound props={props} />
								)}
							/>
						</Switch>
					</div>
				: <div>正在加载...</div>
			}
			</Router>
		)
	}
	componentDidMount(){
		this.setState({
			initDone:true
		})
	}
}

function mapStateToProps(state){
	return {
	}
}

function mapDispatchToProps(dispatch){
	return {
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AppContainer)
