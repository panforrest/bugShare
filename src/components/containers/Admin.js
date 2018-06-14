import React, { Component } from 'react'
import actions from '../../actions'
import { connect } from 'react-redux'
import { Signup } from '../presentation'
import { APIManager } from '../../utils'
import Dropzone from 'react-dropzone'
import sha1 from 'sha1'

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
                slug:'',
                url: '',
                image: ''
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

    // slugify(string) {
    //   return string
    //     .toString()
    //     .trim()
    //     .toLowerCase()
    //     .replace(/\s+/g, "-")
    //     .replace(/[^\w\-]+/g, "")
    //     .replace(/\-\-+/g, "-")
    //     .replace(/^-+/, "")
    //     .replace(/-+$/, "");
    //     .replace(/\s+/g, '-') // Replace spaces with
    //     .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
    //     .replace(/&/g, '-and-') // Replace & with ‘and’
    //     .replace(/["']/g, "");// Replace " ' with ‘’
    //     .replace(/['"]+/g, '')
    //     .replace(/[^\w\-]+/g, '') // Remove all non-word characters
    //     .replace(/\-\-+/g, '-') // Replace multiple — with single -
    //     .replace(/^-+/, '') // Trim — from start of text .replace(/-+$/, '') // Trim — from end of text
    // }


    submitTrack(event){
        event.preventDefault()
        // var _this = this
        console.log('to submitTrack: '+JSON.stringify(this.state.track))
        var track = this.state.track
        var name = track.name
        var url = track.url

        if (name.length == 0) {
            alert('Please fill in Track Name!')
            return 
        }

        if (url.length == 0) {
            alert('Please fill in url!')
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

        slug = slug.replace(/['"]+/g, '')
        slug = slug.replace(/\//g, '') 

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

    uploadImage(files){
        const image = files[0]

        const cloudName = 'hmffqrvhq'
        const url ='https://api.cloudinary.com/v1_1/'+cloudName+'/image/upload'


        let timestamp = Date.now() / 1000
        const uploadPreset = 'ydm4pinf'

        const paramsStr = 'timestamp='+timestamp+'&upload_preset='+uploadPreset+'rFL-RZTX81XWxpLcuDidqKN3WbU'
        const signature = sha1(paramsStr)

        const params = {
            'api_key': '432944256736493',
            'timestamp': timestamp,
            'upload_preset': uploadPreset,
            'signature': signature
        }

        // console.log('uploadImage: ')
        APIManager.upload(url, image, params, (err, response) => {
            if (err) {
                // console.log('UPLOAD ERROR: '+JSON.stringify(err))
                alert(err)
                return
            }

            // console.log('UPLOAD COMPLETE: '+JSON.stringify(response.body))
            // const imageUrl = response.body['secure_url']

            let updatedTrack = Object.assign({}, this.state.track)
            updatedTrack['image'] = response.body['secure_url']
            this.setState({
                track: updatedTrack
            })


        })
    }
   

    render(){
        const image = (this.state.track.image == null) ? '' : this.state.track.image.replace('upload', 'upload/c_thumb,h_150,w_150,x_0,y_0') //thumbnail, not entire image

    	return(
    		<div>
                {(this.props.currentUser == null) ? <Signup onRegister={this.register.bind(this)} onLogin={this.login.bind(this)}/> : 
                    <div>
                        <h2>Hi, {this.props.currentUser.firstName}</h2> 



                        <h3>Create a new Track</h3>
                        <input onChange={this.updateTrack.bind(this)} type="text" id="name" placeholder="Track Name" className="form-control" style={{marginTop:1, marginLeft:12, width:95+'%'}}/><br />
                        <input onChange={this.updateTrack.bind(this)} type="text" id="url" placeholder="Track Url: github, youtube, etc." className="form-control" style={{marginTop:1, marginLeft:12, width:95+'%'}}/><br />
                        <input onChange={this.updateTrack.bind(this)} type="text" id="description" placeholder="Track Description" className="form-control" style={{marginTop:1, marginLeft:12, width:95+'%'}}/><br />
                        <img src={image} /><br />
                        <h6>Click below, upload image</h6>
                        <Dropzone onDrop={this.uploadImage.bind(this)}/>
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