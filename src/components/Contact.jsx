import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState({ state: 'idle', message: '' })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ state: 'loading', message: 'Sending...' })

    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!res.ok) throw new Error('Failed to submit')
      const data = await res.json()
      setStatus({ state: 'success', message: 'Thanks! We will contact you shortly.' })
      e.currentTarget.reset()
    } catch (err) {
      setStatus({ state: 'error', message: 'Something went wrong. Please try again.' })
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Get a Free Quote</h2>
            <p className="mt-3 text-gray-600">Tell us about your event. We’ll tailor a plan that balances elegance and affordability.</p>
            <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6">
              <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label className="text-sm font-medium text-gray-700">Full Name</label>
                  <input name="name" required className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                </div>
                <div className="sm:col-span-1">
                  <label className="text-sm font-medium text-gray-700">Email</label>
                  <input name="email" type="email" required className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm font-medium text-gray-700">Phone / WhatsApp</label>
                  <input name="phone" className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                </div>
                <div className="sm:col-span-1">
                  <label className="text-sm font-medium text-gray-700">Event Type</label>
                  <select name="event_type" required className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    <option>Webinar</option>
                    <option>Seminar</option>
                    <option>Birthday</option>
                    <option>Graduation</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="sm:col-span-1">
                  <label className="text-sm font-medium text-gray-700">Preferred Date</label>
                  <input name="event_date" type="text" placeholder="e.g., 21 Dec or late January" className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm font-medium text-gray-700">Estimated Budget</label>
                  <input name="budget_range" type="text" placeholder="e.g., IDR 3-5M" className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm font-medium text-gray-700">Additional Details</label>
                  <textarea name="message" rows={4} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                </div>
                <div className="sm:col-span-2">
                  <button type="submit" className="w-full rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black/90 transition">
                    Send Inquiry
                  </button>
                  {status.state !== 'idle' && (
                    <p className={`mt-3 text-sm ${status.state === 'success' ? 'text-green-600' : status.state === 'error' ? 'text-red-600' : 'text-gray-600'}`}>
                      {status.message}
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>

          <div className="lg:pl-8">
            <div className="rounded-3xl bg-gradient-to-tr from-indigo-500 to-violet-500 p-1 shadow-2xl">
              <div className="rounded-[22px] bg-white p-6">
                <h3 className="text-lg font-semibold text-gray-900">Why choose us?</h3>
                <ul className="mt-4 space-y-3 text-sm text-gray-700">
                  <li>• Elegant feel at a student-friendly price</li>
                  <li>• Detail-obsessed planning and rundown</li>
                  <li>• Friendly and responsive team</li>
                  <li>• Strong partner network for photo/video, decor, and more</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
