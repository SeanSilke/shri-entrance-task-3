import React from 'react'
import './style.css'

export const RoomSelect = () =>     <div>
      <div className='editing-rooms-title'>Ваша переговорка</div>
      <div className='editing-room-selected'>
        <div className='editing-room-cancelButton'> </div>
        <span>16:00—16:30</span>
        <span> Готем · 4 этаж </span>
      </div>
    </div>

export const RoomRecommended = () =>     <div>
      <div className='editing-rooms-title'>Рекомендованные переговорки</div>
      <div className='editing-room-recommended'>
        <span>16:00—16:30</span>
        <span> Готем · 4 этаж </span>
      </div>

      <div className='editing-room-recommended'>
        <span>16:00—16:30</span>
        <span> Готем · 4 этаж </span>
      </div>

      <div className='editing-room-recommended'>
        <span>16:00—16:30</span>
        <span> Готем · 4 этаж </span>
      </div>
    </div>
