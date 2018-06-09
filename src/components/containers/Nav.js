import React, { Component } from 'react'

class Nav extends Component {

    render(){
    	return (
		        <header id="header" className="transparent-header dark">

		            <div id="header-wrap">
		                <div className="container clearfix">
		                    <div id="primary-menu-trigger"><i className="icon-reorder"></i></div>

		                    <nav id="primary-menu">
		                        <ul>
		                            <li><a href="/"><div>Home</div></a></li>
		                            <li><a href="/register"><div>Register</div></a></li>
		                            <li><a href="/"><div>Home</div></a></li>
		                        </ul>
		                    </nav>
		                </div>     
		            </div>
		        </header>

    	)
    }

}

export default Nav