import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Resume from './pages/Resume/Resume'
import Work from './pages/Work/Work'
import Contact from './pages/Contact/Contact'
import { ThemeContext } from './Context/ThemeContext'
import { useEffect, useState } from 'react'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/contact',
      element: <Contact />,
    },
    {
      path: '/resume',
      element: <Resume />,
    },
    {
      path: '/work',
      element: <Work />,
    },
  ],
  { basename: '/test-portfolio/' }
)

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
          <RouterProvider router={router} />
        </div>
      </ThemeContext.Provider>
    </>
  )
}

export default App
