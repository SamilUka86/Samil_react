import {createContext} from 'react'
import Uc2 from './Uc2'

const N1=createContext()
const N2=createContext()
export default function Uc1() {
    return (
        <>
            <N1.Provider value={5}>
            <N2.Provider value={10}>
            <Uc2/>
            </N2.Provider>
            </N1.Provider>
        </>
    )
}
export{N1,N2}