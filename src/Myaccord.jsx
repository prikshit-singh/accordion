import React, { useState } from 'react';
import './myaccord.css';
function Myaccord(props){
    const [show,setShow]=useState(false)
    return (
        <>
        <div className="main">
        <p className="btn" onClick={()=>setShow(!show)} style={{cursor:'pointer', fontWeight:"bolder"}}>{show?'-':'+'}</p>
        <h1 className="ques">{props.question} </h1>
        </div >
         {show && <p className="ans">{props.ans}</p>}
        </>
    )
}

export default Myaccord;