import React, { Component } from 'react'
import { DateUtils } from '../../utils'

class TrackPreview extends Component {
	render(){
		return (

			<div className="entry clearfix">

                <div className="entry-image hidden-sm">
                    <a href={'/track/'+this.props.track.slug}>
                        <img src={this.props.track.image}  />
                    </a>
                </div>

                <div className="entry-c">
                    <div className="entry-title">
                        <h2>
                            <a href={'/track/'+this.props.track.slug}>{this.props.track.name}</a>
                        </h2>
                    </div>
                    <ul className="entry-meta clearfix">
                        
                        <li><a href="#">{this.props.track.url} </a></li>

                        
                    </ul>

                    <hr style={{borderTop:'1px solid #ddd'}} />
                    <div className="entry-content">
                        <p>Description: {this.props.track.description}</p>
                    </div>

                </div>
            </div>

		)
	}
}

export default TrackPreview