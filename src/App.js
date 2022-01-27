import React,{useState} from 'react';
import './App.css';
import Button from './Button';
import Person from "./component/Person"
import Todolist from './component/Todolist';
const App=()=>{
  const[counter,setCounter]=useState(0)

  const handleClick1=()=>{
  setCounter(counter+1);
}
  const handleClick2=()=>{
  setCounter(counter-1);
}
const clickHandler=(data)=>{
  alert(data);
}
const latesttechnology=["React","Node","express"];
  return(
    <div class="App">
      <h1>counter</h1>
      <p>the counter is {counter}</p>
      <button onClick={handleClick1}>Add</button>
      <button onClick={handleClick2}>Remove</button>
      <Person  name="Rohit" age="22" myclick={()=>clickHandler("sumit")}>
        good morning
    </Person>
    <ul>
      {latesttechnology.map((lat,ind)=>
      <li key={ind}>{lat}</li>
      )}
    </ul>
    <Todolist />

    </div>

  );
  }
export default App;
