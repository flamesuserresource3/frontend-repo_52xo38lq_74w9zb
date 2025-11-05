import { CreditCard, BarChart3, Cog, ShieldCheck } from 'lucide-react'

const features = [
  {
    icon: CreditCard,
    title: 'Card Issuing',
    desc: 'Virtual and physical cards with granular spend controls, budgets, and real-time notifications.'
  },
  {
    icon: BarChart3,
    title: 'Payments & Payouts',
    desc: 'Accept, hold, and move money globally with transparent fees and instant settlement options.'
  },
  {
    icon: ShieldCheck,
    title: 'Risk & Compliance',
    desc: 'KYC/KYB, AML screening, fraud detection, and dispute management built into the flow.'
  },
  {
    icon: Cog,
    title: 'Developer-first',
    desc: 'Clean APIs, webhooks, and SDKs. Sandbox environments and detailed observability.'
  }
]

export default function Features() {
  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Build, launch, and scale your financial products</h2>
          <p className="mt-4 text-gray-600">Everything you need to go live quickly without compromising on security or compliance.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-gray-200 p-6 hover:shadow-lg transition bg-white">
              <div className="size-11 rounded-md bg-blue-600/10 text-blue-700 grid place-content-center">
                <Icon className="size-5" />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
