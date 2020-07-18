import React, { useState } from 'react';
import ToDoList from './ToDoList';

const App=()=>{

const[inputList,setInputList]=useState('');
const[items,setItems]=useState([]);
const itemEvents=(event)=>{ 
  setInputList(event.target.value);
};
const listOfItems=()=>{
  setItems((oldItems)=>
  {
    return[...oldItems, inputList]
  });
  setInputList('');
}

  return(
    <>
    <div className="main_div">
    <div className="center_div">
    <br></br>
    <h1>ToDo List</h1> 
    <br></br>
    <input type='text' placeholder='Add a item' onChange={itemEvents} value={inputList}/>
    <button onClick={listOfItems}>+</button>

    <ol>
      {/* <li> {inputList} </li> */}
      {items.map((itemval)=>
      {
         return <ToDoList
          text = {itemval}
        />
      })}
    </ol>
    </div>

    </div>

    </>
  );


};
export default App;