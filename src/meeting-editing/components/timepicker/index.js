import React from 'react'
import './style.css'

export const Timepicker = () => <div className='time'>

    <div className='time-input-date'>
      <div className='editing-input-title hidden-mobile'> Дата </div>
      <div className='editing-input-title visible-mobile'> Дата и Время </div>
      <input className='editing-input' value='14 декабря, 2017' />
    </div>

    <div className='time-input-time'>
      <div className='editing-input-title hidden-mobile'> Начало </div>
      <input className='editing-input' value='16:00' />
    </div>

    <div className='time-dash'>
      <div className='editing-input-title hidden-mobile'> &nbsp; </div>
      <span>  —  </span>
     </div>

    <div className='time-input-time'>
      <div className='editing-input-title hidden-mobile'> Конец </div>
      <input className='editing-input' value='16:30' />
    </div>

  </div>
