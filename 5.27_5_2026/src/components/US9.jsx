import React, { useState } from 'react'

export default function US9() {
    // const [fname,setFname] = useState("")
    // const [lname,setLname] = useState("")
    // const hc = (e) => {
    //     setFname(e.target.value)
    // }
    // const hc1 = (e) => {
    //     setLname(e.target.value)
    // }
//   return (
//     <div>
//       <input type="text" name='fname' value={fname} onChange={hc}/>
//       <br />
//       <input type="text" name='lname' value={lname} onChange={hc1}/>
//       <br />
//       <h2>{fname}</h2>
//       <br />
//       <h2>{lname}</h2>
//     </div>
//   )

    // const [data,setData] = useState({})
    // const hc = (e) => {
    //     e.preventDefault()
    //     const {name,value} = e.target
    //     setData({...data,[name] : value})
    //     // alert((e.target.elements.fname.value)+':'+(e.target.elements.lname.value))

    // }

    const [name,setData] = useState({})
    const hc = (e) => {
        e.preventDefault()
        alert(`
            First Name : ${name.fname}
            Last Name : ${name.lname}
            Email : ${name.email}
            Password : ${name.password}
            Message : ${name.msg}
            Gender : ${name.gender}
            City : ${name.city}
        `)
    }
    // const [name,setn] = useState('')
    // const hc = (e) => {
    //     e.preventDefault()
    //     // setn(e.target.value)
    //     alert(`Welcome ${name}`)
    // }

    return (
      <>
        <form action="" onSubmit={hc}>
          <label htmlFor="fname">Enter Your First Name : </label>
          <input
            type="text"
            name="fname"
            placeholder="Enter Your Name"
            onChange={(e) => setData({ ...name, fname: e.target.value })}
          />
          <br />
          <label htmlFor="lname">Enter Your Last Name : </label>
          <input
            type="text"
            name="lname"
            placeholder="Enter Your Last Name"
            onChange={(e) => setData({ ...name, lname: e.target.value })}
          />
          <br />
          <label htmlFor="email">Enter Your Email : </label>
          <input
            type="email"
            name="email"
            onChange={(e) => setData({ ...name, email: e.target.value })}
          />
          <br />
          <label htmlFor="password">Enter You Password : </label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            onChange={(e) => setData({ ...name, password: e.target.value })}
          />
          <br />
          <br />
          <label htmlFor="Message">Enter Message : </label>
          <textarea
            name="msg"
            onChange={(e) => setData({ ...name, msg: e.target.value })}
          ></textarea>
          <br />
          <label htmlFor="gender">Gender : </label>
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={(e) => setData({ ...name, gender: e.target.value })}
          />
          Male
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={(e) => setData({ ...name, gender: e.target.value })}
          />{" "}
          Female
          <br />
          <label htmlFor="City">Enter City : </label>
          <select
            name="city"
            id="city"
            defaultValue=""
            onChange={(e) => setData({ ...name, city: e.target.value })}
          >
            <option value="" disabled>
              --Select City--
            </option>
            <option value="ahmedabad">Ahmedabad</option>
            <option value="baroda">Baroda</option>
            <option value="surat">Surat</option>
            <option value="rajkot">Rajkot</option>
            <option value="bhavnagar"   >Bhavnagar</option>
          </select>
          <br />
          <br />
          <input type="submit" />
          {/* <h1>{JSON.stringify(fname)}</h1>
          <br />
          <h1>{JSON.stringify(lname)}</h1>
          {/* <input type="text" name='lname' onChange={(e) => setn(e.target.value)}/>
          <br />
          <input type="submit" />
          <h1>User Name : {name}</h1> */}
        </form>
      </>
    );
}
