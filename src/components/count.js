import React, { useEffect } from 'react'
import { useState } from 'react'
export const Contador = () => {

const [count, setCount] = useState(0)
const sum=()=>setCount(count+1);
const res=()=>setCount(count-1)
useEffect(() => {
  setInterval(() => {
    setCount(count+1)
    return()=>clearInterval(count)
  },1000);

})
  return (
    <>  
    <nav>
      <h3>{count}</h3>
      <button onClick={sum}>+</button>
      <button onClick={res}>-</button>
    </nav>
    </>
  )
}
