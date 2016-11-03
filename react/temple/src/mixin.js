var SetIntervalMixin = {
    componentWillMount : function(){
        this.intervals = []
    },
    setInterval : function(){
        this.intervals.push(setInterval.apply(null,arguments));
    },
    componentWillUnmount : function(){
      this.intervals.map(clearInterval);
    }
}

var TickTock = React.createClass({
    mixins : [SetIntervalMixin],  //引入mixin
    getInitialState : function(){
        return {
            seconds : 0
        }
    },
    componentDidMount : function(){
        this.setInterval(this.tick,1000); //调用mixin方法
    },
    tick : function(){
        this.setState({
            seconds : this.state.seconds + 1
        })
    },
    render : function(){
        return (
            <div>react runs {this.state.seconds} seconds</div>
        )
    }
});

ReactDOM.render(
    <TickTock />,
    document.getElementById("test")
);