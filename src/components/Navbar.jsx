import { Link, NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Workspace', path: '/workspace' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'About', path: '/about' },
]

function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? 'border-slate-200/70 bg-white/78 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-[#0f0f11]/88'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white">
          InkUAi
        </Link>

        <nav className="flex items-center gap-1 overflow-x-auto">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `group relative rounded-xl px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-slate-900 dark:text-white'
                    : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
                }`
              }
            >
              {item.name}
              <span className="absolute bottom-1 left-3 right-3 h-px origin-left scale-x-0 bg-current transition-transform duration-300 group-hover:scale-x-100" />
            </NavLink>
          ))}
        </nav>

        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleTheme}
          className="rounded-xl border border-slate-300/80 bg-white/80 px-3 py-2 text-sm text-slate-700 transition dark:border-white/15 dark:bg-white/5 dark:text-slate-200"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? 'Light' : 'Dark'}
        </motion.button>
      </div>
    </header>
  )
}

export default Navbar

