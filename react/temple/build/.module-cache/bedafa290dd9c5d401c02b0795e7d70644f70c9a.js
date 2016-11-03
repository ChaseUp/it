var CheckBox = React.createClass({displayName: "CheckBox",
	render : function(){
		var name = this.props.checked ? "checked" : "unchecked";
		return (
			React.createElement("div", {className: name, onClick: this.props.onClick}, 
				this.props.children
			)
		)
	}
});

ReactDOM.render(
	React.createElement(CheckBox, {checked: true, onClick: console.log.bind(console)}, 
		"Hello World"
	),
	document.getElementById("test")
);