var arr = ["zhangsan","lisi","wangwu"];
var Hello = React.createClass({
	render : function(){
		return (
			<ol>
			{
				arr.map(function(name,i){
					return <li key={i}>Hello {name}</li>
				})
			}
			</ol>
		)	
	}
});

ReactDOM.render(
	<Hello />,
	document.getElementById("test")
);