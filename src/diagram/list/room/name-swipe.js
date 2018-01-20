import React, {PureComponent} from 'react'
import debounce from 'lodash/debounce'
import {getHorizontalShift} from '../../../helpers'

export class NameSwipe extends PureComponent {

  ref = null;

  handleScroll = debounce( () => {
    const x = getHorizontalShift();

    if( x < 100){
      this.ref.classList.add('hidden')
     } else {
       this.ref.classList.remove('hidden')
     }
    this.ref.style.transform = `translateX(+${x}px)` ;
  }, 100)

  componentDidMount(){
    window.addEventListener("scroll", this.handleScroll)
  }

  componentWillUnmount(){
    window.removeEventListener("scroll", this.handleScroll)
  }

  render(){
    const {title} = this.props;
    return <div
      ref={(ref) => { this.ref = ref; }}
      className='meetingroom-name-swipe hidden'> {title}
    </div>
  }
}
