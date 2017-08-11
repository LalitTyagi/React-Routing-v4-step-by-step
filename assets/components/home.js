import React from 'react';
import { NavLink } from 'react-router-dom';


module.exports = React.createClass({
	render:function(){
		return(
			<div>
				<ul>
			      	<li><NavLink to="/nesting" activeClassName="active">Nesting</NavLink></li>
			      	<li><NavLink to="/propsR" activeClassName="active">Routing using props</NavLink></li>
			      	<li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
			      	<li><NavLink to="/about" activeClassName="active">About</NavLink></li>
			    </ul>
			</div>
			);
	}
})