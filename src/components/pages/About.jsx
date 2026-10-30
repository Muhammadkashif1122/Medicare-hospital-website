import React from 'react'
import { milestones,facilities,team } from '../Data/AboutData'




const About = () => {
  return (
    <main className="overflow-hidden bg-white text-slate-800">
      <section className="relative bg-sky-50">
        <div className="absolute -right-24 -top-28 h-96 w-96 rounded-full bg-sky-100/80 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 sm:px-8 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:px-12">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 text-sm font-semibold text-sky-800">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Get to know MediCare+
            </p>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Care built on
              <span className="block text-sky-700">trust and purpose.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              For more than two decades, we’ve brought people and expertise together to make healthcare more personal, more connected, and more compassionate.
            </p>
            <a href="#mission" className="mt-8 inline-flex items-center rounded-xl bg-sky-700 px-6 py-3.5 font-semibold text-white shadow-lg shadow-sky-900/15 transition hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2">
              Discover our story <span className="ml-2" aria-hidden="true">↓</span>
            </a>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -left-5 top-8 h-28 w-28 rounded-full bg-amber-200/70 blur-2xl" />
            <div className="relative rounded-[2rem] bg-gradient-to-br from-sky-700 via-sky-800 to-indigo-900 p-5 shadow-2xl shadow-sky-900/20 sm:p-8">
              <div className="flex min-h-[330px] flex-col justify-between overflow-hidden rounded-[1.5rem] border border-white/15 bg-white/5 p-6 text-white sm:min-h-[390px] sm:p-8">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-200">Our promise</p>
                  <p className="mt-5 max-w-sm text-3xl font-semibold leading-tight sm:text-4xl">
                    Every patient is a person, not a number.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                    <p className="text-3xl font-bold">20+</p>
                    <p className="mt-1 text-sm text-sky-100">Years of care</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                    <p className="text-3xl font-bold">50+</p>
                    <p className="mt-1 text-sm text-sky-100">Medical specialists</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="mission" className="mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:px-8 lg:grid-cols-2 lg:items-start lg:px-12 lg:py-24">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-700">Our mission</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Better health starts with listening.
          </h2>
          <p className="mt-5 leading-7 text-slate-600">
            We bring skilled professionals, modern medicine, and genuine compassion together to help every person live a healthier life. We listen first, explain clearly, and work with you to make care feel right for you.
          </p>
          <p className="mt-4 leading-7 text-slate-600">
            That commitment guides how we care for patients, support our staff, and show up for the community we call home.
          </p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7 sm:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-700">Our values</p>
          <div className="mt-6 space-y-5">
            {[
              ['Compassion', 'We meet every person with kindness, dignity, and respect.'],
              ['Excellence', 'We keep learning and bring our best to every moment of care.'],
              ['Togetherness', 'We work as one team with patients and families.'],
            ].map(([value, description]) => (
              <div key={value} className="flex gap-4">
                <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-700" aria-hidden="true">✓</span>
                <div>
                  <h3 className="font-semibold text-slate-900">{value}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-700">Our story</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Growing with our community</h2>
            <p className="mt-4 leading-7 text-slate-600">
              From a neighborhood hospital to a connected center for care, our history is shaped by the people and families we serve.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {milestones.map((milestone) => (
              <article key={milestone.year} className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7">
                <p className="text-sm font-bold uppercase tracking-[0.15em] text-sky-700">{milestone.year}</p>
                <h3 className="mt-3 text-lg font-semibold text-slate-900">{milestone.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{milestone.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="facilities" className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-700">Our facilities</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">The right resources, close to home</h2>
          </div>
          <p className="max-w-lg leading-7 text-slate-600">
            Thoughtfully equipped spaces and connected teams help make your care journey simpler.
          </p>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {facilities.map((facility) => (
            <article key={facility.number} className="rounded-2xl border border-slate-200 p-6 transition hover:border-sky-200 hover:shadow-lg hover:shadow-slate-900/5 sm:p-7">
              <p className="text-sm font-bold tracking-[0.15em] text-sky-700">{facility.number}</p>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{facility.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{facility.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-sky-50">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-700">The people behind your care</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Meet our care leaders</h2>
            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
              A collaborative team of clinicians and caregivers, committed to making every visit feel more human.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <article key={member.name} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className={`flex h-44 items-center justify-center rounded-xl bg-gradient-to-br ${member.tone}`}>
                  <div className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-white/80 bg-white/60 text-3xl font-bold text-slate-700 shadow-lg">
                    {member.initials}
                  </div>
                </div>
                <h3 className="mt-5 font-semibold text-slate-900">{member.name}</h3>
                <p className="mt-1 text-sm text-slate-500">{member.title}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="rounded-3xl bg-sky-900 px-6 py-10 text-white sm:px-10 sm:py-12 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-200">A commitment worth celebrating</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Progress made possible by people.</h2>
            <p className="mt-4 max-w-2xl leading-7 text-sky-100/85">
              Our greatest achievement is the trust patients place in us. Every improvement in care starts with listening to our community and learning together.
            </p>
          </div>
          <div className="mt-8 grid shrink-0 grid-cols-2 gap-3 lg:mt-0">
            <div className="rounded-2xl border border-white/15 bg-white/10 p-5">
              <p className="text-3xl font-bold">12</p>
              <p className="mt-1 text-sm text-sky-100">Specialty departments</p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/10 p-5">
              <p className="text-3xl font-bold">24/7</p>
              <p className="mt-1 text-sm text-sky-100">Emergency support</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About
