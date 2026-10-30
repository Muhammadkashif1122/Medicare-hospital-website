import React, { useState } from 'react'
import doctors from '../Data/DoctorData'



const Doctors = () => {
  const [openProfile, setOpenProfile] = useState(null)

  return (
    <main className="bg-slate-50 text-slate-800">
      <section className="bg-sky-50">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 md:py-20 lg:px-12">
          <p className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 text-sm font-semibold text-sky-800">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Expert care, a human touch
          </p>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_0.65fr] lg:items-end">
            <div>
              <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
                Meet the people behind your care.
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                Get to know our experienced specialists and find a doctor whose expertise and approach feel right for you.
              </p>
            </div>
            <div className="rounded-2xl border border-sky-100 bg-white p-5 shadow-sm sm:p-6">
              <p className="text-sm font-semibold text-slate-900">Looking for the right specialist?</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">Our care team can help you choose a doctor and arrange your first visit.</p>
              <a href="#appointment" className="mt-4 inline-flex font-semibold text-sky-700 hover:text-sky-900">
                Contact our team <span className="ml-2" aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-12 lg:py-16">
        <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-700">Our specialists</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Find your doctor</h2>
          </div>
          <p className="text-sm text-slate-500">{doctors.length} featured members of our care team</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doctor) => {
            const isProfileOpen = openProfile === doctor.name

            return (
              <article key={doctor.name} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-900/5">
                <div className="relative h-64 bg-sky-100">
                  <img
                    src={doctor.photo}
                    alt={`Portrait of ${doctor.name}`}
                    className="h-full w-full object-cover object-center"
                    loading="lazy"
                    onError={(event) => {
                      event.currentTarget.style.display = 'none'
                    }}
                  />
                  <span className="absolute bottom-4 left-4 rounded-full border border-white/80 bg-white/90 px-3 py-1.5 text-xs font-semibold text-emerald-800 shadow-sm">
                    <span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-emerald-500" />
                    Accepting patients
                  </span>
                </div>

                <div className="p-5 sm:p-6">
                  <p className="text-sm font-semibold text-sky-700">{doctor.specialty}</p>
                  <h3 className="mt-1 text-xl font-bold text-slate-900">{doctor.name}</h3>
                  <div className="mt-4 space-y-2 text-sm text-slate-600">
                    <p className="flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-slate-100 text-xs font-bold text-slate-600" aria-hidden="true">+</span>
                      {doctor.experience}
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-slate-100 text-xs font-bold text-slate-600" aria-hidden="true">↗</span>
                      Available: {doctor.availability}
                    </p>
                  </div>

                  {isProfileOpen && (
                    <p className="mt-4 border-t border-slate-100 pt-4 text-sm leading-6 text-slate-600">
                      {doctor.bio}
                    </p>
                  )}

                  <div className="mt-5 grid grid-cols-2 gap-3">
                   
                    <button
                      type="button"
                      aria-expanded={isProfileOpen}
                      onClick={() => setOpenProfile(isProfileOpen ? null : doctor.name)}
                      className="rounded-xl border border-slate-300 px-3 py-3 text-sm font-semibold text-slate-700 transition hover:border-sky-300 hover:text-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2"
                    >
                      {isProfileOpen ? 'Hide profile' : 'View profile'}
                    </button>
                   
                    <a
                      href="/appointment"
                      className="inline-flex items-center justify-center rounded-xl bg-sky-700 px-3 py-3 text-sm font-semibold text-white transition hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2"
                    >
                      Book appointment
                    </a>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <section id="appointment" className="bg-sky-900">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-12 text-white sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-200">Let’s get you started</p>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">Ready to meet your doctor?</h2>
            <p className="mt-2 text-sm leading-6 text-sky-100/85">Call our care team and we’ll help find a time that works for you.</p>
          </div>
          <a href="tel:+15550142000" className="inline-flex shrink-0 items-center justify-center rounded-xl bg-white px-6 py-3.5 font-semibold text-sky-900 transition hover:bg-sky-50">
            Call (+92) 348-5345530
          </a>
        </div>
      </section>
    </main>
  )
}

export default Doctors
