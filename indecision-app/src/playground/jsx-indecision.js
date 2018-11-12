const details={
    title:'Indecision App',
    subtitle:'Put your life in the hands of a computer',
    options: []
};

const onFormSubmit= (e)=>{ //e, get called with event function, e contains info about events 
    e.preventDefault();//stop full page refresh 
    //get user value 
    const option=e.target.elements.option.value;  //e.target, gets to the element that triggered the event i.e the form, elements contains "options, what we added "
    if(option){
        //push into array 
        details.options.push(option);
        //clear input 
        e.target.elements.option.value='';
        renderApp();
    }

};

const resetAll= (e) =>{
    e.preventDefault();
    details.options=[];
    renderApp();
};

const makeDecision= (e) =>{
    //generate random number between 0 and length of option 
    const randomNum= Math.floor(Math.random() * details.options.length);
    const option=details.options[randomNum];
    alert(option);

}
//create a new templateTwo var JSX expersion 
//div 
//h1 tag, has: Name 
//p tag, add age: 23
//p tag, location: Seattle,WA
//render template 2 

// const user={
//     name:'Shaila',
//     age: 13,
//     location: 'Seattle'
// }; 

// var userName='hey';
// var userAge=23;
// var userLocation='Seattle';

// function getLocation(location){
// if(location){
//     //does exist 
//     return <p>Location:{location} </p>;
// }//doesnt exist explicitly return undefined 
// }

// const template2=(
//     <div>
//         <h1>{user.name ? user.name : 'Anonymous'}</h1>
//         {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
//         {getLocation(user.location)}
//     </div>
// );

const numbers=[55,101,1000];
const appRoot= document.getElementById('app');
const renderApp = () =>{
    const template=(
        <div>
            <h1>{details.title}</h1>
            {details.subtitle && <p>{details.subtitle}</p>}
            <p>{details.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <button disabled={details.options.length==0}onClick={makeDecision}>What should I do?</button>
            <button onClick={resetAll}>Remove all</button> 
            <ol>
            {   
                details.options.map((option)=><li key={details.options.indexOf(option)}>{option}</li>)
            }
            </ol>
            <form onSubmit={onFormSubmit}> 
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
        );
        ReactDOM.render(template,appRoot);
};

renderApp();