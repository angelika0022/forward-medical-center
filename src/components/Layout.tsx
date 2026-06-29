import { useEffect, useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { clinicContacts } from '../data/siteContent'
import { CalendarIcon, LogoClusterIcon, PhoneIcon } from './Icons'

const navItems = [
  { to: '/', label: 'Главная' },
  { to: '/about', label: 'О клинике' },
  { to: '/services', label: 'Услуги' },
  { to: '/doctors', label: 'Врачи' },
  { to: '/prices', label: 'Цены' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contacts', label: 'Контакты' },
]

const patientItems = [
  { to: '/appointment', label: 'Запись на прием' },
  { to: '/reviews', label: 'Отзывы' },
  { to: '/licenses', label: 'Лицензии' },
  { to: '/privacy', label: 'Политика ПДн' },
]

const mainPhone = clinicContacts.phones[0]
const extraPhone = clinicContacts.phones[1]
const mainSchedule = clinicContacts.schedule[0]

export function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
    setIsMenuOpen(false)
  }, [location.pathname])

  return (
    <div className="site-shell">
      <div className="site-utility-bar">
        <div className="site-container site-utility-inner">
          <div className="utility-group">
            <span className="utility-plain">{clinicContacts.addressShort}</span>
            <span className="utility-copy">
              {mainSchedule.label}: {mainSchedule.value}
            </span>
          </div>
          <div className="utility-group utility-group-right">
            <a className="utility-link" href={clinicContacts.officialContacts} rel="noreferrer" target="_blank">
              Официальные контакты
            </a>
            <a className="utility-cta" href={clinicContacts.licenseUrl} rel="noreferrer" target="_blank">
              Лицензия
            </a>
          </div>
        </div>
      </div>

      <header className="site-header">
        <div className="site-container site-header-inner">
          <NavLink className="brand-mark" to="/">
            <LogoClusterIcon className="brand-icon" />
            <span className="brand-copy">
              <strong>{clinicContacts.brand}</strong>
              <small>медицинский центр в Уфе</small>
            </span>
          </NavLink>

          <button
            className="menu-toggle"
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-label="Открыть меню"
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={`site-nav${isMenuOpen ? ' site-nav-open' : ''}`}>
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                className={({ isActive }) => `nav-link${isActive ? ' nav-link-active' : ''}`}
                to={item.to}
                end={item.to === '/'}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="header-actions">
            <a className="ghost-button" href={mainPhone.href}>
              <PhoneIcon width={18} height={18} />
              {mainPhone.value}
            </a>
            <NavLink className="primary-button header-button" to="/appointment">
              <CalendarIcon width={18} height={18} />
              Записаться
            </NavLink>
          </div>
        </div>
      </header>

      <main className="site-main">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="site-container footer-grid">
          <div className="footer-brand">
            <NavLink className="brand-mark footer-brand-mark" to="/">
              <LogoClusterIcon className="brand-icon" />
              <span className="brand-copy">
                <strong>{clinicContacts.brand}</strong>
                <small>медицинский центр в Уфе</small>
              </span>
            </NavLink>
            <p>Редизайн пациентского сайта: услуги, врачи, цены, документы и запись в одном потоке.</p>
            <div className="footer-meta">
              <span>{clinicContacts.legalName}</span>
              <span>ОГРН {clinicContacts.ogrn}</span>
              <span>Лицензия {clinicContacts.licenseNumber}</span>
            </div>
          </div>

          <div className="footer-column">
            <strong>Разделы</strong>
            {navItems.slice(1).map((item) => (
              <NavLink key={item.to} to={item.to}>
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="footer-column">
            <strong>Пациентам</strong>
            {patientItems.map((item) => (
              <NavLink key={item.to} to={item.to}>
                {item.label}
              </NavLink>
            ))}
            <a href={clinicContacts.officialSite} rel="noreferrer" target="_blank">
              Официальный сайт
            </a>
          </div>

          <div className="footer-column footer-panel">
            <strong>Контакты</strong>
            <a href={mainPhone.href}>{mainPhone.value}</a>
            <a href={extraPhone.href}>{extraPhone.value}</a>
            <a href={clinicContacts.emails[0].href}>{clinicContacts.emails[0].value}</a>
            <p>{clinicContacts.addressShort}</p>
            {clinicContacts.schedule.map((item) => (
              <p key={item.label}>
                {item.label}: {item.value}
              </p>
            ))}
            <NavLink className="primary-button" to="/appointment">
              <CalendarIcon width={18} height={18} />
              Оставить заявку
            </NavLink>
          </div>
        </div>
      </footer>

      <div className="mobile-actions">
        <a href={mainPhone.href}>Позвонить</a>
        <NavLink to="/appointment">Записаться</NavLink>
      </div>
    </div>
  )
}
