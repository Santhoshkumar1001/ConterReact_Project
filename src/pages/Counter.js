import React,{useState} from "react";



function Counter(){

    const [count, setCount] = useState(0);

  function handleChange(type){
    if(type === 'decrement' && count >= 1) setCount(count - 1);
    else if(type ==='increment') setCount(count + 1);
    
   } 
    return  (
        <div className="App">
          <section className="pricing py-5">
          <div className="container">
          <div claclassNamess="row">
    
          <div className="counter-container">
    <button className="counter-button" onClick={ () => handleChange('decrement')}>
    -
    </button>
    <div style={{width:20}}></div>
    <p id = "counter-value" class="counter-text">
    {count}
    </p>
    
    <div style={{width:20}}></div>
    <button className="counter-button"  onClick={ () => handleChange('increment')}>
    +
    </button>
    </div>
    
    
          </div>
          </div>
         </section>
         </div>
      );
    
    
}


export default Counter;