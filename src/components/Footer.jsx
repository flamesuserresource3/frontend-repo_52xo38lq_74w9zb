import { Mail, Phone, MapPin, Shield } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="size-9 grid place-content-center rounded-md bg-blue-600 text-white">
                <Shield className="size-5" />
              </div>
              <span className="font-semibold text-gray-900 text-lg">RiteFin</span>
            </div>
            <p className="mt-4 text-sm text-gray-600 max-w-md">
              A modern finance platform to issue cards, move money, and manage risk with bank-grade security.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a className="hover:text-gray-900" href="#why">About</a></li>
              <li><a className="hover:text-gray-900" href="#pricing">Pricing</a></li>
              <li><a className="hover:text-gray-900" href="#solutions">Solutions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2"><Mail className="size-4" /> hello@ritefin.dev</li>
              <li className="flex items-center gap-2"><Phone className="size-4" /> +1 (555) 123-4567</li>
              <li className="flex items-center gap-2"><MapPin className="size-4" /> Remote-first • Global</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} RiteFin. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a className="hover:text-gray-700" href="#">Privacy</a>
            <span>•</span>
            <a className="hover:text-gray-700" href="#">Terms</a>
            <span>•</span>
            <a className="hover:text-gray-700" href="#">Security</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
