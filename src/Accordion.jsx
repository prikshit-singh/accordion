import React, { useState } from 'react';
import Myaccord from './Myaccord';
import {Data} from './Data';
function Accord(){
    const [data,setData]=useState(Data);
    // console.groupCollapsed(...data);
    
    return(
        
        <>
        {data.map((data,key)=>{
            return <Myaccord key={key} {...data}/>
            })}
        </>
    )
}

export default Accord;


