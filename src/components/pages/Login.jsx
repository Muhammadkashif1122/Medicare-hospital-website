import React, { useState } from 'react'

const Login = () => {
  const [submitted, setSubmitted] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

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
            <p className="mt-16 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Welcome back</p>
            <h1 className="mt-4 text-4xl font-bold leading-tight">
              Your health journey, all in one place.
            </h1>
            <p className="mt-5 leading-7 text-sky-100/80">
              Sign in to stay connected with your care team and keep your next steps close at hand.
            </p>
          </div>
          <div className="relative rounded-2xl border border-white/15 bg-white/10 p-5">
            <p className="text-lg font-semibold">Care that puts you first.</p>
            <p className="mt-2 text-sm leading-6 text-sky-100/80">
              Need help with your account? Call our team at (555) 014-2000.
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
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-sky-700">Patient portal</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">Sign in to your account</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Enter your email and password to continue.
            </p>

            {submitted && (
              <div role="status" className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
                Sign-in is not connected yet. No account was accessed. Please contact our care team if you need assistance.
              </div>
            )}

            <form onSubmit={handleSubmit} onChange={() => submitted && setSubmitted(false)} className="mt-7 space-y-5">
              <div>
                <label htmlFor="login-email" className="mb-2 block text-sm font-medium text-slate-700">Email address</label>
                <input
                  id="login-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-600 focus:ring-2 focus:ring-sky-100"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <div className="mb-2 flex items-center justify-between gap-3">
                  <label htmlFor="login-password" className="block text-sm font-medium text-slate-700">Password</label>
                  <a href="tel:+15550142000" className="text-sm font-semibold text-sky-700 hover:text-sky-900">Need help?</a>
                </div>
                <div className="relative">
                  <input
                    id="login-password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="current-password"
                    required
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 pr-20 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-600 focus:ring-2 focus:ring-sky-100"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((visible) => !visible)}
                    aria-pressed={showPassword}
                    className="absolute inset-y-0 right-3 my-auto h-fit rounded px-2 py-1 text-xs font-semibold text-slate-500 hover:text-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-600"
                  >
                    {showPassword ? 'Hide' : 'Show'}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between gap-4">
                <label className="flex items-center gap-2 text-sm text-slate-600">
                  <input type="checkbox" name="remember" className="h-4 w-4 rounded border-slate-300 accent-sky-700 focus:ring-sky-600" />
                  Remember me
                </label>
                <a href="tel:+15550142000" className="text-sm font-semibold text-sky-700 hover:text-sky-900">Forgot password?</a>
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-sky-700 to-indigo-700 px-6 py-3.5 font-semibold text-white shadow-lg shadow-indigo-700/20 transition hover:from-sky-800 hover:to-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
              >
                Sign in <span className="ml-2" aria-hidden="true">→</span>
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-slate-600">
              New to MediCare+?{' '}
              <a href="/register" className="font-semibold text-sky-700 hover:text-sky-900">Create an account</a>
            </p>
            <p className="mt-6 border-t border-slate-100 pt-5 text-center text-xs leading-5 text-slate-500">
              For urgent medical needs, call your local emergency number. Do not use this demo portal for emergencies.
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Login
