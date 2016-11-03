var Mycomponent = React.createClass({displayName: "Mycomponent",
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
			React.createElement("div", {title: this.props.tip}, this.props.value)
		)
	}
});

ReactDOM.render(
	React.createElement(Mycomponent, {tip: "5"}),
	document.getElementById("test")
);