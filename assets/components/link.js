import React from 'react';


module.exports = React.createClass({
  render:function() {
    const location = this.props.location
    const params = this.props.match.params
    return (
      <div>
        <h2>This is {params.Link}!</h2>
      </div>
    );
  }
})