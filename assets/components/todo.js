import React from 'react';
var $ = require('jquery');

module.exports = React.createClass({
    getInitialState: function() {
    console.log('Get InitialState')
        return {
            searchResults: []
        }
    },
        
    createTask: function(){
        console.log('createTask Function')
        var todo={};
        todo['text']=this.refs.newTaskQuery.value;
        var URL      = 'http://57b1924b46b57d1100a3c3f8.mockapi.io/api/todos';
        console.log(URL)
        $.ajax({
            type: "POST",
            data:todo,
            dataType: 'json',
            url: URL,
            success: function(response){
                console.log('response createTask',response)
            }.bind(this)
        });
    },  
    
    render: function(){
        return (
            <div>
                <center>
                    New Task:<input type="text" ref="newTaskQuery" /><br/><br/>
                    <input type="submit" onClick={this.createTask} /><br/><br/>
                </center>
            </div>
        );
    }
})