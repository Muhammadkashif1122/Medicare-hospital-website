import { useState } from 'react'
import { Link } from 'react-router'
import navLinks from '../Data/HeaderData'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const sidebarLinks = [
    navLinks[0],
    { name: 'My appointments', path: '/my-appointments' },
    ...navLinks.slice(1),
    { name: 'Book an appointment', path: '/appointment' },
  ]

  const actionLinks = [
    { name: 'Appointment', path: '/appointment', style: 'bg-white text-sky-900 hover:bg-sky-100' },
    { name: 'Register', path: '/register', style: 'border border-white/20 bg-sky-900/40 text-white hover:border-white/40 hover:bg-sky-900/60' },
    { name: 'Login', path: '/login', style: 'bg-sky-500 text-white hover:bg-sky-400' },
  ]

  return (
    <div>
      <header className="sticky top-0 z-40 border-b border-sky-100 bg-gradient-to-r from-sky-950 via-sky-900 to-sky-800 text-white shadow-lg shadow-sky-900/20 backdrop-blur-sm">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <Link to="/" className="shrink-0 text-xl font-bold text-white sm:text-2xl">
            MediCare<span className="text-sky-200">+</span>
          </Link>

          <div className="hidden flex-1 items-center justify-center lg:flex">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm font-medium text-sky-100 transition duration-300 hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden items-center gap-2 md:flex">
            {actionLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`inline-flex items-center justify-center rounded-lg px-3 py-2 text-sm font-semibold transition duration-300 ${link.style}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <button
            type="button"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            aria-controls="site-navigation-sidebar"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-slate-900 px-3 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700 md:hidden"
          >
            <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {isMenuOpen ? <path d="m6 6 12 12M18 6 6 18" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
            Menu
          </button>
        </nav>
      </header>
      {isMenuOpen && (
        <div className="fixed inset-0 z-50">
          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={() => setIsMenuOpen(false)}
            className="absolute inset-0 h-full w-full bg-slate-950/50"
          />
          <aside
            id="site-navigation-sidebar"
            aria-label="Site navigation"
            className="absolute inset-y-0 left-0 flex w-80 max-w-[85vw] flex-col bg-white p-6 shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-slate-200 pb-5">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="text-xl font-bold text-sky-700"
              >
                MediCare<span className="text-slate-800">+</span>
              </Link>
              <button
                type="button"
                aria-label="Close navigation menu"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
              >
                <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="m6 6 12 12M18 6 6 18" />
                </svg>
              </button>
            </div>
            <nav aria-label="Main menu" className="mt-6">
              <ul className="space-y-2">
                {sidebarLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      onClick={() => setIsMenuOpen(false)}
                      className="block rounded-xl px-4 py-3 text-base font-medium text-slate-700 transition hover:bg-sky-50 hover:text-sky-800"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        </div>
      )}
    </div>
  )
}

export default Header
