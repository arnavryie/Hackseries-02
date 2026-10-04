import React, { useEffect } from 'react'
import { BrowserRouter, Outlet, Routes, Route, useLocation } from 'react-router-dom'

import Header from './Components/Header'
import Footer from './Components/Footer'
import HackerTerminal from './Components/HackerTerminal'
import Hero from './Sections/Hero'
import Why from './Sections/Why'
import CurvedTimeline from './Components/CurvedTimeline'
import Impact from './Sections/Impact'
import RoadmapsGrid from './Sections/RoadmapsGrid'

import RoadmapWebDev from './Pages/RoadmapWebDev'
import RoadmapAIML from './Pages/RoadmapAIML'
import RoadmapDSA from './Pages/RoadmapDSA'
import RoadmapProgramming from './Pages/RoadmapProgramming'
import RoadmapCloud from './Pages/RoadmapCloud'

import Gallery from './Pages/Gallery'
import ContactUs from './Pages/ContactUs'

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Home() {
  return (
    <>
      <Hero />
      <Why />
      <CurvedTimeline />
      <Impact />
      <RoadmapsGrid />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="relative w-full bg-[#05020c] overflow-x-hidden min-h-screen">
        <Header />
        <main className="relative z-10 w-full bg-[#05020c] shadow-[0_50px_50px_rgba(0,0,0,0.5)] mb-[60vh] md:mb-[65vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/roadmaps" element={<Outlet />}>
              <Route path="webdev" element={<RoadmapWebDev />} />
              <Route path="aiml" element={<RoadmapAIML />} />
              <Route path="cloud" element={<RoadmapCloud />} />
              <Route path="programming" element={<RoadmapProgramming />} />
              <Route path="dsa" element={<RoadmapDSA />} />
            </Route>
          </Routes>
        </main>
        <Footer />
        {/* Global Hacker Terminal HUD & Sound System */}
        <HackerTerminal />
      </div>
    </BrowserRouter>
  )
}

export default App