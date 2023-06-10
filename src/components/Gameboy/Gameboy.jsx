import React from 'react'
import DisplayFrame from '../DisplayFrame/DisplayFrame'
import ControlWrap from '../ControlWrap/ControlWrap'
import StartSelect from '../StartSelect/StartSelect'

import './Gameboy.css'

const Gameboy = () => {
  return (
    <div className='gameboy-container'>
      <DisplayFrame />
      <ControlWrap />
      <StartSelect />
    </div>
  )
}

export default Gameboy
