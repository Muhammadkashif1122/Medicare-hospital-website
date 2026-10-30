import { useState } from 'react'
import { Link, NavLink } from 'react-router'

const navigation = [
  { label: 'Overview', path: '/', icon: 'home' },
  { label: 'My appointments', path: '/my-appointments', icon: 'calendar' },
  { label: 'Find a doctor', path: '/doctors', icon: 'doctor' },
  { label: 'Departments', path: '/services', icon: 'hospital' },
]

const appointments = [
  {
    id: 1,
    doctor: 'Dr. Javed Rehmat',
    specialty: 'Cardiology',
    date: 'Tuesday, October 20, 2026',
    time: '10:30 AM',
    type: 'In-person visit',
    initials: 'MP',
    tone: 'bg-rose-100 text-rose-700',
    status: 'Confirmed',
    history: 'upcoming',
  },
  {
    id: 2,
    doctor: 'Dr. Mushtaq',
    specialty: 'Neurology',
    date: 'Friday, October 23, 2026',
    time: '2:00 PM',
    type: 'Video consultation',
    initials: 'EB',
    tone: 'bg-sky-100 text-sky-700',
    status: 'Confirmed',
    history: 'upcoming',
  },
  {
    id: 3,
    doctor: 'Dr. Waqar Mastoi',
    specialty: 'Pediatrics',
    date: 'Monday, October 12, 2026',
    time: '9:00 AM',
    type: 'In-person visit',
    initials: 'SC',
    tone: 'bg-violet-100 text-violet-700',
    status: 'Completed',
    history: 'past',
  },
]

const iconPaths = {
  home: <><path d="m3 10 9-7 9 7" /><path d="M5 9v11h14V9M9 20v-6h6v6" /></>,
  calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 10h18" /><path d="m9 15 2 2 4-4" /></>,
  doctor: <><circle cx="12" cy="8" r="4" /><path d="M5 21v-2a7 7 0 0 1 14 0v2M12 12v4m-2-2h4" /></>,
  hospital: <><path d="M3 21h18M5 21V5h14v16M9 9h2m2 0h2m-6 4h2m2 0h2m-5 8v-4h4v4" /><path d="M10 2h4v3h-4z" /></>,
  plus: <><path d="M12 5v14M5 12h14" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
  video: <><rect x="3" y="6" width="13" height="12" rx="2" /><path d="m16 10 5-3v10l-5-3z" /></>,
  bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" /></>,
  arrow: <><path d="M5 12h14m-7-7 7 7-7 7" /></>,
}

function Icon({ name, className = 'h-5 w-5' }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {iconPaths[name]}
    </svg>
  )
}

function MyAppointments() {
  const [filter, setFilter] = useState('upcoming')
  const visibleAppointments = appointments.filter(
    (appointment) => appointment.history === filter,
  )

  return (
    <div className="min-h-screen bg-[#f5f8fc] text-slate-800">
      <div className="mx-auto flex min-h-screen max-w-[1600px] flex-col lg:flex-row">
        <aside className="flex w-full shrink-0 flex-col border-b border-slate-200 bg-white px-5 py-5 lg:min-h-screen lg:w-64 lg:border-r lg:border-b-0 lg:px-6 lg:py-8">
          <Link to="/" className="flex items-center gap-3 px-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-600 text-2xl font-bold text-white">
              +
            </span>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              MediCare<span className="text-sky-600">+</span>
            </span>
          </Link>

          <div className="mt-8 hidden rounded-2xl bg-sky-50 px-4 py-4 lg:block">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-sky-700">Patient portal</p>
            <p className="mt-1 text-sm leading-5 text-slate-600">Your care, all in one place.</p>
          </div>

          <nav aria-label="Patient navigation" className="mt-6">
            <p className="mb-2 hidden px-3 text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400 lg:block">
              Menu
            </p>
            <div className="flex gap-1 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible lg:pb-0">
              {navigation.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) =>
                    `flex shrink-0 items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                      isActive
                        ? 'bg-sky-600 text-white shadow-sm shadow-sky-200'
                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                    }`
                  }
                >
                  <Icon name={item.icon} className="h-[18px] w-[18px]" />
                  {item.label}
                </NavLink>
              ))}
            </div>
          </nav>

          <div className="mt-6 hidden border-t border-slate-100 pt-5 lg:block">
            <p className="mb-2 px-3 text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">
              Need help?
            </p>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                  isActive ? 'bg-sky-50 text-sky-700' : 'text-slate-600 hover:bg-slate-100'
                }`
              }
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full border border-current text-xs font-bold">?</span>
              Help &amp; support
            </NavLink>
          </div>

          <div className="mt-auto hidden items-center gap-3 border-t border-slate-100 pt-6 lg:flex">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-sm font-bold text-amber-800">
              JD
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-slate-800">Jordan Davis</p>
              <p className="text-xs text-slate-500">Patient</p>
            </div>
          </div>
        </aside>

        <main className="min-w-0 flex-1 px-5 py-7 sm:px-8 lg:px-10 lg:py-9">
          <header className="mb-8 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm text-slate-500">Sunday, October 18, 2026</p>
              <h1 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Good morning, Jordan <span aria-hidden="true">👋</span>
              </h1>
            </div>
            <button
              type="button"
              aria-label="Notifications"
              className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:border-sky-200 hover:text-sky-700"
            >
              <Icon name="bell" />
              <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full border-2 border-white bg-rose-500" />
            </button>
          </header>

          <section className="mb-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3" aria-label="Appointment summary">
            <div className="rounded-2xl bg-gradient-to-br from-sky-600 to-blue-700 p-5 text-white shadow-lg shadow-sky-900/10">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-sky-100">Upcoming appointments</p>
                <span className="rounded-xl bg-white/15 p-2"><Icon name="calendar" /></span>
              </div>
              <p className="mt-4 text-3xl font-bold">2</p>
              <p className="mt-1 text-sm text-sky-100">Your next visit is in 2 days</p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-slate-500">Completed visits</p>
                <span className="rounded-xl bg-emerald-50 p-2 text-emerald-600"><Icon name="doctor" /></span>
              </div>
              <p className="mt-4 text-3xl font-bold text-slate-900">8</p>
              <p className="mt-1 text-sm text-slate-500">Keeping your health on track</p>
            </div>
            <div className="hidden rounded-2xl border border-slate-100 bg-white p-5 shadow-sm xl:block">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-slate-500">Care plan</p>
                <span className="rounded-xl bg-violet-50 p-2 text-violet-600"><Icon name="plus" /></span>
              </div>
              <p className="mt-4 text-3xl font-bold text-slate-900">On track</p>
              <p className="mt-1 text-sm text-slate-500">You’re doing great, Jordan</p>
            </div>
          </section>

          <section className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm sm:p-7">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-medium text-sky-700">Your care schedule</p>
                <h2 className="mt-1 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">My appointments</h2>
                <p className="mt-1 text-sm text-slate-500">Keep up with your visits and care team.</p>
              </div>
              <Link
                to="/appointment"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
              >
                <Icon name="plus" className="h-4 w-4" />
                Book an appointment
              </Link>
            </div>

            <div className="mt-7 flex items-center gap-6 border-b border-slate-100">
              {['upcoming', 'past'].map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setFilter(tab)}
                  aria-pressed={filter === tab}
                  className={`border-b-2 px-1 pb-3 text-sm font-semibold capitalize transition ${
                    filter === tab
                      ? 'border-sky-600 text-sky-700'
                      : 'border-transparent text-slate-500 hover:text-slate-800'
                  }`}
                >
                  {tab} <span className="ml-1 text-xs text-slate-400">
                    ({appointments.filter((appointment) => appointment.history === tab).length})
                  </span>
                </button>
              ))}
            </div>

            <div className="mt-5 space-y-4">
              {visibleAppointments.map((appointment) => (
                <article
                  key={appointment.id}
                  className="rounded-2xl border border-slate-200 p-4 transition hover:border-sky-200 hover:shadow-sm sm:p-5"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                    <div className="flex min-w-0 flex-1 items-center gap-4">
                      <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-sm font-bold ${appointment.tone}`}>
                        {appointment.initials}
                      </div>
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-bold text-slate-900">{appointment.doctor}</h3>
                          <span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                            appointment.history === 'past'
                              ? 'bg-slate-100 text-slate-600'
                              : 'bg-emerald-50 text-emerald-700'
                          }`}>
                            {appointment.status}
                          </span>
                        </div>
                        <p className="mt-1 text-sm text-slate-500">{appointment.specialty}</p>
                      </div>
                    </div>
                    <Link
                      to="/appointment"
                      className="inline-flex items-center gap-2 self-start rounded-lg px-3 py-2 text-sm font-semibold text-sky-700 transition hover:bg-sky-50 sm:self-center"
                    >
                      {appointment.history === 'past' ? 'Book again' : 'Manage visit'}
                      <Icon name="arrow" className="h-4 w-4" />
                    </Link>
                  </div>

                  <div className="mt-4 grid gap-3 border-t border-slate-100 pt-4 text-sm text-slate-600 sm:grid-cols-3">
                    <div className="flex items-center gap-2.5">
                      <Icon name="calendar" className="h-4 w-4 shrink-0 text-sky-600" />
                      <span>{appointment.date}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Icon name="clock" className="h-4 w-4 shrink-0 text-sky-600" />
                      <span>{appointment.time}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Icon name={appointment.type.startsWith('Video') ? 'video' : 'pin'} className="h-4 w-4 shrink-0 text-sky-600" />
                      <span>{appointment.type}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {visibleAppointments.length === 0 && (
              <div className="py-12 text-center">
                <p className="font-semibold text-slate-800">No appointments here yet</p>
                <p className="mt-1 text-sm text-slate-500">Book a visit to get started with your care.</p>
              </div>
            )}
          </section>

          <section className="mt-6 flex flex-col items-start justify-between gap-4 rounded-2xl border border-sky-100 bg-sky-50/80 p-5 sm:flex-row sm:items-center sm:px-6">
            <div>
              <p className="font-semibold text-slate-900">Need help with your visit?</p>
              <p className="mt-1 text-sm text-slate-600">Our care team is happy to help you prepare.</p>
            </div>
            <Link to="/contactus" className="inline-flex items-center gap-2 text-sm font-semibold text-sky-700 hover:text-sky-900">
              Contact support <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </section>
        </main>
      </div>
    </div>
  )
}

export default MyAppointments
