var Input = React.createClass({displayName: "Input",
	render : function(){
		return (
			React.createElement("input", {type: "input", value: "haha"})
		);
	}
});

ReactDOM.render(
	React.createElement(Input, null),
	document.getElementById("test")
);