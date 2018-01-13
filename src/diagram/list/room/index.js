import React from 'react'
import {Timeline} from '../time-line'
import './style.css'

export const Room = ({title, capacity, id}) =>   {
  return <div className='meetingroom'>
    <div className='meetingroom-description'>
      <div className='meetingroom-name'>{title}</div>
      <div className='meetingroom-capacity'>{capacity}</div>
    </div>
      <Timeline/>
  </div>
}
