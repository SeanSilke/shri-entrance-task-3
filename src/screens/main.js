import React from 'react'
import {Header} from '../header'
import {TimePanel} from '../time-panel'
import {Diagram} from '../diagram'
import {Tooltip} from '../components/tooltip'

export const MainScreen = () => [
  <Header key="Header" />,
  <TimePanel key="TimePanel"/>,
  <Diagram key="Diagram"/>,
  <Tooltip key="Tooltip"/>
];
