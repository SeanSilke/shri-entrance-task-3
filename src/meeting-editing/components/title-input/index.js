import React from 'react'

export const TitleInput = () => <div className='input'>
    <div className='editing-input-title'> Тема </div>
    <input className='editing-input' value='О чём будете говорить?' onChange={()=>console.log('hi')} />
  </div>
