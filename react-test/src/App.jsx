import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Bulb from  './componants/Bulb';
import Temp from './componants/Temp';
import './App.css'

function App() {
  

  return (
    <Router>
      <nav className="p-4 bg-gray-100 flex space-x-4">
        <Link to="/bulb">Bulb</Link>
        <Link to="/temp">Temp</Link>
      </nav>

      <Routes>
        <Route path="/bulb" element={<Bulb />} />
        <Route path="/temp" element={<Temp />} />
      </Routes>
    </Router>
  )
}

export default App
