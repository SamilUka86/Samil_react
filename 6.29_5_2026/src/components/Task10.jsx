import React, { use, useState } from 'react'

export default function Task10() {
    const [pass,checkPass] = useState({
        'email' : '',
        'password' : '',
        'confirmPass' : ''
    })
    // const [ans,setAns] = useState({})

    const hc = (e) => {
        const{name , value} = e.target
        checkPass({...pass,[name] : value})
    }

    const hs = (e) => {
        e.preventDefault()
        const passr = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        const emailr = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!passr.test(pass.password)) {
            alert(
              "Password Must contain at least 8 characters and must contain at least 1 uppercase, 1 lowercase and 1 digit",
            );
        } else if(!emailr.test(pass.email)) {
            alert("Email Must have digits and 1 capital letters !")
        } else if(pass.password !== pass.confirmPass) {
            alert('Password And Confirm Password must be same')
        } else {
            alert('Registered Successfully !! 😁')
        }
        // setAns(pass)
    }
  return (
    <div>
      <form action="" onSubmit={hs}>
        <label htmlFor="email">Email :</label>
        <input type="email" name='email' onChange={hc}/>
        <br />
        <label htmlFor="pass">Password :</label>
        <input type="password" name='password' onChange={hc}/>
        <br />
        <label htmlFor="confirmPass">Confirm Password :</label>
        <input type="password" name='confirmPass' onChange={hc}/>
        <br />
        <input type="submit" />
      </form>
      {/* <h1>
        {ans.map((i) => {
            <div key={i.email}>
                <p>{i.email}</p>
                <br />
                <p>{i.password}</p>
                <br />
                <p>{i.confirmPass}</p>
            </div>
        })}
      </h1> */}
    </div>
  )
}
