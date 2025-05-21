import React from 'react'
import LatestNews from './components/LatestNews'
import LatestIndia from './components/LatestIndia'
import LatestWorld from './components/LatestWorld'
import LatestSports from './components/LatestSports'
import LatestBusiness from './components/LatestBusiness'
import Title from './components/Title'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import TitleCard from './components/TitleCard'


const App = () => {
  return (
  <>
  <div>
  <Navbar/>
  <div>
    <LatestNews/>
  </div>

  <div className='mb-10 mt-10'>
    <TitleCard title="LATEST INDIA NEWS"/>
    <div>
      <LatestIndia/>
    </div>
  </div>

  <div className='mb-10'>
    <TitleCard title="LATEST WORLD NEWS"/>
    <div>
      <LatestWorld/>
    </div>
  </div>

  <div className='mb-10'>
    <TitleCard title="LATEST SPORTS NEWS"/>
    <div>
      <LatestSports/>
    </div>
  </div>
  <div className='mb-10'>
    <TitleCard title="LATEST BUSINESS NEWS"/>
    <div>
      <LatestBusiness/>
    </div>
  </div>
  <Footer/>
  </div>
  </>
  )
}

export default App