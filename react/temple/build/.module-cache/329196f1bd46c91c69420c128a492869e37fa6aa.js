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

var TickTock = React.createClass({displayName: "TickTock",
    mixins : [SetIntervalMixin],  //引入mixin
    getInitialState : function(){
        return {
            seconds : 0
        }
    },
    componentDidMount : function(){
        this.setInterval(this.tick,1000);
    },
    tick : function(){
        this.setState({
            seconds : this.state.seconds + 1
        })
    },
    render : function(){
        return (
            React.createElement("div", null, "react runs ", this.state.seconds, " seconds")
        )
    }
});

ReactDOM.render(
    React.createElement(TickTock, null),
    document.getElementById("test")
);