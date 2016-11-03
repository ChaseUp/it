var arr = ["zhangsan","lisi","wangwu"];
var Hello = React.createClass({displayName: "Hello",
	render : function(){
		return (
			React.createElement("ol", null, 
			
				arr.map(function(name,i){
					return React.createElement("li", null, "Hello ", name)
				})
			
			)
		)	
	}
});

ReactDOM.render(
	React.createElement(Hello, null),
	document.getElementById("test")
);