import React, { Component } from 'react'
import { APIManager } from '../../utils'
import actions from '../../actions'
import { connect } from 'react-redux'

class Nav extends Component {

	componentDidMount(){
		// console.log('Nav componentDidMount: ')
		APIManager.get('/account/currentuser', null, (err, response) => {
			if (err) {
				const msg = err.message || err
				alert(msg)
				return
			}

			console.log('Nav componentDidMount: currentuser is '+JSON.stringify(response.profile))
			this.props.currentUserReceived(response.profile)
		})
	}

    render(){
    	var content = (this.props.currentUser == null) ? '' : this.props.currentUser.firstName

    	return (
		        <header id="header" className="transparent-header dark">

		            <div id="header-wrap">
		                <div className="container clearfix">
		                    <div id="primary-menu-trigger"><i className="icon-reorder"></i></div>

		                    <nav id="primary-menu">
		                        <ul>
		                            <li><a href="/"><div>Home</div></a></li>
		                            <li><a href="/register"><div>Register</div></a></li>
		                            <li><a href="/"><div>{content}</div></a></li>
		                        </ul>
		                    </nav>
		                </div>     
		            </div>
		        </header>

    	)
    }

}

const stateToProps = (state) => {
	return {
		currentUser: state.account.currentUser
	}
}

const dispatchToProps = (dispatch) => {
	return {
	    currentUserReceived: (profile) => dispatch(actions.currentUserReceived(profile))	
	}
}

export default connect(stateToProps, dispatchToProps)(Nav)