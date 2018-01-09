import React from 'react'
import {Header} from '../components/header'
import './style.css'


export const Editing = () => <div>
  <Header key="Header" />
  <div className="editing-main">
    <div className='row'>
      <div className='editing-header-title'>  Новая встреча </div>
      <div className="exit-button"> </div>
    </div>

    <div className='row'>
      <div className='input'>
        <div className='input-title'> Тема </div>
        <input className='some-input' value='О чём будете говорить?' onChange={()=>console.log('hi')} />
      </div>

      <div className='time'>
        <div>
          <div className='input-title'> Дата </div>
          <input className='some-input time-input-date' value='14 декабря, 2017' />
        </div>

        <div>
          <div className='input-title'>
            Начало
          </div>
          <input className='some-input time-input-time' value='16:00' />
        </div>
        <div className='time-dash'>
          —
        </div>
        <div>
          <div className='input-title'> Конец </div>
          <input className='some-input time-input-time' value='16:30' />
        </div>
      </div>

    </div>

    <div className='row'>
    <div className='multi-select'>
      <div className='input-title'>Участники</div>
      <div className='some-input'></div>
      {/* <div className="mylti-select-main"> </div>
      <div className="options">
        <div>Mr. White</div>
        <div>Mr. Orange</div>
        <div>Mr. Blonde</div>
        <div>Mr. Pink</div>
        <div>Mr. Brown</div>
        <div>Mr. Blue</div>
      </div> */}
    </div>

    <div>
      <div className='input-title'>Ваша переговорка</div>
      <div className='some-input'>
        16:00—16:30
        Готем · 4 этаж
      </div>
    </div>
  </div>

  </div>
  <div className="editing-bottom">

  </div>
</div>
