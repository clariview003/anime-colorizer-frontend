import { useEffect, useMemo, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Workspace from './pages/Workspace'
import Gallery from './pages/Gallery'
import About from './pages/About'

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('inkuai-theme') || 'dark')

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') root.classList.add('dark')
    else root.classList.remove('dark')
    localStorage.setItem('inkuai-theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))

  const routeAnimation = useMemo(
    () => ({
      initial: { opacity: 0, y: 12 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -12 },
      transition: { duration: 0.25, ease: 'easeOut' },
    }),
    [],
  )

  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-[#f4f6fb] dark:bg-[#0f0f11]">
      <div className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(circle_at_15%_10%,rgba(120,119,198,0.18),transparent_30%),radial-gradient(circle_at_85%_90%,rgba(14,165,233,0.12),transparent_30%)] dark:bg-[radial-gradient(circle_at_15%_10%,rgba(139,92,246,0.22),transparent_30%),radial-gradient(circle_at_85%_90%,rgba(56,189,248,0.14),transparent_32%)]" />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="relative z-10 flex-grow px-4 pb-14 pt-24 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          <Routes>
            <Route
              path="/"
              element={
                <motion.div key="home" {...routeAnimation}>
                  <Home />
                </motion.div>
              }
            />
            <Route
              path="/workspace"
              element={
                <motion.div key="workspace" {...routeAnimation}>
                  <Workspace />
                </motion.div>
              }
            />
            <Route
              path="/gallery"
              element={
                <motion.div key="gallery" {...routeAnimation}>
                  <Gallery />
                </motion.div>
              }
            />
            <Route
              path="/about"
              element={
                <motion.div key="about" {...routeAnimation}>
                  <About />
                </motion.div>
              }
            />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}

export default App
