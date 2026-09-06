import { CodeXml, CodeXmlIcon, Github, Globe, Heart, Instagram, Linkedin, Twitter, Users } from 'lucide-react'
import React from 'react'
import 'remixicon/fonts/remixicon.css'
import MainPage from './pages/Main Page/MainPage'
import { Route, Routes } from 'react-router-dom'
import SecondPage from './pages/Scrollable/Second Page/SecondPage'
import Scrollable from './pages/Scrollable/Scrollable'
import useLenis from "./hooks/useLenis";
import './styles/starBg.css'

const App = () => {
  useLenis();
  return (
    <div >
      <div className='star-bg h-screen'>
        <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/main' element={<Scrollable/>} />
      </Routes>
      </div>
      
      
      
      
      
    </div>
  )
}

export default App
