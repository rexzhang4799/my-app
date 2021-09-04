import React, { useState,useEffect } from 'react';

const Ustate = () => {
    // 声明一个新的叫做 “count” 的 state 变量
  const [count, setCount] = useState(0);
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });
  console.log(count,setCount)
    return(
        <div style={{ background:'blue'}}>
        <span>You clicked {count} times</span>
        <button onClick={() => setCount(count + 10)}>Click me</button>
      </div>
    )
}


export default Ustate;