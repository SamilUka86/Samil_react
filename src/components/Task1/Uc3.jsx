import Uc4 from './Uc4'
import {createContext} from 'react'

const N3=createContext()
const css1={backgroundColor:"tomato"}

export default function Uc3(){
    return(
        <>
        <N3.Provider value={css1}>
            <Uc4/>
        </N3.Provider>
        </>
    )
}
export{N3}