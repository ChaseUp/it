//  ReactDOM.render(
//     <h1>Hello, world!</h1>,
//     document.getElementById('example')
// );

var LikeButton = React.createClass({displayName: "LikeButton",
  getInitialState: function() {
    return {liked: false};
  },
  handleClick: function(event) {
    this.setState({liked: !this.state.liked});
  },
  render: function() {
    var text = this.state.liked ? 'like' : 'haven\'t liked';
    return (
      React.createElement("p", {onClick: this.handleClick, style: {"cursor":"pointer"}}, 
        "You ", text, " this. Click to toggle."
      )
    );
  }
}); 

ReactDOM.render(
  React.createElement(LikeButton, null),
  document.getElementById('example')
);