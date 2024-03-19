import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Resume from './pages/Resume/Resume'
import Work from './pages/Work/Work'
import Contact from './pages/Contact/Contact'
import { ThemeContext } from './Context/ThemeContext'
import { useEffect, useState } from 'react'

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
  )
  localStorage.setItem('theme', theme)

  function ToggleChangeMode() {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  useEffect(() => {
    setTheme(localStorage.getItem('theme')), []
  })
  return (
    <>
      <ThemeContext.Provider value={{ theme, ToggleChangeMode }}>
        <div className={theme}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/test-portfolio/resume" element={<Resume />} />
            <Route path="/test-portfolio/work" element={<Work />} />
            <Route path="/test-portfolio/contact" element={<Contact />} />
          </Routes>
        </div>
      </ThemeContext.Provider>
    </>
  )
}

export default App
