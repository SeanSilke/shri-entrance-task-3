import React from 'react'
import range from 'lodash/range'

export const Timeline = () => <div className='App-timeline'>
  {range(8,25).map(id =>
    <div className='App-timeline-time' key={id}>
      {id}
      <div className='App-timeline-time-line'> </div>
    </div>)}
</div>
