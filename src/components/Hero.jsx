export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-indigo-200/50 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-violet-200/50 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <span className="inline-flex items-center rounded-full bg-gray-900 text-white px-3 py-1 text-xs font-semibold">Affordable elegance for your moments</span>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
              Sanggar Acara
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-xl">
              We craft formal events that feel effortless and elegant — from student webinars to milestone birthdays — with pricing that’s friendly for young organizers.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black/90 transition">
                Get a Free Quote
              </a>
              <a href="#portfolio" className="inline-flex items-center justify-center rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50 transition">
                See Our Work
              </a>
            </div>
            <div className="mt-10 flex items-center gap-6 text-gray-600">
              <div className="text-2xl font-bold text-gray-900">120+</div>
              <div className="text-sm">Events delivered with
                <span className="font-semibold"> consistent 5★ feedback</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-tr from-indigo-500 to-violet-500 p-1 shadow-2xl">
              <div className="h-full w-full rounded-[22px] bg-white overflow-hidden">
                <img src="https://images.unsplash.com/photo-1752766074168-44afdbaaf390?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxFbGVnYW50JTIwZXZlbnQlMjBzZXR1cHxlbnwwfDB8fHwxNzYyNzg3OTM3fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Elegant event setup" className="h-full w-full object-cover"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
