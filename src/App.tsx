import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { AboutPage } from './pages/AboutPage'
import { AppointmentPage } from './pages/AppointmentPage'
import { ContactsPage } from './pages/ContactsPage'
import { DoctorsPage } from './pages/DoctorsPage'
import { FaqPage } from './pages/FaqPage'
import { HomePage } from './pages/HomePage'
import { LicensesPage } from './pages/LicensesPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { PricesPage } from './pages/PricesPage'
import { PrivacyPage } from './pages/PrivacyPage'
import { ReviewsPage } from './pages/ReviewsPage'
import { ServicesPage } from './pages/ServicesPage'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/doctors" element={<DoctorsPage />} />
        <Route path="/prices" element={<PricesPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/appointment" element={<AppointmentPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/licenses" element={<LicensesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
