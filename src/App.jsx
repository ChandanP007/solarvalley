import React from 'react'
import '../static/stylesheets/App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from '../static/pages/Home'

function App() {

  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route exact path="/" Component={Home} />
          
          
        </Routes>
      </div>
    </Router>
  )
}

export default App
