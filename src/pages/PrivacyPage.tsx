import { PageMeta } from '../components/PageMeta'
import { clinicContacts, privacySections } from '../data/siteContent'

export function PrivacyPage() {
  return (
    <div className="page-shell">
      <PageMeta
        title="Политика ПДн"
        description="Раздел о персональных данных и форме записи медицинского центра «Форвард»."
      />

      <section className="page-hero soft-hero">
        <div className="section-heading narrow-heading">
          <h1>Политика ПДн</h1>
          <p>Эта страница объясняет, какие данные собирает форма и какие условия обязательны для боевого медицинского сайта.</p>
        </div>
      </section>

      <section className="policy-grid">
        {privacySections.map((section) => (
          <article className="policy-card" key={section.title}>
            <strong>{section.title}</strong>
            <p>{section.description}</p>
            <ul className="check-list">
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="helper-strip">
        <div>
          <h3>Официальная политика клиники</h3>
          <p>Актуальная правовая информация публикуется на официальном сайте медицинского центра.</p>
        </div>
        <div className="footer-actions">
          <a className="secondary-button" href={clinicContacts.privacyUrl} rel="noreferrer" target="_blank">
            Официальная политика
          </a>
          <a className="primary-button" href={clinicContacts.licenseUrl} rel="noreferrer" target="_blank">
            Лицензия
          </a>
        </div>
      </section>
    </div>
  )
}
