var CheckBox = React.createClass({displayName: "CheckBox",
	render : function(){
		return (
			React.createElement("div", null)
		)
	}
});

ReactDOM.render(
	React.createElement(CheckBox, null, 
		"Hello World"
	),
	document.body
);