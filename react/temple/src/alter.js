var Input = React.createClass({
	getInitialState : function(){
		return ({
			value : ""
		});
	},
	input : function(event){
		this.setState({
			value : event.target.value.substr(0,10)
		});
	},
	render : function(){
		return (
			<div>
				<input type="input" value={this.state.value} onChange={this.input} placeholder="tye" />
				<textarea defaultValue="zhangsanjintianshijindalesilihewangwu"></textarea>
				<select value="B">
				    <option value="A">Apple</option>
				    <option value="B">Banana</option>
				    <option value="C">Cranberry</option>
				</select>
			</div>
		);
	}
});

ReactDOM.render(
	<Input />,
	document.getElementById("test")
);