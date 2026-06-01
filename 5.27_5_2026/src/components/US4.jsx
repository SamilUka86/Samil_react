import React, { useState } from 'react'
import dog from '../assets/dog.png'
import dog1 from '../assets/dog1.png'

export default function US4() {
    const img1 = dog;
    const img2 = dog1;
    const [pic , setPic] = useState(img1)
    const hs = () => {
        setPic(pic === img1 ? img2 : img1)
    }
  return (
    <div>
      <img
        src={pic}
      />
      <br></br>
      <button onClick={hs}>Switch Image</button>
    </div>
  );
}
