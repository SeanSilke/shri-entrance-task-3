import React from 'react'
import './style.css'
import {HOURS_RANGE} from '../../data/constants'

export const Timeline = () => <div className='App-timeline'>
  <div className='App-timeline-currtime'>
      11:05
      <div className='App-timeline-currtime-line'>

      </div>
  </div>
  {HOURS_RANGE.map(id =>
    <div className='App-timeline-hour' key={id}>
      {id}
      <div className='App-timeline-hour-line'> </div>
    </div>)}
</div>
