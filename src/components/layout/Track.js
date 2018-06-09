import React, { Component } from 'react'
import {APIManager} from '../../utils' 
import { Nav } from '../containers'

class Track extends Component {
    constructor(){
    	super()
    	this.state = {
    		track: {
                name:''
    		}
    	}
    }

	componentDidMount(){
		// console.log('Track.js layout componentDidMount: ')
        // APIManager.get('/api/track/'+this.props.slug, null, (err, response) => {
        APIManager.get('/api/track?slug='+this.props.slug, null, (err, response) => {	
        	if (err){
        		const msg = err.message || err
        		alert(msg)
        		return
        	}
        	console.log(JSON.stringify(response.results))  //(response.result))
        	var track = response.results[0]
        	this.setState({
        		track: track
        	})
        })
	}

	render(){
		return(
			<div>
			    <h2>This is {this.state.track.name}</h2>
                <ol>
                    <li>Bug1</li>
                    <li>Bug2</li>
                </ol>
			</div>
		)
	}
}

export default Track