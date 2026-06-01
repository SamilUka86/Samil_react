import {useState} from 'react'
function Us1(){
    const[count,setCount]=useState(0)
    // const hs=()=>{
    //     setCount(count+1)
    // }
    const inc=()=>{
        if(count<10){
            setCount(count+1)
        }
    }
    const dec=()=>{
        if(count>0){
            setCount(count-1)
        }
    }
    const[style,setStyle]=useState("tomato")
    const hs=()=>{
        if(style=='tomato'){
            setStyle("cyan")
        }
        else{
            setStyle("tomato")
        }}
    return(
        <>
        <h1 id="cll">Use state count change</h1>
        <h1 id="cll1">User clicked {count}times</h1>
        <button id="bt1" onClick={inc}>Increment</button>
        <button id="bt2" onClick={dec}>Decrement</button>
        <h1 id="stt" style={{backgroundColor:style}}>Hello</h1>
        <button  onClick={hs}>Change color</button>
        </>
    )
}
export default Us1