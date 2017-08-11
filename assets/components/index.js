import React from 'react';
import { BrowserRouter, Switch, IndexRoute, Router, Route, NavLink } from 'react-router-dom';

import About from './about';
import Contact from './contact';
import Errors from './errors';
import GitHub from './githubSearch';
import Home from './home';
import Nesting from './nesting';
import PropsR from './propsR';
import Todo from './todo';

module.exports = React.createClass({
	render:function(){
		return(
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Home} />
    			<Route path="/contact" component={Contact} />
    			<Route path="/nesting/errors" component={Errors} />
    			<Route path="/nesting/githubSearch" component={GitHub} />
    			<Route path="/nesting" component={Nesting} />
    			<Route path="/propsR" component={PropsR} />
     			<Route path="/nesting/todo" component={Todo} />   			
    			<Route path="/about" component={About} />
			</Switch>
		</BrowserRouter>		
		);
	}
})