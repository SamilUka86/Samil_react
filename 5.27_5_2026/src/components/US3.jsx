import React, { use } from 'react'
import { useState } from 'react'

export default function US3() {
    const [style,setStyle] = useState('tomato')
    const [textColor,setTextColor] = useState('blue')
    const hs = () => {
        if (style === 'tomato') {
            setStyle("cyan");
            setTextColor('red')
            document.getElementById("a").innerHTML =
              "This is Cyan Color Background";
        } else {
            setStyle("tomato");
            setTextColor('blue')
            document.getElementById("a").innerHTML =
              "This is Tomato Color Background";
        }
    }
  return (
    <>
    <div style={{backgroundColor : style , color : textColor, width : 'auto', height : 200, textAlign : 'center'}} id='a'>
        Click On Button
    </div>
    <button onClick={hs}>Color BG Change</button>
    </>
  )
}
