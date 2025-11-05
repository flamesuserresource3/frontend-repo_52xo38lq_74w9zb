import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import WhyUs from './components/WhyUs'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <WhyUs />
        {/* Simple pricing teaser to mirror a fintech landing flow */}
        <section id="pricing" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold">Simple, transparent pricing</h2>
              <p className="mt-3 text-gray-600">Start free in sandbox. Scale on usage-based pricing with volume discounts.</p>
            </div>

            <div className="mt-10 grid md:grid-cols-3 gap-6">
              {[
                { name: 'Starter', price: 'Free', perks: ['Sandbox access', 'Test cards', 'Developer tools'] },
                { name: 'Growth', price: '$499/mo', perks: ['Live issuing', 'Risk tooling', 'Priority support'] },
                { name: 'Enterprise', price: 'Let’s talk', perks: ['Custom programs', 'Dedicated PM', 'SLA & SSO'] }
              ].map((tier) => (
                <div key={tier.name} className="rounded-2xl border border-gray-200 p-6 bg-white hover:shadow-lg transition">
                  <h3 className="text-lg font-semibold">{tier.name}</h3>
                  <p className="mt-1 text-3xl font-extrabold">{tier.price}</p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-600">
                    {tier.perks.map((p) => (
                      <li key={p}>• {p}</li>
                    ))}
                  </ul>
                  <a href="#get-started" className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-blue-600 text-white font-semibold py-2.5 hover:bg-blue-700">Get started</a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
