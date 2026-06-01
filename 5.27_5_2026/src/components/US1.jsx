import React from 'react'
import { useState } from 'react'

export default function US1() {
    const [count,setCount] = useState(0)
    const hs = () => {
        setCount(count + 1)
    }
  return (
    <div>
      <h1>Use State Count Change</h1>
      <h1>User Clicked {count} Times</h1>
      <button onClick={hs}>Click Me</button>
    </div>
  )
}
