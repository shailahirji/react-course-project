let reveal=false;

const onClickReveal= (e) =>{
    e.preventDefault();
    if(!reveal){
        reveal=true;
        renderApp();
    }else {
        reveal=false;
        renderApp();
    }    
};

const appRoot= document.getElementById('app');
const renderApp = () =>{
    const template= (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={onClickReveal}>{(reveal ? 'Hide details':'Show details')}</button>
            <p>{reveal ?'Here are your hidden details':undefined}</p>
        </div>
    );
    ReactDOM.render(template,appRoot);
};

renderApp();