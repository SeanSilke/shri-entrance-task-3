import React from 'react'
import './style.css'
import {Room} from './room'
import {floors} from '../../data'

const Flor = ({id,rooms}) => <div> <div className='list-floor'> {id} ЭТАЖ </div>
  {rooms && rooms.map(room => <Room key={room.id} {...room}/>)}
</div>

export const List = () => {

  return <div className='diagram-list'>
    {Object.keys(floors).sort().map(
      (id)=> <Flor key={id} id={id} rooms={floors[id]}/>
    )}
  </div>
}
