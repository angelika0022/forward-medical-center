import { NavLink } from 'react-router-dom'
import { AppointmentForm } from '../components/AppointmentForm'
import { PageMeta } from '../components/PageMeta'
import { appointmentSteps, clinicContacts } from '../data/siteContent'

export function AppointmentPage() {
  return (
    <div className="page-shell">
      <PageMeta
        title="Онлайн-запись"
        description="Запись на прием в медицинский центр «Форвард»: форма заявки, контакты регистратуры и порядок подтверждения."
      />

      <section className="page-hero soft-hero">
        <div className="section-heading narrow-heading">
          <h1>Запись на прием</h1>
          <p>Оставьте телефон, и администратор свяжется с вами, чтобы подтвердить запись и подсказать подготовку.</p>
        </div>
      </section>

      <section className="two-column-section">
        <AppointmentForm
          title="Оставить заявку"
          description="Заполните форму, и регистратура перезвонит в рабочее время."
        />

        <aside className="side-panel side-panel-stack">
          <div className="section-heading">
            <h2>Как это работает</h2>
          </div>
          <ul className="check-list">
            {appointmentSteps.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="contact-card">
            <strong>Контакты клиники</strong>
            <p>{clinicContacts.addressShort}</p>
            {clinicContacts.phones.slice(0, 2).map((phone) => (
              <a href={phone.href} key={phone.href}>
                {phone.value}
              </a>
            ))}
          </div>

          <div className="contact-card">
            <strong>Режим работы</strong>
            {clinicContacts.schedule.map((item) => (
              <p key={item.label}>
                {item.label}: {item.value}
              </p>
            ))}
            <p>{clinicContacts.appointmentNote}</p>
          </div>

          <div className="contact-card">
            <strong>О форме записи</strong>
            <p>В текущей версии форма показывает клиентскую валидацию и сценарий успешной отправки без backend-интеграции.</p>
            <div className="footer-actions">
              <NavLink to="/privacy">Политика ПДн</NavLink>
              <NavLink to="/contacts">Контакты</NavLink>
            </div>
          </div>
        </aside>
      </section>
    </div>
  )
}
