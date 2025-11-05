import { ArrowRight, CheckCircle2 } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative pt-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
              Modern Finance Platform
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
              Banking-grade infrastructure for ambitious businesses
            </h1>
            <p className="mt-5 text-lg text-gray-600 max-w-xl">
              Launch cards, manage payments, and automate compliance with one secure platform.
              Built for startups and enterprises who need speed, control, and trust.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#get-started" className="inline-flex items-center justify-center px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-md font-semibold shadow-sm">
                Get Started
                <ArrowRight className="ml-2 size-4" />
              </a>
              <a href="#solutions" className="inline-flex items-center justify-center px-6 py-3 text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-md font-semibold">
                Explore Solutions
              </a>
            </div>

            <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm text-gray-700">
              {[
                'PCI-DSS Level 1 compliant',
                'Real-time fraud monitoring',
                'Global issuing & payouts',
                'Developer-first APIs',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="text-green-600 size-5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl border border-gray-200 bg-white shadow-xl overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="size-3 rounded-full bg-red-400" />
                  <div className="size-3 rounded-full bg-yellow-400" />
                  <div className="size-3 rounded-full bg-green-400" />
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="rounded-xl bg-blue-50 p-4">
                    <p className="text-xs text-gray-500">Monthly Volume</p>
                    <p className="mt-1 text-2xl font-bold text-blue-700">$2.4M</p>
                  </div>
                  <div className="rounded-xl bg-emerald-50 p-4">
                    <p className="text-xs text-gray-500">Approval Rate</p>
                    <p className="mt-1 text-2xl font-bold text-emerald-700">98.3%</p>
                  </div>
                  <div className="rounded-xl bg-indigo-50 p-4">
                    <p className="text-xs text-gray-500">Active Cards</p>
                    <p className="mt-1 text-2xl font-bold text-indigo-700">12,948</p>
                  </div>
                  <div className="rounded-xl bg-amber-50 p-4">
                    <p className="text-xs text-gray-500">Chargebacks</p>
                    <p className="mt-1 text-2xl font-bold text-amber-700">0.12%</p>
                  </div>
                </div>

                <div className="mt-6 rounded-xl border border-dashed border-gray-300 p-4">
                  <p className="text-xs font-mono text-gray-500">POST /v1/cards</p>
                  <pre className="mt-2 text-sm overflow-auto text-gray-800">
{`curl -X POST https://api.ritefin.dev/v1/cards \\
  -H "Authorization: Bearer <token>" \\
  -d '{ "limit": 5000, "currency": "USD" }'`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 opacity-70">
          {['Acme Bank', 'NorthOne', 'ZenPay', 'FlowCard', 'Linea', 'NovaPay'].map((brand) => (
            <div key={brand} className="text-center text-gray-500 text-sm">{brand}</div>
          ))}
        </div>
      </div>
    </section>
  )
}
