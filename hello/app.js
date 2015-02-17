/** @jsx React.DOM */

'use strict';
var React = require('react'),
    APP

var APP = 
React.createClass({
    render:function() {
        return (
            <div>Hello {this.props.name}</div>
        )
    }
});

var HelloMessage = React.createClass({
  render: function() {
    return <div>Hello {this.props.name}</div>;
  }
});

React.render(<HelloMessage name="John" />, mountNode);
