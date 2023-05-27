import React, { Fragment } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import About from './About/About'
import Projects from './Projects/Projects'
import Skills from './Skills/Skills'
import Publications from './Publications/Publications'
import Contact from './Contact/Contact'
import './App.css'
import NavBar from './Navbar/NavBar'
import GoHome from './GoHome/GoHome'

const App = () => {
  return (
    <Fragment>
      <HashRouter>
        <NavBar/>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/projects" exact element={<Projects />} />
          <Route path="/skills" exact element={<Skills />} />
          <Route path="/publications" exact element={<Publications />} />
          <Route path="/contact" exact element={<Contact />} />
        </Routes>
        <GoHome/>
      </HashRouter>
    </Fragment>
  )
}

export default App
