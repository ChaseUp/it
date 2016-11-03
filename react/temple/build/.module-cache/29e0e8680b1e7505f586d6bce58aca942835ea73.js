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
  render: function() {
    var { checked, ...other } = this.props;
    var fancyClass = checked ? 'FancyChecked' : 'FancyUnchecked';
    // `other` 包含 { onClick: console.log } 但 checked 属性除外
    return (
      React.createElement("div", React.__spread({},  other, {className: fancyClass}))
    );
  }
});

ReactDOM.render(
	React.createElement(CheckBox, {checked: false, onClick: console.log.bind(console)}, 
		"Hello World"
	),
	document.getElementById("test")
);