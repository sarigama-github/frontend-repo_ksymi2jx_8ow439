import { Calendar, Mic, GraduationCap, PartyPopper, Camera, MonitorSmartphone } from 'lucide-react'

const services = [
  { icon: Calendar, title: 'Webinars & Seminars', desc: 'End-to-end planning, moderation, and technical ops for academic and community webinars.' },
  { icon: GraduationCap, title: 'Graduations', desc: 'Elegant ceremonies with stage management, flow coordination, and guest experience.' },
  { icon: PartyPopper, title: 'Birthdays & Milestones', desc: 'Memorable celebrations with tasteful decor, entertainment, and smooth run-down.' },
  { icon: Mic, title: 'MC & Talent', desc: 'Professional MCs and talent sourcing tailored to your theme and budget.' },
  { icon: Camera, title: 'Photo & Video', desc: 'Capture your moments with our curated partners at friendly prices.' },
  { icon: MonitorSmartphone, title: 'Hybrid & Streaming', desc: 'High-quality streaming, registration pages, and live engagement tools.' },
]

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">What We Do</h2>
          <p className="mt-3 text-gray-600">Premium execution without the premium price tag. Pick a service or let us curate a package for you.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-gray-200 p-6 bg-white hover:shadow-xl transition-shadow">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-tr from-indigo-500 to-violet-500 text-white flex items-center justify-center shadow-md">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
