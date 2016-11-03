var CheckBox = React.createClass({displayName: "CheckBox",
	render : function(){
		return (
			React.createElement("div", null)
		)
	}
});

ReactDOM.render(
	React.createElement(CheckBox, {checked: true}, 
		"Hello World"
	),
	document.body
);