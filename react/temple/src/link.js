//  ReactDOM.render(
//     <h1>Hello, world!</h1>,
//     document.getElementById('example')
// );

var LikeButton = React.createClass({
  getInitialState: function() {
    return {liked: false};
  },
  handleClick: function(event) {
    this.setState({liked: !this.state.liked});
  },
  render: function() {
    var text = this.state.liked ? 'like' : 'haven\'t liked';
    return (
      <p onClick={this.handleClick} style={{"cursor":"pointer"}}>
        You {text} this. Click to toggle.
      </p>
    );
  }
}); 

ReactDOM.render(
  <LikeButton />,
  document.getElementById('example')
);