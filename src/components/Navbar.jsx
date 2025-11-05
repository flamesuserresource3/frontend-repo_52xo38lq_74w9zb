import { useState } from 'react'
import { Menu, X, Shield, Phone } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/70 border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="size-9 grid place-content-center rounded-md bg-blue-600 text-white">
              <Shield className="size-5" />
            </div>
            <span className="font-semibold text-gray-900 text-lg">RiteFin</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#solutions" className="text-gray-700 hover:text-blue-600 transition">Solutions</a>
            <a href="#why" className="text-gray-700 hover:text-blue-600 transition">Why RiteFin</a>
            <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition">Pricing</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-blue-700">
              <Phone className="size-4" />
              Talk to sales
            </a>
            <a href="#get-started" className="inline-flex items-center text-sm font-semibold px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition">
              Get Started
            </a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-4 space-y-2">
            <a onClick={() => setOpen(false)} href="#solutions" className="block px-3 py-2 rounded-md text-gray-800 hover:bg-gray-100">Solutions</a>
            <a onClick={() => setOpen(false)} href="#why" className="block px-3 py-2 rounded-md text-gray-800 hover:bg-gray-100">Why RiteFin</a>
            <a onClick={() => setOpen(false)} href="#pricing" className="block px-3 py-2 rounded-md text-gray-800 hover:bg-gray-100">Pricing</a>
            <a onClick={() => setOpen(false)} href="#contact" className="block px-3 py-2 rounded-md text-gray-800 hover:bg-gray-100">Contact</a>
            <a onClick={() => setOpen(false)} href="#get-started" className="block px-3 py-2 rounded-md bg-blue-600 text-white text-center font-semibold">Get Started</a>
          </div>
        </div>
      )}
    </header>
  )
}
