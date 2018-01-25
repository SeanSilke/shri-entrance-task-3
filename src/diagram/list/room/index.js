import React, {PureComponent} from 'react'
import {Timeline} from '../time-line'
import {NameSwipe} from './name-swipe'
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import './style.css'

export class Room extends PureComponent {

  state = {
    isHovering: false
  }

  setHovering = ({isHovering}) => this.setState({isHovering})

  render(){
    const {title, capacity, id, data:{events}} = this.props;
    const {isHovering} = this.state

    if(events) {
      // NOTE: Получаем события для этой комнаты.
      events.filter(e=>e.room.id === id)
    }

    return <div className='meetingroom'>
      <div className='meetingroom-description'>
        <NameSwipe title={title}/>
        <div className={`meetingroom-name ${isHovering?'meetingroom-name-hover':''}`}>{title}</div>
        <div className='meetingroom-capacity'>{capacity} человека</div>
      </div>
        <Timeline setHovering={this.setHovering}/>
    </div>
  }
}

export default graphql(gql`
  query {
    events {
      id
      room {
        id
      }
    }
  }
`)(Room);
