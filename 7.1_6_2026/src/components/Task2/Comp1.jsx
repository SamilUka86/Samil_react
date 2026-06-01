import {createContext} from 'react'
import Comp2 from './Comp2'

const C1=createContext()
const mycss={backgroundColor:'tomato',color:'green',size:'2px'}
export default function Comp1() {
    return (
        <>
            <C1.Provider value={mycss}>
                <Comp2/>
            </C1.Provider>

        </>
    )
}
export{C1}