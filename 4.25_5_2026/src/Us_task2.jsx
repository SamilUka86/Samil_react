import {useState} from 'react'
function Us_task2() {
const[btnTxt,setBtnText]= useState("show")
const[txt,setTxt]= useState("")
function showhide() {
    if(btnTxt==="show")
    {
        setBtnText("hide");
        setTxt("Hello");
    }
    else{
        setBtnText("show");
        setTxt("");
    } }
    return (
    <div>
        <button onClick = {showhide}> {btnTxt}</button>
        {txt}
    </div>
) }
export default Us_task2;