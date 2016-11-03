var CheckBox = React.createClass({displayName: "CheckBox",
	render : function(){
		return (
			React.createElement("div", {className: this.props.checked})
		)
	}
});

ReactDOM.render(
	React.createElement(CheckBox, {checked: true, onClick: console.log.bind(console)}, 
		"Hello World"
	),
	document.body
);