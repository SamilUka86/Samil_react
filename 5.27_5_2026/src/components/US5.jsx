import React from 'react'
import { useState } from 'react'

export default function US5() {
  const [a,set_a] = useState('Show Value')
  const [b,set_b] = useState('')
  const sh = () => {
    if(a == 'Show Value') {
      set_a('Hide 🤦‍♂️')
      set_b('Welcome Student !')
    } else {
      set_a('Show Value')
      set_b('')
    }
  }
  return (
    <div>
        <button onClick={sh}>{a}</button>
        <h2>{b}</h2>
    </div>
  )
}
