import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Skill from './components/Skill/Skill'
import About from './components/About/About'
import Project from './components/Project/Project'
import Contact from './components/Contact/Contact'
import Layout from './components/Layout/Layout'
import Resume from './components/Resume/Resume'


export default function App() {
  
  return(
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
        <Route path='/skill' element={<Skill />}/>
            <Route path='/about' element={<About />} />
            <Route path='/project' element={<Project />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/resume' element={<Resume />} />
          
        </Route>
      </Routes>
   </div>
  
   
  
  )
}
