import React, { useState } from 'react'
import i1 from '../assets/1.png'
import i2 from '../assets/2.png'
import i3 from "../assets/3.png";
import i4 from "../assets/4.png";
import i5 from "../assets/5.png";

export default function US7() {
    const arr = [i1,i2,i3,i4,i5]
    const [img1,setImg1] = useState(arr[0])
    const hc = () => {
        const narr = Math.floor(Math.random() * arr.length)
        setImg1(arr[narr])
    }
  return (
    <div>
      <button onClick={hc}>Click To Show Random Images</button>
      <img src={img1} alt="Random Images" />
    </div>
  )
}
