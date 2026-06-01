import React, { useState } from 'react'

export default function US6() {
    const [ct,setCT] = useState('LJ University')
    const [cc,setCC] = useState('red')
    const [bt,setBT] = useState('Show')
    const [txt,setTxt] = useState('')

    const ch1 = () => {
        if (ct === "LJ University") {
            setCT('Welcome students')
        } else {
            setCT('LJ University')
        }
    }

    const ch2 = () => {
        if(cc === 'red') {
            setCC('blue')
        } else {
            setCC('red')
        }
    }

    const ch3 = () => {
        if(bt === 'Show') {
            setBT('Hide')
            setTxt('React Js Hooks')
        } else {
            setBT('Show')
            setTxt('')
       }
    }
  return (
    <div>
      <button onClick={ch1}>Change Text</button>
      <br></br>
      <button onDoubleClick={ch2}>Change Color</button>
      <br />
      <button onClick={ch3}>{bt}</button>
      <br />
      <h1 style={{color : cc}}>{ct}</h1>
      <br />
      <h1>{txt}</h1>
    </div>
  )
}
