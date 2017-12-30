import React from 'react';
import logo from '../assets/logo.svg';
import {Button} from '../components/button';
import './style.css'

export const Header = () => <header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <Button title='Создать встречу'/>
</header>
