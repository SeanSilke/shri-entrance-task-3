import React, {PureComponent} from 'react'
import './style.css'
import Room from '../room'
import debounce from 'lodash/debounce'
import {getHorizontalShift} from '../../../helpers'

export class Flor extends PureComponent {

  ref = null;

  handleScroll = debounce( () => {
    const x = getHorizontalShift();
    this.ref.style.transform = `translateX(+${x}px)` ;
  }, 100)

  componentDidMount(){
    window.addEventListener("scroll", this.handleScroll)
  }

  componentWillUnmount(){
    window.removeEventListener("scroll", this.handleScroll)
  }

  render(){
    const {id,rooms = []} = this.props;
    return  <div>
      <div className='list-floorName'>
        <div
          style={{display: 'inline-block'}}
          ref={(ref) => { this.ref = ref; }}
        >
          {id} ЭТАЖ
        </div>
      </div>
    { rooms.map(room => <Room key={room.id} {...room}/>)}
  </div>

  }
}
