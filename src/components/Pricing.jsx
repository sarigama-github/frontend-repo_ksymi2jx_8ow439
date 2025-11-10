const tiers = [
  {
    name: 'Starter',
    price: 'IDR 1.5M - 3M',
    perks: ['Online/Small events', 'Basic MC/Host', 'Simple rundown & flow', 'Up to 100 attendees']
  },
  {
    name: 'Standard',
    price: 'IDR 3M - 7M',
    perks: ['Webinar/Hybrid ready', 'Professional MC', 'Creative deck & timeline', 'Tech ops support']
  },
  {
    name: 'Signature',
    price: 'Custom',
    perks: ['Full-scale production', 'Stage & decor planning', 'Photo/Video partners', 'Sponsor & media kit']
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Transparent Pricing</h2>
          <p className="mt-3 text-gray-600">Flexible packages that fit student budgets without compromising quality.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((t) => (
            <div key={t.name} className="rounded-2xl border border-gray-200 p-6 bg-white hover:shadow-xl transition-shadow">
              <div className="text-sm font-semibold text-indigo-600">{t.name}</div>
              <div className="mt-2 text-3xl font-bold text-gray-900">{t.price}</div>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                {t.perks.map((p) => (
                  <li key={p}>• {p}</li>
                ))}
              </ul>
              <a href="#contact" className="mt-6 inline-flex items-center justify-center rounded-full bg-gray-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/90 transition">
                Get a Quote
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
