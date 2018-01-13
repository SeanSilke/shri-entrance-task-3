import React from 'react';
import {schedule} from '../../../data';
import {getFreeSlots} from './helpers'
import  {DIAGRAM_LENGTH} from '../../../data/constants'
import './style.css'

const Meeting = ({dateStart,dateEnd}) => <div
  style={{
    left:`${dateStart}px`,
    width:`${(dateEnd-dateStart)*100/DIAGRAM_LENGTH}%`
  }}
  className='timeLine-slot-occupied'
/>

const FreeSlots = ({dateStart,dateEnd}) => <div
   style={{
     left:`${dateStart}px`,
      width:`${dateEnd-dateStart}px`
    }}
   className='timeLine-slot-free'
 />


export const Timeline = () =>  <div className='timeline'>
      {schedule.map((m, id)=><Meeting key={id} {...m}/>)}
      {getFreeSlots(schedule).map((m, id)=><FreeSlots key={id} {...m}/>)}
    </div>
