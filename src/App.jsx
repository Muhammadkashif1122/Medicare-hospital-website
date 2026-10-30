import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import About from './components/pages/About'
import Appointment from './components/pages/Appointment'
import Contact from './components/pages/Contact'
import Doctors from './components/pages/Doctors'
import Home from './components/pages/Home'
import Login from './components/pages/Login'
import MyAppointments from './components/pages/MyAppointments'
import Register from './components/pages/Register'
import Services from './components/pages/Services'
import RootLayout from './components/common/RootLayout'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="my-appointments" element={<MyAppointments />} />
      <Route element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="doctors" element={<Doctors />} />
        <Route path="contact" element={<Contact />} />
        <Route path="appointment" element={<Appointment />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  </BrowserRouter>
)

export default App
