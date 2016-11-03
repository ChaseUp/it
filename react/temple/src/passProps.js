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


var FancyCheckbox = React.createClass({
  render: function() {
    var { checked, ...other } = this.props;
    var fancyClass = checked ? 'FancyChecked' : 'FancyUnchecked';
    // `other` 包含 { onClick: console.log } 但 checked 属性除外
    return (
      <div {...other} className={fancyClass} />
    );
  }
});

ReactDOM.render(
  <FancyCheckbox checked={true} onClick={console.log.bind(console)}>
    Hello world!
  </FancyCheckbox>,
  document.getElementById("test")
);
