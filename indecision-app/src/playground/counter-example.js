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

let count=0;
const addOne = () => {
    count++;
    renderCounterApp();
};

const minus1 = ()=> {
    count--;
    renderCounterApp();
}

const reset= () =>{
    count=0;
    renderCounterApp();
}

const appRoot= document.getElementById('app');
//re generate entire app and rerender it to the DOM
const renderCounterApp= () =>{
    const templateTwo=(
        <div> 
            <h1>Count: {count}</h1>
            <button onClick={addOne} className="button">+1</button>
            <button onClick={minus1} className="button">-1</button>
            <button onClick={reset} className="button">Reset</button>
       
            
        </div>
       );
       ReactDOM.render(templateTwo,appRoot); 
};

renderCounterApp(); //comment out till here 
ReactDOM.render(<Counter />,document.getElementById('app'));