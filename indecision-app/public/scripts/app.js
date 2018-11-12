"use strict";

// class Counter extends React.Component {
//     constructor(props){
//         super(props);
//         this.handleAddOne=this.handleAddOne.bind(this);
//         this.handleMinusOne=this.handleMinusOne.bind(this);
//         this.handleReset=this.handleReset.bind(this);
//         this.state={
//             count:0
//         };
//     }
//     handleAddOne(){
//         this.setState((prevState)=>{
//             return {
//                 count:prevState.count+1
//             };
//         });
//     }
//      handleMinusOne(){
//         this.setState((prevState)=>
//         {
//             return {
//                 count: prevState.count-1
//             };
//         });
//     }
//      handleReset(){
//         this.setState(()=>{
//             return {
//                 count: 0 
//             };
//         });
//     } 
//     render(){
//         return(
//             <div>
//                 <h1>Count:{this.state.count} </h1>
//                 <button onClick={this.handleAddOne}>+1</button>
//                 <button onClick={this.handleMinusOne}>-1</button>
//                 <button onClick={this.handleReset}>Reset</button>
//             </div>
//         );
//     }
// }

var count = 0;
var addOne = function addOne() {
    count++;
    renderCounterApp();
};

var minus1 = function minus1() {
    count--;
    renderCounterApp();
};

var reset = function reset() {
    count = 0;
    renderCounterApp();
};

var appRoot = document.getElementById('app');
//re generate entire app and rerender it to the DOM
var renderCounterApp = function renderCounterApp() {
    var templateTwo = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Count: ",
            count
        ),
        React.createElement(
            "button",
            { onClick: addOne, className: "button" },
            "+1"
        ),
        React.createElement(
            "button",
            { onClick: minus1, className: "button" },
            "-1"
        ),
        React.createElement(
            "button",
            { onClick: reset, className: "button" },
            "Reset"
        )
    );
    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp(); //comment out till here 
ReactDOM.render(React.createElement(Counter, null), document.getElementById('app'));
