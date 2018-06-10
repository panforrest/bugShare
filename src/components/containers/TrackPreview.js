import React, { Component } from 'react'

class TrackPreview extends Component {
	render(){
		return (

			<div className="entry clearfix">

                <div className="entry-c">
                    <div className="entry-title">
                        <h2>
                            <a href={'/track/'+this.props.track.slug}>{this.props.track.name}</a>
                        </h2>
                    </div>

                    <hr style={{borderTop:'1px solid #ddd'}} />

                </div>
            </div>

		)
	}
}

export default TrackPreview