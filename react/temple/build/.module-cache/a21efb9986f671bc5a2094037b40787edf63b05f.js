var Input = React.createClass({displayName: "Input",
	getInitailState : function(){
		return ({
			value : "haha"
		});
	},
	input : function(){
		this.setState({
			value : event.target.value
		});
	},
	render : function(){
		return (
			React.createElement("input", {type: "input", value: this.state.value, onChange: this.input})
		);
	}
});

ReactDOM.render(
	React.createElement(Input, null),
	document.getElementById("test")
);