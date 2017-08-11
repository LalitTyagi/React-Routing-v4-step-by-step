import React from 'react';
import ReactDOM from 'react-dom';

import Index from './components/index.js';
var Main = React.createClass({
	render:function(){
		return(
			<div>
				<center>
					<h1>React Routing</h1>
					<h3>Routing is used to make a full fleshed single page application with React.</h3>
				</center>
				
				<Index/>
			</div>
			);
	}
})


ReactDOM.render(<Main />, document.getElementById('app'))