var Input = React.createClass({displayName: "Input",
	render : function(){
		return (
			React.createElement("input", {type: "input", value: "haha", onChange: this.input})
		);
	}
});

ReactDOM.render(
	React.createElement(Input, null),
	document.getElementById("test")
);