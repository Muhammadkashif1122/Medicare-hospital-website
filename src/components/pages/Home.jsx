import React from 'react'
import { departments,doctors,services } from '../Data/HomeData'




const Home = () => {
  return (
    <main className="overflow-hidden bg-white text-slate-800">
      <section className="relative bg-sky-50">
        <div className="absolute -right-24 -top-28 h-96 w-96 rounded-full bg-sky-100/80 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 sm:px-8 md:py-24 lg:grid-cols-2 lg:gap-16 lg:px-12">
          <div className="max-w-2xl">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 text-sm font-semibold text-sky-800">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Your health. Our whole heart.
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Care that puts
              <span className="block text-sky-700">you first.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Welcome to MediCare+, where expert medicine meets genuine compassion. From everyday checkups to specialized care, we’re here for every step of your health journey.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="/appointment"
                className="inline-flex items-center justify-center rounded-xl bg-sky-700 px-6 py-3.5 font-semibold text-white shadow-lg shadow-sky-900/15 transition hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2"
              >
                Book an appointment
                <span className="ml-2" aria-hidden="true">→</span>
              </a>
              <a
                href="/departments"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-700 transition hover:border-sky-300 hover:text-sky-800"
              >
                Explore our care
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium text-slate-600">
              <span><span className="mr-2 text-emerald-600">✓</span>Experienced specialists</span>
              <span><span className="mr-2 text-emerald-600">✓</span>Patient-first approach</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
            <div className="absolute -left-5 top-12 h-24 w-24 rounded-full bg-amber-200/70 blur-2xl" />
            <div className="absolute -right-3 bottom-5 h-32 w-32 rounded-full bg-sky-300/60 blur-2xl" />
            <div className="relative rounded-[2rem] bg-gradient-to-br from-sky-700 via-sky-800 to-indigo-900 p-5 shadow-2xl shadow-sky-900/20 sm:p-8">
              <div className="absolute right-8 top-8 h-20 w-20 rounded-full border border-white/15" />
              <div className="absolute right-14 top-14 h-8 w-8 rounded-full bg-white/10" />
              <div className="relative flex min-h-[340px] flex-col justify-between overflow-hidden rounded-[1.5rem] border border-white/15 bg-white/5 p-6 text-white sm:min-h-[390px] sm:p-8">
                <div className="absolute -bottom-24 -right-10 h-64 w-64 rounded-full border-[32px] border-white/5" />
                <div className="relative">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-200">A healthier tomorrow</p>
                  <h2 className="mt-4 max-w-sm text-3xl font-semibold leading-tight sm:text-4xl">
                    The right care, right when you need it.
                  </h2>
                  <p className="mt-4 max-w-sm leading-7 text-sky-100/85">
                    Thoughtful care plans, trusted expertise, and a team in your corner.
                  </p>
                </div>
                <div className="relative mt-10 flex items-center justify-between gap-4 rounded-2xl bg-white p-4 text-slate-800 shadow-xl sm:p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-xl font-bold text-emerald-700" aria-hidden="true">+</div>
                    <div>
                      <p className="font-semibold">Here when it matters</p>
                      <p className="mt-1 text-sm text-slate-500">24/7 emergency support</p>
                    </div>
                  </div>
                  <span className="hidden rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 sm:inline">Always open</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-100 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-8 sm:grid-cols-3 sm:px-8 lg:px-12">
          <div>
            <p className="text-3xl font-bold text-slate-900">20+</p>
            <p className="mt-1 text-sm text-slate-500">Years serving our community</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-slate-900">50+</p>
            <p className="mt-1 text-sm text-slate-500">Dedicated medical specialists</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-slate-900">12</p>
            <p className="mt-1 text-sm text-slate-500">Specialist departments</p>
          </div>
        </div>
      </section>

      <section id="departments" className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-700">Find the right care</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Care across every specialty</h2>
          </div>
          <p className="max-w-lg leading-7 text-slate-600">
            Our departments work together to make your care feel connected, clear, and centered around you.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {departments.map((department) => (
            <article key={department.name} className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-lg hover:shadow-slate-900/5">
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl text-sm font-bold ${department.color}`} aria-hidden="true">
                {department.mark}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">{department.name}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{department.detail}</p>
              <a href="/contact" className="mt-5 inline-flex items-center text-sm font-semibold text-sky-700 hover:text-sky-900">
                Learn more <span className="ml-2 transition group-hover:translate-x-1" aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="doctors" className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-700">People who care</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Meet some of our specialists</h2>
            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
              Skilled clinicians, kind listeners, and partners in your health—ready to help you feel your best.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {doctors.map((doctor) => (
              <article key={doctor.name} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className={`flex h-44 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br ${doctor.color}`}>
                  <div className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-white/80 bg-white/60 text-3xl font-bold text-slate-700 shadow-lg">
                    {doctor.initials}
                  </div>
                </div>
                <div className="flex items-center justify-between gap-3 pt-5">
                  <div>
                    <h3 className="font-semibold text-slate-900">{doctor.name}</h3>
                    <p className="mt-1 text-sm text-slate-500">{doctor.role}</p>
                  </div>
                  <a href="/contact" aria-label={`Book an appointment with ${doctor.name}`} className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-50 text-lg font-semibold text-sky-700 transition hover:bg-sky-700 hover:text-white">
                    →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-700">Support for your whole journey</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">More than treatment. Care that connects.</h2>
            <p className="mt-5 leading-7 text-slate-600">
              From the first question to follow-up care, we make it easier to get the services and support you need in one welcoming place.
            </p>
            <a href="/contact" className="mt-7 inline-flex items-center font-semibold text-sky-700 hover:text-sky-900">
              Talk with our care team <span className="ml-2" aria-hidden="true">→</span>
            </a>
          </div>
          <div className="space-y-4">
            {services.map((service, index) => (
              <article key={service.title} className="flex gap-5 rounded-2xl border border-slate-200 p-5 sm:p-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-100 font-bold text-sky-800" aria-hidden="true">
                  0{index + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">{service.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{service.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-sky-900">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 text-white sm:px-8 lg:grid-cols-2 lg:items-center lg:px-12 lg:py-20">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-200">We’re here to help</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Let’s take the next step together.</h2>
            <p className="mt-4 max-w-xl leading-7 text-sky-100/85">
              Call our friendly team to book an appointment, ask a question, or find the right department for you.
            </p>
            <a href="tel:+15550142000" className="mt-7 inline-flex rounded-xl bg-white px-6 py-3.5 font-semibold text-sky-900 transition hover:bg-sky-50">
              Call (+92) 348-5345530
            </a>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/15 bg-white/10 p-5">
              <p className="font-semibold">Visit us</p>
              <address className="mt-2 text-sm not-italic leading-6 text-sky-100/85">
                1200 Wellness Avenue<br />Springfield, NY 10001
              </address>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/10 p-5">
              <p className="font-semibold">Opening hours</p>
              <p className="mt-2 text-sm leading-6 text-sky-100/85">
                Emergency care: 24/7<br />Appointments: Mon–Fri, 8am–6pm
              </p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/10 p-5 sm:col-span-2">
              <p className="font-semibold">Need urgent help?</p>
              <p className="mt-2 text-sm leading-6 text-sky-100/85">
                Our emergency department is open 24 hours a day. For a life-threatening emergency, call your local emergency number.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
