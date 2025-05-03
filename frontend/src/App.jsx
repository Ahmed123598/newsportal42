import React from 'react'
import Navbar from './components/Navbar'
import CategoryNews from './pages/CategoryNews'
import Title from './components/Title'


function App(){
  return (
    <>
    

    <Navbar/>
    
<Title/>
<a href='/india'  className='mx-18 font-bold  '>India News</a>
<CategoryNews/>
<a href= '/world' className='mx-18 font-bold  '>World News</a>
<CategoryNews/> 
<a href='/business' className='mx-18 font-bold  '>Buisness News</a>
<CategoryNews/>
<a href='sports' className='mx-18 font-bold  '>Sports News</a>
<CategoryNews/>
</>
  )
}

export default App