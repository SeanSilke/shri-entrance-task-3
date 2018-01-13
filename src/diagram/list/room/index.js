import React, {PureComponent} from 'react'
import {Timeline} from '../time-line'
import './style.css'

export class Room extends PureComponent {

  state = {
    isHovering: false
  }

  setHovering = ({isHovering}) => this.setState({isHovering})

  render(){
    const {title, capacity} = this.props;
    const {isHovering} = this.state
    return <div className='meetingroom'>
      <div className='meetingroom-description'>
        <div className={`meetingroom-name ${isHovering?'meetingroom-name-hover':''}`}>{title}</div>
        <div className='meetingroom-capacity'>{capacity}</div>
      </div>
        <Timeline setHovering={this.setHovering}/>
    </div>
  }
}
