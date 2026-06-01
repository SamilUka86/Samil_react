import {createContext} from 'react'
import Comp3 from './Comp3'
const Fname=createContext()
export default function Comp2(){
    return(
        <>
        <Fname.Provider value={"student"}>
        <Comp3/>
        </Fname.Provider>
        </>
    )
}
export{Fname}