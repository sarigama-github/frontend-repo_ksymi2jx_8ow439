const items = [
  {
    title: 'Campus Webinar Series',
    img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Elegant Birthday Soirée',
    img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Hybrid Tech Talk',
    img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1600&auto=format&fit=crop',
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Selected Work</h2>
            <p className="mt-3 text-gray-600 max-w-2xl">A glimpse of the experiences we’ve created for students, communities, and young professionals.</p>
          </div>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <figure key={it.title} className="group rounded-2xl overflow-hidden border border-gray-200 bg-white">
              <img src={it.img} alt={it.title} className="h-56 w-full object-cover group-hover:scale-105 transition-transform" />
              <figcaption className="p-4 text-sm font-medium text-gray-800">{it.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
