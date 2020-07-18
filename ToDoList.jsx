import React, { useState } from 'react';

const ToDoList=()=>{
    const [num,setNum ]=useState(0);

    const increNum=()=>{
        setNum(num+1)

    }
    const DecNum=()=>{
        if (num > 0){
        setNum(num-1)
    }
    else{
        alert("Zero limit reached.")
    }
    }

    return(

        <>
            <div className='main_div'>
            <div className='center_div'>
            <h1>{num}</h1>
            <div className='btn_div'>
                <button onClick={increNum}>Incre</button>
                <button  onClick={DecNum}>Decre</button>
            </div>

            </div>

            </div>

        </>

    )
}
export default ToDoList;