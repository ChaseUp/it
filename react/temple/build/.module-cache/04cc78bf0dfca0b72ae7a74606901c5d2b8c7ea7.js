var Mycomponent = React.createClass({displayName: "Mycomponent",
	getDefaultProps : function(){
		return {
			value : "hahaha"
		}
	},
	render : function(){
		return (
			React.createElement("div", null)
		)
	}
});