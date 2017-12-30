import React from 'react'
import range from 'lodash/range'

console.log('range',range)
console.log(range(8,25))

export const Timeline = () => <div className='App-timeline'>
  {range(8,25).map(id => <div className='App-timeline-time' key={id}>{id} </div>)}
</div>
