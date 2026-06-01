import React from 'react'
import { useState } from 'react'

export default function US2() {
    const [count,setCount] = useState(0)
    const inc = () => {
        if(count < 10) {
            setCount(count + 1)
        } else {
            alert('Count Limit Reahced : 10')
        }
    }
    const dec = () => {
        if(count > 0) {
            setCount(count - 1)
        } else {
            alert('Count Limit Reached : -1')
        }
    }
    return (
      <div>
        <h1>Use State Count Change</h1>
        <h1>User Clicked {count} Times</h1>
        <button onClick={inc}>+ Inc</button>
        <br/>
        <button onClick={dec}>- Dec</button>
      </div>
    )
}
