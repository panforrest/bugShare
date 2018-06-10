import React, { Component } from 'react'
import actions from '../../actions'
import { connect } from 'react-redux'
import { Signup } from '../presentation'
import { APIManager } from '../../utils'
import Dropzone from 'react-dropzone'

class Admin extends Component {

    constructor(){
        super()
        this.state = {
            bug: {
                profile: '',
                track: '',
                title: '',
                details: '',
                response: ''
            },
            track: {
                name: '',
                slug:''
            }
        }
    }

    componentDidMount(){
        APIManager.get('/account/currentuser', null, (err, response) => {
            if (err) {
                const msg = err.message || err
                alert(msg)
                return
            }
            console.log('Admin.js: '+JSON.stringify(response.profile)) 
            this.props.currentUserReceived(response.profile)
        })        
    }

    register(visitor){
        var email = visitor.email
        var firstName = visitor.firstName
        var lastName = visitor.lastName
        var password = visitor.password

        if (email.length == 0) {
            alert('Please fill in Email!')
            return              
        }

        
        if (firstName.length == 0) {
            alert('Please fill in First Name!')
            return              
        }

        
        if (lastName.length == 0) {
            alert('Please fill in Last Name!')
            return              
        }

        if (password.length == 0) {
            alert('Please fill in Password!')
            return              
        }

        APIManager.post('/account/register', visitor, (err, response) => {
            if (err) {
             const msg = err.message || err
                alert(msg)
             return
            }

            console.log('register: '+JSON.stringify(response))
            this.props.profileCreated(response.profile)
        })
    }

    login(credentials){
        var email = credentials.email
        var password = credentials.password

        if (email.length == 0) {
            alert('Please fill in Email!')
            return              
        }

        if (password.length == 0) {
            alert('Please fill in Password!')
            return              
        }

        APIManager.post('/account/login', credentials, (err, response) => {
            if (err) {
                const msg = err.message || err
                // console.log(msg)
                alert(msg)
                return
            }

            console.log(JSON.stringify(response))
            this.props.currentUserReceived(response.profile)
        })
    }

    updateTrack(event){
        event.preventDefault()
        console.log('updateTrack: '+event.target.id+' == '+event.target.value)
        var updatedTrack = Object.assign({}, this.state.track)
        updatedTrack[event.target.id] = event.target.value
        this.setState({
            track: updatedTrack
        })
    }

    submitTrack(event){
        event.preventDefault()
        console.log('to submitTrack: '+JSON.stringify(this.state.track))
        var track = this.state.track
        var name = track.name

        if (name.length == 0) {
            alert('Please fill in Track Name!')
            return 
        }
        
        var parts = name.split(' ')

        var slug = ''
        for (var i=0; i<parts.length; i++){
            var word = parts[i]
            slug += word
            if (i != parts.length-1)
                slug += '-'
        }

        slug = slug.replace('?', '-')
        track['slug'] = slug
        console.log(JSON.stringify(track))

        APIManager.post('/api/track', track, (err, response) => {
            if (err){
                const msg = err.message || err
                alert(JSON.stringify(msg))
                return
            }

            console.log('track submitted: '+JSON.stringify(response.result))
            this.props.trackCreated(response.result)
            window.location.href = '/track/'+track['slug']
        })
    }    

    updateBug(event){
        event.preventDefault()
        // console.log(event.target.id+" == "+event.target.value)
        let updatedBug = Object.assign({}, this.state.bug)
        updatedBug[event.target.id] = event.target.value  //updatedBug['event.target.id'] = event.target.value
        this.setState({
            bug: updatedBug 
        }) 
        console.log('updatedBug: '+JSON.stringify(this.state.bug))
    }

    submitBug(event){
        event.preventDefault()
        var bug = this.state.bug
        bug['profile'] = this.props.currentUser.id

        APIManager.post('/api/bug', bug, (err, response) => {
            if (err){
                const msg = err.message || err
                // console.log(msg)
                alert(JSON.stringify(msg))
                return
            }
            console.log('submit: '+JSON.stringify(response.result))
            var result = response.result
            this.props.bugCreated(bug)
        })
    }    

    render(){
    	return(
    		<div>
                {(this.props.currentUser == null) ? <Signup onRegister={this.register.bind(this)} onLogin={this.login.bind(this)}/> : 
                    <div>
                        <h2>Welcome, {this.props.currentUser.firstName}</h2> 



                        <h3>Create a new Track</h3>
                        <input onChange={this.updateTrack.bind(this)} type="text" id="name" placeholder="Track Name" className="form-control" style={{marginTop:1, marginLeft:12, width:95+'%'}}/><br />
                        <Dropzone />
                        <br />
                        <button onClick={this.submitTrack.bind(this)} className="btn btn-success">Submit New Track</button><br />
                    </div>
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
        currentUserReceived: (profile) => dispatch(actions.currentUserReceived(profile)),
        bugCreated: (bug) => dispatch(actions.bugCreated(bug)),
        trackCreated: (track) => dispatch(actions.trackCreated(track))
    }
}

export default connect(stateToProps, dispatchToProps)(Admin)