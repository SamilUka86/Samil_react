import {createContext} from 'react'
import Uc2 from './Uc2'

const Fname=createContext()
const Lname=createContext()
export default function Uc1() {
    return (
        <>
            <Fname.Provider value={"Samil"}>
            <Lname.Provider value={"Uka"}>
            <Uc2/>
            </Lname.Provider>
            </Fname.Provider>
        </>
    )
}
export{Fname,Lname}