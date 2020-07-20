import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

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
            <Tooltip title="Add">
                <Button onClick={increNum} className="Btn_green"><AddIcon/>
                 </Button>
                 </Tooltip>
                <Tooltip title="Delete">
                <Button  onClick={DecNum} className="Btn_red">
                <RemoveIcon/>
                </Button>
                </Tooltip>
            </div>

            </div>

            </div>

        </>

    )
}
export default ToDoList;