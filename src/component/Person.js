import React from 'react';
const Person=(props)=>{
    return(
        <div>
            <p onClick={props.myclick}>My name is {props.name} and age is {props.age}!{props.children}</p>
    
        </div>
    )
}
export default Person;