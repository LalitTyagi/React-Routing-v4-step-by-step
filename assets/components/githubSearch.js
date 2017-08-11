import React from 'react';
var $ = require('jquery');

module.exports = React.createClass({
    getInitialState: function() {
    console.log('Get InitialState')
        return {
            searchResults: [ ]
        }
    },
        
    search: function(URL){
        console.log('search Function')
        $.ajax({
            type: "GET",
            dataType: 'json',
            url: URL,
            success: function(response){
                this.setState({
                       searchResults: response
                    })
            }.bind(this)
        });
    }, 
    createAjax: function(query){
        console.log('create Function')
        var query    = this.refs.query.value;
        var URL      = 'https://api.github.com/users/' + query;
        console.log(URL)
        this.search(URL);
    },  
    
    render: function(){
        console.log('render Function')
       if (this.state.searchResults)
        {
             var temp =
                 <div>
                 <p>{this.state.searchResults.id}</p>
               <p>{this.state.searchResults.login}</p>
                 </div>
        }
        
        return (
            <div>
                <center>
                    <input type="text" ref="query" /><br/><br/>
                    <input type="submit" onClick={this.createAjax} /><br/>   
                    <ul>{temp}</ul>
                </center>
            </div>
        );
    }
})