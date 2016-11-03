var Mycomponent = React.createClass({
	getDefaultProps : function(){
		return {
			value : "hahaha"
		}
	},
	propTypes : {
		tip : React.PropTypes.string
	},
	render : function(){
		return (
			<div title={this.props.tip}>{this.props.value}</div>
		)
	}
});

ReactDOM.render(
	<Mycomponent tip="5" />,
	document.getElementById("test")
);