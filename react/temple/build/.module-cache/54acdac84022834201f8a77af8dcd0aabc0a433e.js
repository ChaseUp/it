var arr = ["zhangsan","lisi","wangwu"];
var Hello = React.createClass({displayName: "Hello",
	render : function(){
		arr.map(function(name){
			return React.createElement("div", null, "Hello ", name)
		});
	}
});