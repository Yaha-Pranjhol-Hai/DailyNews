import './App.css';
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Switch,
  Route
  } from "react-router-dom";

const App = ()=> {
  const pageSize = 9;
  const apiKey=process.env.REACT_APP_NEWS_API

  const [progress, setProgress] = useState(0)

  return (
    <div>
      <Router>
      <NavBar/>
      <LoadingBar
        height={3}
        color='#f11946'
        progress={progress} 
      />
      <Switch>
        <Route exact path="/"><News key="general" setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="general"/></Route> 
        <Route exact path="/general"><News key="general" setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="general"/></Route> 
        <Route exact path="/business"><News key="business" setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="business"/></Route> 
        <Route exact path="/entertainment"><News key="entertainment" setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="entertainment"/></Route> 
        <Route exact path="/health"><News key="health" setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="health"/></Route> 
        <Route exact path="/science"><News key="science" setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="science"/></Route> 
        <Route exact path="/technology"><News key="technology" setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="technology"/></Route> 
      </Switch>
      </Router>
    </div>
  )
}

export default App;