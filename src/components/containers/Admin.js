import React, { Component } from 'react'
import actions from '../../actions'
import { connect } from 'react-redux'
import Signup from './Signup'

class Admin extends Component {

    render(){
    	return(
    		<div>
                {(this.props.currentUser != null) ? <h2>Welcome, {this.props.currentUser.email}</h2> : 

                    <Signup />

                }   
    		</div>
    	)
    }
}

const stateToProps = (state) => {
    return {
        profiles: state.profile.list,
        currentUser: state.account.currentUser
    }
}

const dispatchToProps = (dispatch) => {
    return {
        profileCreated: (profile) => dispatch(actions.profileCreated(profile)),
        currentUserReceived: (profile) => dispatch(actions.currentUserReceived(profile))
    }
}

export default connect(stateToProps, dispatchToProps)(Admin)