import {useState} from 'react'
import india from './assets/india.png'
import us from './assets/us.png'

function Us2(){
    const[pic,setPic]=useState(false)
    const hs=()=>{
        let a=(pic===india ? us :india)
        setPic(a)
    }
    return(
        <>
        <img src={pic} height="200px" width="200px" />
        <button  onClick={hs}>Change pic</button>
        </>
    )
}
export default Us2