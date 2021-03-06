// <textarea onChange={this.updateBug.bind(this)} placeholder="Response" id="response" className="form-control"></textarea><br /> 
import React, { Component } from 'react'
import { APIManager, DateUtils } from '../../utils' 
import { Nav } from '../containers'
import actions from '../../actions'
import { connect } from 'react-redux'
import Time from 'react-time'

class Track extends Component {
    constructor(){
    	super()
    	this.state = {
    		track: {
                name:''
    		},
            bug: {
                title:'',
                detail:'',
                response: '',
                slug: ''
            }
    	}
    }

	componentDidMount(){
        var _this = this
		// console.log('Track.js layout componentDidMount: ')
        // APIManager.get('/api/track/'+this.props.slug, null, (err, response) => {
        APIManager.get('/api/track?slug='+this.props.slug, null, (err, response) => {	
        	if (err){
        		const msg = err.message || err
        		alert(msg)
        		return
        	}
        	console.log(JSON.stringify(response.results))  //(response.result))
            var tracks = response.results
            // this.setState({
            //  track: track
            // })
            this.props.tracksReceived(tracks)
            _this.fetchBugs()
        })
	}


    fetchBugs(){
        console.log('fetchPosts: ')
        console.log(JSON.stringify(this.props.track._id))
        if (this.props.track._id == null){
            return
        }

        var id = this.props.track._id
        APIManager.get('/api/bug?track='+id, null, (err, response) => {
            if (err){
                const msg = err.message || err
                alert(msg)
                return
            }

            console.log(JSON.stringify(response.results))
            this.props.bugsReceived(response.results)
        })
    }

    updateBug(event){
        event.preventDefault()
        console.log(event.target.id+' == '+event.target.value)
        var updatedBug = Object.assign({}, this.state.bug)
        updatedBug[event.target.id] = event.target.value
        var bug = updatedBug
        this.setState({
            bug: bug
        })
        console.log('updatedBug: '+JSON.stringify(this.state.bug))
    }

    submitBug(event){
        event.preventDefault()
        if (this.props.currentUser == null) {
            alert('Please log in to record new bug')
            return
        }

        console.log('to submitBug: '+JSON.stringify(this.state.bug))
        var bug = this.state.bug
        var title = bug.title
        var parts = title.split(' ')

        var slug = ''
        for (var i=0; i<parts.length; i++){
            var word = parts[i]
            slug += word
            if (i != parts.length-1)
                slug += '-'
        }

        slug = slug.replace(/['"]+/g, '')
        slug = slug.replace(/\//g, '') 
        bug['slug'] = slug
        console.log(JSON.stringify(bug))

        var bug = Object.assign({}, this.state.bug)   // var bug = this.state.bug
        console.log(JSON.stringify(this.props.track._id))
        console.log(JSON.stringify(this.props.currentUser.id))
        bug['track'] = this.props.track._id
        bug['profile'] = this.props.currentUser.firstName

        APIManager.post('/api/bug', bug, (err, response) => {
            if (err) {
                const msg = err.message || err
                alert(msg)
                return
            }
            this.props.bugCreated(response.result)
            console.log('submitBug: '+JSON.stringify(response.result))
            window.location.href = '/bug/'+bug['slug']
        })
        

    }

    render(){
        var bugList = this.props.bugs.map((bug, i) => {
            return (
                <a key={i} href="#" className="list-group-item">
                    <h4 className="list-group-item-heading">Contributed by User {bug.profile}  ({DateUtils.formattedDate(bug.timestamp)}): <a href={'/bug/'+bug.slug}>{bug.title} </a></h4>
                    <p className="list-group-item-text">{bug.detail}</p>
                </a> 
            )
        })
        return(
            <div>


                <section id="content">
                    <div className="content-wrap">
                        <div className="container clearfix">
                            <div className="postcontent nobottommargin clearfix">

                                <h4>TRACK NAME: {this.props.track.name}</h4>
                                <p>TRACK DESCRIPTION: {this.props.track.description}</p>
                                <input onChange={this.updateBug.bind(this)} placeholder="Name your bug" id="title" className="form-control" type="text" /><br />
                                <textarea onChange={this.updateBug.bind(this)} placeholder="When/Where: it can be at a particular commit of a github repository, or at a certain time of a youtube tutorial, etc." id="when_where" className="form-control"></textarea><br /> 
                                <textarea onChange={this.updateBug.bind(this)} placeholder="Symptom" id="symptom" className="form-control"></textarea><br /> 
                                <button onClick={this.submitBug.bind(this)} className="btn btn-success">Record a new bug</button><br />
                                <hr style={{borderTop: '1px solid red #444'}} />
                                {bugList}

                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}

const stateToProps = (state) => {
    // var tracksArray = state.tracks.list
    var tracksArray = state.track.list

    return {
        track: (tracksArray.length == 0) ? {name:''} : tracksArray[0],
        bugs: state.bug.list,
        currentUser: state.account.currentUser 
    }
}

const dispatchToProps = (dispatch) => {
    return {
        tracksReceived: (tracks) => dispatch(actions.tracksReceived(tracks)),
        bugCreated: (bug) => dispatch(actions.bugCreated(bug)),
        bugsReceived: (bugs) => dispatch(actions.bugsReceived(bugs))
    }
}

export default connect(stateToProps, dispatchToProps)(Track)