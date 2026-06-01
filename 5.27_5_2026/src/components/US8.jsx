import React, { use, useState } from 'react'

export default function US8() {
    const[data,setData] = useState({brand : 'BMW',color : 'black',model:'M4',year : 2020})
    const hc = () => {
        if(data.brand === 'BMW') {
            setData({ brand: "Mustang", color: "yellow", model: "GT", year: 2018 });
        } else {
            setData({ brand: "BMW", color: "black", model: "M4", year: 2020 });
        }
    }
  return (
    <div>
      <button onClick={hc}>Change Data</button>
      <h3>
        My {data.brand}. It is a {data.color} {data.model} from {data.year}
      </h3>
    </div>
  );
}
