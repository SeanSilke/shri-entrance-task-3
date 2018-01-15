import React, {Fragment} from 'react'
import {Header} from '../components/header'
import './style.css'
import './input.css'
import {Timepicker} from './components/timepicker'
import {MembersSelect} from './components/members-select'
import {RoomSelect , RoomRecommended} from './components/room-select'
import {TitleInput} from './components/title-input'
import {Button} from './components/button'


export const Editing = () => <Fragment>
  <Header key="Header" />
  <div className="editing-main">

    <div className='row'>
      <div className='editing-header-title'> Новая встреча </div>
      <div className="exit-button"> </div>
    </div>

    <div className='row'>
      <TitleInput/>
      <Timepicker/>
    </div>

    <div className='row'>
      <MembersSelect/>
      <RoomSelect/>
      {/* <RoomRecommended/> */}
    </div>

  </div>

  <div className="editing-bottom">
    <Button title='Отмена'/>
    <Button title='Создать встречу'/>
  </div>
</Fragment>
