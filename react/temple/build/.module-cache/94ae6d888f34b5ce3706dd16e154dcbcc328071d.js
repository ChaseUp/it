// var SetIntervalMixin = {
//   componentWillMount: function() {
//     this.intervals = [];
//   },
//   setInterval: function() {
//     this.intervals.push(setInterval.apply(null, arguments));
//   },
//   componentWillUnmount: function() {
//     this.intervals.map(clearInterval);
//   }
// };

// var TickTock = React.createClass({
//   mixins: [SetIntervalMixin], // 引用 mixin
//   getInitialState: function() {
//     return {seconds: 0};
//   },
//   componentDidMount: function() {
//     this.setInterval(this.tick, 1000); // 调用 mixin 的方法
//   },
//   tick: function() {
//     this.setState({seconds: this.state.seconds + 1});
//   },
//   render: function() {
//     return (
//       <p>
//         React has been running for {this.state.seconds} seconds.
//       </p>
//     );
//   }
// });

// ReactDOM.render(
//   <TickTock />,
//   document.getElementById('test')
// );








var TickTock = React.createClass({displayName: "TickTock",
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
            seconds : this.state.seconds++
        })
    },
    render : function(){
        return (
            React.createElement("div", null, "react runs ", this.state.seconds, " seconds")
        )
    }
});