import React, { Component } from 'react'
import actions from '../../actions'
import { connect } from 'react-redux'
// import { Signup } from '../presentation'
import { APIManager } from '../../utils'

class Bugs extends Component {

	constructor(){
		super()
		this.state = {
			bugs: []
		}
	}

	componentDidMount(){
		// console.log('componentDidMount: ')
		APIManager.get('/api/bug', null, (err, response) => {
			if (err) {
				const msg = err.message || err
				alert(msg)
				return
			}

			console.log(JSON.stringify(response.results))
			var results = response.results
			// this.setState({
			// 	bugs: results
			// })
		    this.props.bugsReceived(results)
		})
	}
	
	render(){
        const bugs = this.props.bugs.map((bug, i) => {
        	return(
                <li key={i}>{bug.title}</li>
        	)
        })

		return(
    		<div className="container clearifx">
                <div className="col_three_fifth bothsidebar nobottommargin">
                    <div className="fancy-title title-border">
                        <h3>Bugs that are recorded by bugShare users:</h3>
                    </div>

                    <div id="posts" className="events small-thumbs">
                        {bugs}
                    </div>    
                </div>
                <Admin />
            </div> 

		)
	}
}

const stateToProps = (state) => {
	return {
        bugs: state.bug.list
	}
}

const dispatchToProps = (dispatch) => {
	return {
        bugsReceived: (bugs) => dispatch(actions.bugsReceived(bugs))

	}
}

export default connect(stateToProps, dispatchToProps)(Bugs)