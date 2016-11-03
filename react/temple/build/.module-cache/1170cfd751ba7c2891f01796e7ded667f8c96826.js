// var CheckBox = React.createClass({
// 	render : function(){
// 		var name = this.props.checked ? "checked" : "unchecked";
// 		return (
// 			<div className={name} onClick={this.props.onClick}>
// 				{this.props.children}
// 			</div>
// 		)
// 	}
// });

// ReactDOM.render(
// 	<CheckBox checked={false} onClick={console.log.bind(console)}>
// 		Hello World
// 	</CheckBox>,
// 	document.getElementById("test")
// );


var CheckBox = React.createClass({displayName: "CheckBox",
	render : function(){
		var {checked,...others}
		var name = this.props.checked ? "checked" : "unchecked";
		return (
			React.createElement("div", {className: name, onClick: this.props.onClick}, 
				this.props.children
			)
		)
	}
});

ReactDOM.render(
	React.createElement(CheckBox, {checked: false, onClick: console.log.bind(console)}, 
		"Hello World"
	),
	document.getElementById("test")
);