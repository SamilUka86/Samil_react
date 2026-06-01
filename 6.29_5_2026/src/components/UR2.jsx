import React, { useReducer } from 'react'

export default function UR2() {
    const[s,d] = useReducer(reducer,20)
    function reducer(state,action) {
        return state + action
    }
  return (
    <div>
        <h1>{s}</h1>
        <button onClick={() => d(5)}>Add</button>
    </div>
  )
}
