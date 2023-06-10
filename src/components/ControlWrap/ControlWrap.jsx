import React from 'react'
import BAWrap from '../BAWrap/BAWrap'
import Joystick from '../Joystick/Joystick'

import './ControlWrap.css'

const ControlWrap = () => {
  return (
    <div className='controls-container'>
      <Joystick />
      <BAWrap />
    </div>
  )
}

export default ControlWrap
