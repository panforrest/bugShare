			    // <h3>Hi, {this.props.currentUser.firstName} {this.props.currentUser.lastName}</h3>
import React, { Component } from 'react'
import { APIManager } from '../../utils'
import actions from '../../actions'   //import actions from '../../constants'
import { connect } from 'react-redux'
import { Nav } from '../containers'

class Account extends Component {
    constructor(props, context){
    	super(props, context)
    	this.state = {
    		currentUser: {
    			// firstName: '',
    			// lastName: '',
    			// email: ''
    		}
    	}
    }

    componentDidMount(){
        // console.log('componentDidMount: ')
        APIManager.get('/account/currentuser', null, (err, response) => {
            if (err) {
                const msg = err.message || err
                alert(msg)
                return
            }
            // console.log('Admin.js: ', JSON.stringify(response.profile))
            this.props.currentUserReceived(response.profile)
        })
    }

	logout(event){   //logout(){
		// console.log('logout: ')
		APIManager.get('/account/logout', null, (err, response) => {
            if (err){
            	const msg = err.message || err
            	alert(msg)
            	return
            }
            console.log(this.props.currentUser.firstName)
            window.location.href = '/'
		})

	}

	render(){
        

		return(
            <section id="content">
                <div className="content-wrap">
                    <div className="container clearfix">
                        <div className="postcontent nobottommargin clearfix">
                          <div className="col_two_fifth bothsidebar nobottommargin">
                                <h3>Hi, {this.props.currentUser.firstName} {this.props.currentUser.lastName}</h3>
                                <button onClick={this.logout.bind(this)}>logout</button>
                          </div>
                        </div>
                    </div>
                </div>
            </section> 
		)
	}
}

const stateToProps = (state) => {
	return {
        // profile: state.account.currentUser
        //currentUser: state.account.currentUser
        currentUser: state.account.currentUser
	}
}

const dispatchToProps = (dispatch) => {
	return {
        // currentUserReceived: (profile) => dispatch(actions.currentUserReceived(profile))
        currentUserReceived: (profile) => dispatch(actions.currentUserReceived(profile))

	}
}

export default connect(stateToProps, dispatchToProps)(Account)