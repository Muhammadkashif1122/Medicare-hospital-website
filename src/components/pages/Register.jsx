import React, { useState } from 'react'

const Register = () => {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="relative flex min-h-[calc(100vh-5rem)] items-center justify-center overflow-hidden bg-gradient-to-br from-sky-700 via-indigo-700 to-violet-800 px-4 py-12 sm:px-6 lg:py-16">
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />
      <div className="absolute -bottom-24 -right-16 h-96 w-96 rounded-full bg-fuchsia-400/20 blur-3xl" />

      <div className="relative grid w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 shadow-2xl shadow-indigo-950/30 backdrop-blur-xl lg:grid-cols-[0.85fr_1.15fr]">
        <aside className="relative hidden flex-col justify-between overflow-hidden bg-gradient-to-br from-sky-800/80 to-indigo-950/80 p-10 text-white lg:flex">
          <div className="absolute -right-20 top-28 h-64 w-64 rounded-full border border-white/10" />
          <div className="absolute -right-8 top-40 h-40 w-40 rounded-full border border-white/10" />
          <div className="relative">
            <a href="/" className="text-2xl font-bold tracking-tight text-white">
              MediCare<span className="text-cyan-300">+</span>
            </a>
            <p className="mt-16 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Your care, connected</p>
            <h1 className="mt-4 text-4xl font-bold leading-tight">
              A healthier journey starts with you.
            </h1>
            <p className="mt-5 leading-7 text-sky-100/80">
              Create your patient account to make it easier to stay connected with your care team.
            </p>
          </div>
          <div className="relative rounded-2xl border border-white/15 bg-white/10 p-5">
            <p className="text-lg font-semibold">Care that puts you first.</p>
            <p className="mt-2 text-sm leading-6 text-sky-100/80">
              One welcoming place for your health, your questions, and your next steps.
            </p>
          </div>
        </aside>

        <section className="bg-white p-6 sm:p-10 lg:p-12">
          <div className="mx-auto max-w-md">
            <div className="mb-8 lg:hidden">
              <a href="/" className="text-xl font-bold text-sky-800">
                MediCare<span className="text-indigo-600">+</span>
              </a>
            </div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-sky-700">Join MediCare+</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">Create your account</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Enter your details below to get started.
            </p>

            {submitted && (
              <div role="status" className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
                This is a demo form. No account was created because registration is not connected to an authentication service.
              </div>
            )}

            <form onSubmit={handleSubmit} onChange={() => submitted && setSubmitted(false)} className="mt-7 space-y-4">
              <div>
                <label htmlFor="register-name" className="mb-2 block text-sm font-medium text-slate-700">Full name</label>
                <input
                  id="register-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-600 focus:ring-2 focus:ring-sky-100"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="register-email" className="mb-2 block text-sm font-medium text-slate-700">Email address</label>
                <input
                  id="register-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-600 focus:ring-2 focus:ring-sky-100"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="register-phone" className="mb-2 block text-sm font-medium text-slate-700">Phone number</label>
                <input
                  id="register-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  required
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-600 focus:ring-2 focus:ring-sky-100"
                  placeholder="(555) 000-0000"
                />
              </div>
              <div>
                <label htmlFor="register-password" className="mb-2 block text-sm font-medium text-slate-700">Password</label>
                <input
                  id="register-password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  minLength={8}
                  required
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-600 focus:ring-2 focus:ring-sky-100"
                  placeholder="At least 8 characters"
                />
              </div>
              <label className="flex items-start gap-3 pt-1 text-sm leading-6 text-slate-600">
                <input type="checkbox" required className="mt-1 h-4 w-4 rounded border-slate-300 accent-sky-700 focus:ring-sky-600" />
                <span>I agree to the <a href="#terms" className="font-semibold text-sky-700 hover:text-sky-900">terms of service</a> and <a href="#privacy" className="font-semibold text-sky-700 hover:text-sky-900">privacy policy</a>.</span>
              </label>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-sky-700 to-indigo-700 px-6 py-3.5 font-semibold text-white shadow-lg shadow-indigo-700/20 transition hover:from-sky-800 hover:to-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
              >
                Create account <span className="ml-2" aria-hidden="true">→</span>
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-slate-600">
              Already have an account?{' '}
              <a href="/login" className="font-semibold text-sky-700 hover:text-sky-900">Sign in</a>
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Register
