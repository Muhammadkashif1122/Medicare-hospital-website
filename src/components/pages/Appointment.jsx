import React, { useState } from 'react'
import { doctorsByDepartment,appointmentTimes } from '../Data/AppointmentData'


const getTodayDate = () => {
  const today = new Date()
  const localDate = new Date(today.getTime() - today.getTimezoneOffset() * 60_000)
  return localDate.toISOString().slice(0, 10)
}

const Appointment = () => {
  const [department, setDepartment] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsSubmitted(true)
    event.currentTarget.reset()
    setDepartment('')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <section className="bg-sky-50">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 md:py-20 lg:px-12">
          <p className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 text-sm font-semibold text-sky-800">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Your next step starts here
          </p>
          <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
            Request an appointment.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Tell us how to reach you and what kind of care you’re looking for. Our team can help you coordinate your visit.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-12 sm:px-8 lg:grid-cols-[1fr_0.65fr] lg:px-12 lg:py-16">
        <div>
          {isSubmitted && (
            <div role="status" className="mb-6 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-amber-950">
              <p className="font-semibold">Form submitted for this demo</p>
              <p className="mt-1 text-sm leading-6">
                No appointment has been booked or request sent. Please call our team at{' '}
                <a href="tel:+15550142000" className="font-semibold underline">(+92) 348-5345530</a>{' '}
                to schedule a visit.
              </p>
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            onChange={() => {
              if (isSubmitted) setIsSubmitted(false)
            }}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
          >
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-sky-700">Appointment request</p>
              <h2 className="mt-2 text-2xl font-bold text-slate-900">Your details</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">Fields marked required need to be completed.</p>
            </div>

            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="patient-name" className="mb-2 block text-sm font-medium text-slate-700">Patient name <span className="text-rose-600">*</span></label>
                <input
                  id="patient-name"
                  name="patientName"
                  type="text"
                  autoComplete="name"
                  required
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-600 focus:ring-2 focus:ring-sky-100"
                  placeholder="Full name"
                />
              </div>
              <div>
                <label htmlFor="patient-phone" className="mb-2 block text-sm font-medium text-slate-700">Phone number <span className="text-rose-600">*</span></label>
                <input
                  id="patient-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  required
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-600 focus:ring-2 focus:ring-sky-100"
                  placeholder="(+92) 000-0000000"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="patient-email" className="mb-2 block text-sm font-medium text-slate-700">Email address <span className="text-rose-600">*</span></label>
                <input
                  id="patient-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-600 focus:ring-2 focus:ring-sky-100"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="department" className="mb-2 block text-sm font-medium text-slate-700">Department <span className="text-rose-600">*</span></label>
                <select
                  id="department"
                  name="department"
                  required
                  value={department}
                  onChange={(event) => setDepartment(event.target.value)}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-sky-600 focus:ring-2 focus:ring-sky-100"
                >
                  <option value="" disabled>Select a department</option>
                  {Object.keys(doctorsByDepartment).map((name) => (
                    <option key={name} value={name}>{name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="doctor" className="mb-2 block text-sm font-medium text-slate-700">Preferred doctor <span className="text-rose-600">*</span></label>
                <select
                  id="doctor"
                  name="doctor"
                  required
                  disabled={!department}
                  defaultValue=""
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-sky-600 focus:ring-2 focus:ring-sky-100 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-400"
                >
                  <option value="" disabled>{department ? 'Select a doctor' : 'Choose a department first'}</option>
                  {(doctorsByDepartment[department] || []).map((name) => (
                    <option key={name} value={name}>{name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="appointment-date" className="mb-2 block text-sm font-medium text-slate-700">Preferred date <span className="text-rose-600">*</span></label>
                <input
                  id="appointment-date"
                  name="date"
                  type="date"
                  min={getTodayDate()}
                  required
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-600 focus:ring-2 focus:ring-sky-100"
                />
              </div>
              <div>
                <label htmlFor="appointment-time" className="mb-2 block text-sm font-medium text-slate-700">Preferred time <span className="text-rose-600">*</span></label>
                <select
                  id="appointment-time"
                  name="time"
                  required
                  defaultValue=""
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-sky-600 focus:ring-2 focus:ring-sky-100"
                >
                  <option value="" disabled>Select a time</option>
                  {appointmentTimes.map((time) => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-7 rounded-xl bg-slate-50 p-4 text-sm leading-6 text-slate-600">
              Submitting this form does not book an appointment. A real booking service needs to be connected before requests can be received.
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-sky-700 px-6 py-3.5 font-semibold text-white transition hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2 sm:w-auto"
            >
              Submit appointment request <span className="ml-2" aria-hidden="true">→</span>
            </button>
          </form>
        </div>

        <aside className="space-y-5">
          <div className="rounded-2xl bg-gradient-to-br from-sky-800 to-indigo-900 p-6 text-white shadow-lg shadow-sky-900/10 sm:p-7">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-sky-200">Need help booking?</p>
            <h2 className="mt-3 text-2xl font-bold">Talk with our care team.</h2>
            <p className="mt-3 text-sm leading-6 text-sky-100/85">
              We can help you find the right department, answer questions, and arrange an appointment.
            </p>
            <a href="tel:+15550142000" className="mt-6 inline-flex rounded-xl bg-white px-5 py-3 font-semibold text-sky-900 transition hover:bg-sky-50">
              Call (+92) 348-5345530
            </a>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-sky-700">Before your visit</p>
            <ul className="mt-5 space-y-4 text-sm leading-6 text-slate-600">
              <li className="flex gap-3"><span className="font-bold text-emerald-600" aria-hidden="true">✓</span>Have your preferred contact details ready.</li>
              <li className="flex gap-3"><span className="font-bold text-emerald-600" aria-hidden="true">✓</span>Choose the department that best matches your needs.</li>
              <li className="flex gap-3"><span className="font-bold text-emerald-600" aria-hidden="true">✓</span>Our team can confirm availability and the final appointment time.</li>
            </ul>
          </div>
        </aside>
      </section>
    </main>
  )
}

export default Appointment
