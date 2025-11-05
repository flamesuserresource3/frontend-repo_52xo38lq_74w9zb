import { ShieldCheck, Gauge, Wallet, Globe2, Star } from 'lucide-react'

const points = [
  {
    icon: ShieldCheck,
    title: 'Enterprise-grade security',
    desc: 'End-to-end encryption, strict access control, and 24/7 monitoring.'
  },
  {
    icon: Gauge,
    title: 'Go live faster',
    desc: 'Pre-built workflows for KYC/KYB, issuing, and payouts so you can ship in weeks.'
  },
  {
    icon: Wallet,
    title: 'Own your economics',
    desc: 'Transparent fees, cost controls, and revenue features built-in from day one.'
  },
  {
    icon: Globe2,
    title: 'Global by default',
    desc: 'Multi-currency balances, international payouts, and localized programs.'
  }
]

export default function WhyUs() {
  return (
    <section id="why" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-1">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-700 bg-amber-100 px-3 py-1 rounded-full">
              Why RiteFin
            </span>
            <h3 className="mt-4 text-3xl font-bold text-gray-900">Speed without sacrificing control</h3>
            <p className="mt-3 text-gray-600">Trusted by modern finance teams and high-growth startups. Designed to be reliable, predictable, and secure.</p>
            <div className="mt-6 inline-flex items-center gap-2 text-amber-600 font-semibold">
              <Star className="size-4" /> Rated 4.9/5 by customers
            </div>
          </div>

          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {points.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-xl border border-gray-200 bg-white p-6 hover:shadow-lg transition">
                <div className="size-10 grid place-content-center rounded-md bg-amber-500/10 text-amber-700">
                  <Icon className="size-5" />
                </div>
                <h4 className="mt-4 font-semibold text-gray-900">{title}</h4>
                <p className="mt-2 text-sm text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
