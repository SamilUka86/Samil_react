import {useContext} from 'react'
import {Fname,Lname} from './Uc1'
export default function Uc3() {
    const first=useContext(Fname)
    const last=useContext(Lname)
    return (
        <>
            <h1>Given name by King is:{first}{last}</h1>
        </>
    )
}
