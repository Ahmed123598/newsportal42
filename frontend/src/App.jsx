import React from 'react'
import Navbar from './components/Navbar'
import LatestIndia from './components/LatestIndia'
import LatestWorld from './components/LatestWorld'
import LatestBuisness from './components/LatestBuisness'
import LatestSports from './components/LatestSports'

function App() {
  return (
    <div><Navbar/>
    <LatestIndia/>
    <LatestWorld/>
    <LatestBuisness/>
    <LatestSports/>
    </div>
  )
}

export default App;