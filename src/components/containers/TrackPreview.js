// <img src={this.props.track.image}  />
// src={image+'=s200-c'} />
import React, { Component } from 'react'
import { DateUtils } from '../../utils'

class TrackPreview extends Component {
	render(){
        var image = this.props.track.image || null
        var image = (image == null) ? 'https://lh3.googleusercontent.com/LrqMbAmiROXMDDWg1RPy4t8WXf5DiMcm5zi-2rqqKM8LFPkszUph0OcNt1Eyz0evdb3PAeJY9nj6B74DnBT78RtWhag'+'=s200-c' : image

		return (

			<div className="entry clearfix">

                <div className="entry-image hidden-sm">
                    <a href={'/track/'+this.props.track.slug}>
                        
                        <img style={localStyle.trackImage} src={image} />
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

const localStyle = {
    trackImage: {
        // width:100+'%',
        width:250,
        padding:10,
        // border:'1px solid #ddd',
        background:'#ffffa' 
    }
}

export default TrackPreview