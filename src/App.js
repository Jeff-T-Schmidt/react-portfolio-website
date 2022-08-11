import { Route, Routes } from 'react-router-dom'
import React, {useEffect } from 'react';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Layout from './components/Layout'
import Project from './components/Project'
import './App.scss'
import ReactGA from 'react-ga';
const TRACKING_ID = "G-PNHVXJRZN8";
ReactGA.initialize(TRACKING_ID);

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Project />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
