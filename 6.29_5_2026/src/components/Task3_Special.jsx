import React, { useState } from 'react'
import samsung from '../assets/samsung.png'
import vivo from '../assets/vivo.png'
import oneplus from '../assets/oneplus.png'

export default function Task3_Special() {
  const images = [samsung,vivo,oneplus]
  const [allimg,setAllimg] = useState(images)

  const hc = (type) => {
    if (type === "All") {
      setAllimg(images);
    } else if (type === "samsung") {
      // setAllimg([images[0]]); //index wise
      setAllimg([samsung]);
    } else if (type === "vivo") {
      setAllimg([vivo]);
    } else if (type === "oneplus") {
      setAllimg([oneplus]);
    }
  };

  return (
    <div>
      <button onClick={() => hc('All')}>All</button>
      <br />
      <button onClick={() => hc('samsung')}>Samsung</button>
      <button onClick={() => hc('vivo')}>Vivo</button>
      <button onClick={() => hc('oneplus')}>One Plus</button>
      <br />
      <div>
        {allimg.map((imgSrc, index) => (
          <img
            key={index}
            src={imgSrc}
            alt="brand logo"
            style={{ width: "150px", margin: "10px" }}
          />
        ))}
      </div>
    </div>
  );
}
