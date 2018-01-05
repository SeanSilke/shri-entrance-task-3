import React from 'react'
import {List} from './list'
import {Header} from '../components/header'
import {Button} from '../components/button';
import {TimePanel} from '../components/time-panel'
import {Tooltip} from '../components/tooltip'


export const Diagram = () => [
  <Header key="Header" >
    <Button title='Создать встречу'/>
  </Header>,
  <TimePanel key="TimePanel"/>,
  <List key="List"/>,
  <Tooltip key="Tooltip"/>
]
