import React from 'react'
import Navbar from './components/Navbar'
import CategoryNews from './pages/CategoryNews'
import Title from './components/Title'


function App(){
  return (
    <>
    

    <Navbar/>
    
<Title/>
<div className='mx-18 font-bold  '>India News</div>
<CategoryNews/>
<div className='mx-18 font-bold  '>World News</div>
<CategoryNews/> 
<div className='mx-18 font-bold  '>Buisness News</div>
<CategoryNews/>
<div className='mx-18 font-bold  '>Sports News</div>
<CategoryNews/>
</>
  )
}

export default App