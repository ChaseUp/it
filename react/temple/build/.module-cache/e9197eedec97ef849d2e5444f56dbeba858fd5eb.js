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
			React.createElement("div", null, this.props.value)
		)
	}
});

ReactDOM.render(
	React.createElement(Mycomponent, null),
	document.getElementById("test")
);