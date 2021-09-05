import React, { useState,useEffect } from 'react';

const Ustate = () => {
    // 声明一个新的叫做 “count” 的 state 变量
  const [count, setCount] = useState(0);
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
   
  });
  //console.log(count,setCount)
  const add = () => {
    setCount(count+1)
  }
  
    return(
        <div style={{ padding:'10px',background:'green'}}>
        <span>You clicked {count} times</span>
        <button style={{cursor:'pointer',marginLeft:'10px'}} onClick={add}>Click me !</button>
        {/* <button onClick={() => setCount(count + 10)}>Click me</button> */}
      </div>
    )
}


export default Ustate;