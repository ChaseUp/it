var arr = ["zhangsan","lisi","wangwu"];
var arr2 = [
	{"name" : "zhangsan", "id" : "z"},
	{"name" : "lisi", "id" : "l"},
	{"name" : "wangwu", "id" : "w"}
]
var Hello = React.createClass({displayName: "Hello",
	render : function(){
		return (
			React.createElement("ol", null, 
			
				arr2.map(function(name,i){
					return React.createElement("li", {key: name.id}, "Hello ", name.name)
				})
			
			)
		)	
	}
});

ReactDOM.render(
	React.createElement(Hello, null),
	document.getElementById("test")
);