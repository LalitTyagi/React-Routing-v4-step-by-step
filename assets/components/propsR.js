import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import LinK from './link.js';

module.exports = React.createClass({
  render:function() {
    return (
      <div>
          <h1>Nested routing using props</h1>
          <div>
          	<ul>
          		<li><Link to={this.props.match.url + "/link1"} >Link 1</Link></li>
          		<li><Link to={this.props.match.url + "/link2"} >Link 2</Link></li>
          		<li><Link to={this.props.match.url + "/link3"} >Link 3</Link></li>
          	</ul>
          </div>
          <div>
          	<p>Content of the link will appear here:</p>
          	  <Route path={`${this.props.match.url}/:Link`} component={LinK}/>
          </div>
      </div>
    );
  }
})