import React, { useState } from 'react'

export default function Calc() {
  // Use a single object to hold all your numbers
  const [data, setData] = useState({ n1: 0, n2: 0, result: 0 })

  function add() {
    const num1 = Number(data.n1)
    const num2 = Number(data.n2)
    setData({ ...data, result: num1 + num2 })
  }

  function subtract() {
    const num1 = Number(data.n1)
    const num2 = Number(data.n2)
    setData({ ...data, result: num1 - num2 })
  }

  function multiply() {
    const num1 = Number(data.n1)
    const num2 = Number(data.n2)
    setData({ ...data, result: num1 * num2 })
  }

  function divide() {
    const num1 = Number(data.n1)
    const num2 = Number(data.n2)
    setData({ ...data, result: num1 / num2 })
  }

  return (
    <div>
      <form>
        {/* Update only the specific field in the object */}
        n1:<input type="number" onChange={(e) => setData({ ...data, n1: e.target.value })}/>
        n2:<input type="number" onChange={(e) => setData({ ...data, n2: e.target.value })}/>
      </form>

      <h1>{data.result}</h1>

      <button onClick={add}>Addition</button>
      <button onClick={subtract}>Subtraction</button>
      <button onClick={multiply}>Multiplication</button>
      <button onClick={divide}>Division</button>
    </div>
  );
}
