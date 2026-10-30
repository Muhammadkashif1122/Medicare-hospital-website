import React from 'react'
import { Link } from 'react-router'

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-12 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_1fr_1fr] lg:gap-12">
          <div>
            <Link to="/" className="inline-flex items-center gap-2 text-2xl font-bold tracking-tight text-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-600 text-xl">+</span>
              MediCare<span className="text-sky-400">+</span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              Expert medicine, genuine compassion. We’re here to support you and your family through every step of your health journey.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-semibold text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Emergency services open 24/7
            </div>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-white">Explore</h2>
            <ul className="mt-5 space-y-3 text-sm">
              <li><Link to="/" className="transition hover:text-sky-300">Home</Link></li>
              <li><Link to="/about" className="transition hover:text-sky-300">About us</Link></li>
              <li><Link to="/services" className="transition hover:text-sky-300">Services &amp; departments</Link></li>
              <li><Link to="/doctors" className="transition hover:text-sky-300">Our doctors</Link></li>
              <li><Link to="/contact" className="transition hover:text-sky-300">Contact</Link></li>
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-white">Get in touch</h2>
            <address className="mt-5 space-y-3 text-sm not-italic leading-6">
              <p className="text-slate-400">1200 Wellness Avenue<br />Springfield, NY 10001</p>
              <p><a href="tel:+923485345530" className="font-medium text-white transition hover:text-sky-300">(+92) 348-5345530</a></p>
              <p><a href="mailto:educationapply987@gmail.com" className="break-all transition hover:text-sky-300">educationapply987@gmail.com</a></p>
            </address>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-white">Hours</h2>
            <dl className="mt-5 space-y-3 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-slate-400">Appointments</dt>
                <dd className="text-right text-white">Mon–Fri<br />8am–6pm</dd>
              </div>
              <div className="flex justify-between gap-4 border-t border-white/10 pt-3">
                <dt className="text-slate-400">Emergency</dt>
                <dd className="text-right font-medium text-emerald-300">Open 24/7</dd>
              </div>
            </dl>
            <Link to="/appointment" className="mt-6 inline-flex items-center rounded-xl bg-sky-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-slate-950">
              Book an appointment <span className="ml-2" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© MediCare+. All rights reserved.</p>
          <p>For life-threatening emergencies, call your local emergency number.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
