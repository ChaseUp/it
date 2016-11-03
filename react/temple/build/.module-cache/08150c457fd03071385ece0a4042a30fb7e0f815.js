var Input = React.createClass({displayName: "Input",
	getInitialState : function(){
		return ({
			value : "haha"
		});
	},
	input : function(event){
		this.setState({
			value : event.target.value.substr(0,10)
		});
	},
	render : function(){
		return (
			React.createElement("input", {type: "input", value: this.state.value, onChange: this.input, placeHolder: "tye"})
		);
	}
});

ReactDOM.render(
	React.createElement(Input, null),
	document.getElementById("test")
);