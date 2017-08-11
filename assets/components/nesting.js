import React from 'react';
import { BrowserRouter, Link, Route, NavLink,withRouter} from 'react-router-dom';



module.exports = React.createClass({
	github:function(){
		console.log('GitHub')
		this.props.history.push('/nesting/githubSearch/')
	},
	todo:function(){
		console.log('ToDo')
		this.props.history.push('/nesting/todo/')
	},
	errors:function(){
		console.log('Error')
		this.props.history.push('/nesting/errors/')
	},
	render:function(){
		return(
			<div>
				<h2>Nesting</h2>
		        <center>
					<input type="button" value="GitHub" onClick={this.github}/>
					<input type="button" value="TODO" onClick={this.todo}/>
		        	<input type="button" value="Error" onClick={this.errors}/><br/>
		        </center>
			</div>
			);
	}
})