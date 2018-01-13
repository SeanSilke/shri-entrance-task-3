import React from 'react'
import './style.css'
import {HOURS_RANGE} from '../../data/constants'

export const Timeline = () => <div className='App-timeline'>
  {HOURS_RANGE.map(id =>
    <div className='App-timeline-time' key={id}>
      {id}
      <div className='App-timeline-time-line'> </div>
    </div>)}
</div>
