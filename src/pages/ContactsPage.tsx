import { NavLink } from 'react-router-dom'
import { PageMeta } from '../components/PageMeta'
import { clinicContacts } from '../data/siteContent'

export function ContactsPage() {
  return (
    <div className="page-shell">
      <PageMeta
        title="Контакты"
        description="Контакты медицинского центра «Форвард»: адрес, телефоны регистратуры, официальный сайт и режим работы."
      />

      <section className="page-hero soft-hero">
        <div className="section-heading narrow-heading">
          <h1>Контакты</h1>
          <p>{clinicContacts.addressShort}</p>
        </div>
      </section>

      <section className="contact-layout">
        <div className="contact-stack">
          <article className="contact-card">
            <strong>Адрес</strong>
            <p>{clinicContacts.addressFull}</p>
            <a href={clinicContacts.mapUrl} rel="noreferrer" target="_blank">
              Открыть карту
            </a>
          </article>

          <article className="contact-card">
            <strong>Телефоны</strong>
            {clinicContacts.phones.map((phone) => (
              <a href={phone.href} key={phone.href}>
                {phone.label}: {phone.value}
              </a>
            ))}
          </article>

          <article className="contact-card">
            <strong>Электронная почта</strong>
            {clinicContacts.emails.map((email) => (
              <a href={email.href} key={email.href}>
                {email.label}: {email.value}
              </a>
            ))}
          </article>

          <article className="contact-card">
            <strong>Режим работы</strong>
            {clinicContacts.schedule.map((item) => (
              <p key={item.label}>
                {item.label}: {item.value}
              </p>
            ))}
            <p>{clinicContacts.appointmentNote}</p>
          </article>
        </div>

        <div className="map-card">
          <div className="map-surface">
            <div className="map-marker">
              <span />
              <strong>Медицинский центр «Форвард»</strong>
            </div>
          </div>
          <div className="map-meta">
            <strong>Полезные ссылки</strong>
            <p>В текущем редизайне карта показана как визуальный блок, а актуальные сведения дублируются ссылками на официальные ресурсы.</p>
            <div className="footer-actions">
              <a href={clinicContacts.officialContacts} rel="noreferrer" target="_blank">
                Официальные контакты
              </a>
              <a href={clinicContacts.officialSite} rel="noreferrer" target="_blank">
                Официальный сайт
              </a>
              <NavLink to="/appointment">Оставить заявку</NavLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
