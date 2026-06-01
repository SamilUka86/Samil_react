import {useContext} from 'react'
import {C1} from'./Comp1.jsx'
import {Fname} from './Comp2.jsx'

export default function Comp3(){
    const mycss=useContext(C1)
    const name=useContext(Fname)
    return(
        <>
            <h1 style={mycss}>
                Welcome {name}
            </h1>
        </>
    )
}
