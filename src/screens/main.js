import React from 'react'
import {Header} from '../components/header'
import {Button} from '../components/button';
import {TimePanel} from '../components/time-panel'
import {Diagram} from '../diagram'
import {Tooltip} from '../components/tooltip'

export const MainScreen = () => [
  <Header key="Header" >
    <Button title='Создать встречу'/>
  </Header>,
  <TimePanel key="TimePanel"/>,
  <Diagram key="Diagram"/>,
  <Tooltip key="Tooltip"/>
];
