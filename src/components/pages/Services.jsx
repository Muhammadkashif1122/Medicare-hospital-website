import React from 'react'
import departments from '../Data/ServicesData'




const Services = () => {
  return (
    <main className="bg-white text-slate-800">
      <section className="relative overflow-hidden bg-sky-50">
        <div className="absolute -right-24 -top-28 h-96 w-96 rounded-full bg-sky-100/80 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-8 md:py-20 lg:px-12">
          <p className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 text-sm font-semibold text-sky-800">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Connected care, all in one place
          </p>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_0.65fr] lg:items-end">
            <div>
              <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
                The care you need, from people who care.
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                Explore our departments and services. Our teams work together to make your care clear, coordinated, and centered on you.
              </p>
            </div>
            <div className="rounded-2xl border border-sky-100 bg-white p-5 shadow-sm sm:p-6">
              <p className="text-sm font-semibold text-slate-900">Not sure where to start?</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Our team can help you find the right department and plan your next step.
              </p>
              <a href="#contact" className="mt-4 inline-flex font-semibold text-sky-700 hover:text-sky-900">
                Get in touch <span className="ml-2" aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="departments" className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-700">Our departments</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Specialty care for every stage</h2>
          </div>
          <p className="max-w-lg leading-7 text-slate-600">
            From specialist appointments to urgent support and diagnostic services, we’re here to help you move forward.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {departments.map((department) => (
            <article key={department.name} className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-lg hover:shadow-slate-900/5 sm:p-7">
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl text-sm font-bold ${department.color}`} aria-hidden="true">
                {department.initials}
              </div>
              <p className="mt-5 text-xs font-bold uppercase tracking-[0.14em] text-sky-700">{department.category}</p>
              <h3 className="mt-2 text-xl font-semibold text-slate-900">{department.name}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{department.detail}</p>
              <ul className="mt-5 space-y-2 border-t border-slate-100 pt-5">
                {department.care.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-slate-600">
                    <span className="font-bold text-emerald-600" aria-hidden="true">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="mt-6 inline-flex items-center font-semibold text-sky-700 hover:text-sky-900">
                Ask about this service <span className="ml-2 transition group-hover:translate-x-1" aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-12 lg:py-20">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-700">How we care</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">A connected team, focused on you.</h2>
            <p className="mt-5 leading-7 text-slate-600">
              Good care is more than a single appointment. We help coordinate the right people, services, and information so you can feel supported at every step.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="font-semibold text-slate-900">Clear next steps</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">We explain your options and help you understand what comes next.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="font-semibold text-slate-900">Coordinated support</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">Our care teams work together across departments to support your needs.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-sky-900">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-12 text-white sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-200">We’re here to help</p>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">Find the care that’s right for you.</h2>
            <p className="mt-2 text-sm leading-6 text-sky-100/85">Call our team for department information or help arranging an appointment.</p>
          </div>
          <a href="tel:+15550142000" className="inline-flex shrink-0 items-center justify-center rounded-xl bg-white px-6 py-3.5 font-semibold text-sky-900 transition hover:bg-sky-50">
            Call (+92) 348-5345530
          </a>
        </div>
      </section>
    </main>
  )
}

export default Services
