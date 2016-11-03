var Input = React.createClass({displayName: "Input",
	getInitialState : function(){
		return ({
			value : ""
		});
	},
	input : function(event){
		this.setState({
			value : event.target.value.substr(0,10)
		});
	},
	render : function(){
		return (
			React.createElement("div", null, 
				React.createElement("input", {type: "input", value: this.state.value, onChange: this.input, placeholder: "tye"}), 
				React.createElement("textarea", {value: "kjalsdjfalsdjfalsdkjfalkjsadlfkjlk"})
			)
		);
	}
});

ReactDOM.render(
	React.createElement(Input, null),
	document.getElementById("test")
);