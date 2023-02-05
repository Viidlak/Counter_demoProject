import React from 'react'
import { useState } from 'react'
 function Counter() {
const [counter, setCounter] = useState(0)

const handleAdd =()=>{
    setCounter(counter+1)
}
const handleReset =()=>{
    setCounter(0)
}
const handleSub =()=>{
    setCounter(counter-1)
}
  return (
    <div className='border mt-5 p-5'>
      <h1 className='text-primary mt-5'>Counter Application</h1>
<h2 className='text-danger'>{counter}</h2>
<button className='btn btn-primary' onClick={handleAdd}>Increment</button>&nbsp;
<button className='btn btn-danger' onClick={handleReset}>Reset</button>&nbsp;
<button className='btn btn-warning' onClick={handleSub}>Decrement</button>
    </div>
  )
}
export default Counter
