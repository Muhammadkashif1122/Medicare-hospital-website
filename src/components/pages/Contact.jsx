import React from 'react'

const contactEmail = 'educationapply987@gmail.com'
const hospitalAddress = 'Chabri Bala Near UBL Bank Dera Ghazi Khan Punjab pk'

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const subject = encodeURIComponent(`Website inquiry from ${formData.get('name')}`)
    const body = encodeURIComponent(
      `Name: ${formData.get('name')}\nEmail: ${formData.get('email')}\nPhone: ${formData.get('phone') || 'Not provided'}\n\nMessage:\n${formData.get('message')}`,
    )

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`
  }

  return (
    <main className="bg-slate-50 text-slate-800">
      <section className="bg-sky-50">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 md:py-20 lg:px-12">
          <p className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 text-sm font-semibold text-sky-800">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            We’re ready to listen
          </p>
          <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
            How can we help you today?
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Reach out to our friendly team for appointment questions, directions, or help finding the right department.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-14 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-12 lg:py-16">
        <aside className="space-y-5">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-sky-700">Contact details</p>
            <div className="mt-6 space-y-6">
              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-100 font-bold text-sky-800" aria-hidden="true">01</span>
                <div>
                  <h2 className="font-semibold text-slate-900">Visit us</h2>
                  <address className="mt-1 text-sm not-italic leading-6 text-slate-600">{hospitalAddress}</address>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(hospitalAddress)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex text-sm font-semibold text-sky-700 hover:text-sky-900"
                  >
                    Get directions <span className="ml-1" aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 font-bold text-emerald-800" aria-hidden="true">02</span>
                <div>
                  <h2 className="font-semibold text-slate-900">Call us</h2>
                  <a href="tel:+923485345530" className="mt-1 block text-sm text-slate-600 hover:text-sky-800">(+92) 3485345530</a>
                  <p className="mt-1 text-xs text-slate-500">Emergency department open 24/7</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-100 font-bold text-violet-800" aria-hidden="true">03</span>
                <div>
                  <h2 className="font-semibold text-slate-900">Email us</h2>
                  <a href={`mailto:${contactEmail}`} className="mt-1 block break-all text-sm text-slate-600 hover:text-sky-800">{contactEmail}</a>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-sky-700">Opening hours</p>
            <dl className="mt-5 space-y-3 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-slate-600">Appointments</dt>
                <dd className="text-right font-medium text-slate-900">Mon–Fri, 8am–6pm</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-slate-600">Emergency services</dt>
                <dd className="text-right font-medium text-emerald-700">Open 24/7</dd>
              </div>
            </dl>
            <p className="mt-4 border-t border-slate-100 pt-4 text-xs leading-5 text-slate-500">
              For a life-threatening emergency, call your local emergency number.
            </p>
          </div>
        </aside>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-sky-700">Send us a message</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900">We’ll be glad to hear from you.</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Complete the form and your email app will open with your message ready to send.
          </p>
          <form onSubmit={handleSubmit} className="mt-7 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-slate-700">Your name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-600 focus:ring-2 focus:ring-sky-100"
                  placeholder="Jane Smith"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-slate-700">Email address</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-600 focus:ring-2 focus:ring-sky-100"
                  placeholder="jane@example.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="contact-phone" className="mb-2 block text-sm font-medium text-slate-700">Phone number <span className="font-normal text-slate-400">(optional)</span></label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-600 focus:ring-2 focus:ring-sky-100"
                placeholder="(+92) 000-0000000"
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-slate-700">How can we help?</label>
              <textarea
                id="contact-message"
                name="message"
                rows="5"
                required
                className="w-full resize-y rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-600 focus:ring-2 focus:ring-sky-100"
                placeholder="Tell us what you need help with..."
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-xl bg-sky-700 px-6 py-3.5 font-semibold text-white transition hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2 sm:w-auto"
            >
              Prepare email <span className="ml-2" aria-hidden="true">→</span>
            </button>
          </form>
        </section>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 sm:px-8 lg:px-12">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex flex-col gap-3 p-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-sky-700">Find us</p>
              <h2 className="mt-2 text-2xl font-bold text-slate-900">Visit MediCare+</h2>
              <p className="mt-1 text-sm text-slate-600">{hospitalAddress}</p>
            </div>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(hospitalAddress)}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex font-semibold text-sky-700 hover:text-sky-900"
            >
              Open map <span className="ml-1" aria-hidden="true">↗</span>
            </a>
          </div>
          <iframe
            title="Map showing the hospital location"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(hospitalAddress)}&output=embed`}
            className="h-72 w-full border-0 sm:h-96"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </main>
  )
}

export default Contact
