const testimonials = [
  {
    quote: 'Sanggar Acara handled our faculty webinar flawlessly. Friendly pricing and pro execution! ',
    name: 'Aira',
    role: 'Student Committee, Informatics'
  },
  {
    quote: 'Our hybrid seminar ran so smoothly. They really understand student needs and budget.',
    name: 'Rafi',
    role: 'Event Lead, Tech Community'
  },
  {
    quote: 'Best birthday planning experience — elegant, on time, and within our budget.',
    name: 'Nadia',
    role: 'Client'
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Trusted by Young Organizers</h2>
          <p className="mt-3 text-gray-600">Stories from clients who chose elegance without overspending.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote key={t.name} className="rounded-2xl border border-gray-200 bg-white p-6">
              <p className="text-gray-700">“{t.quote}”</p>
              <footer className="mt-4 text-sm text-gray-600">
                <span className="font-medium text-gray-900">{t.name}</span> — {t.role}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
