import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const NavLink = ({ href, children, onClick }) => (
  <a href={href} onClick={onClick} className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
    {children}
  </a>
)

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const toggle = () => setOpen(!open)
  const close = () => setOpen(false)

  const links = [
    { href: '#services', label: 'Services' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/70 border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center space-x-2" onClick={close}>
            <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-indigo-600 to-violet-500" />
            <span className="text-lg font-semibold tracking-tight">Sanggar Acara</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <NavLink key={l.href} href={l.href}>{l.label}</NavLink>
            ))}
            <a href="#contact" className="inline-flex items-center rounded-full bg-gray-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/90 transition">
              Get a Quote
            </a>
          </nav>

          <button className="md:hidden p-2 rounded-md hover:bg-gray-100" onClick={toggle} aria-label="Toggle menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-4">
              {links.map((l) => (
                <NavLink key={l.href} href={l.href} onClick={close}>{l.label}</NavLink>
              ))}
              <a href="#contact" onClick={close} className="inline-flex items-center justify-center rounded-full bg-gray-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/90 transition">
                Get a Quote
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
