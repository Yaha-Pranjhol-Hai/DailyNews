import './App.css';
import React from 'react'
import NavBar from './components/NavBar';
import News from './components/News';

export default function App() {
  return (
    <div>
      <NavBar/>
      <News pageSize={6} country="in" category="sports"/>
    </div>
  )
}
