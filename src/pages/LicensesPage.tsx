import { PageMeta } from '../components/PageMeta'
import { clinicContacts, officialResources } from '../data/siteContent'

export function LicensesPage() {
  return (
    <div className="page-shell">
      <PageMeta
        title="Лицензии"
        description="Лицензии, юридические сведения и официальные ресурсы медицинского центра «Форвард»."
      />

      <section className="page-hero soft-hero">
        <div className="section-heading narrow-heading">
          <h1>Лицензии</h1>
          <p>Сервисная страница собирает юридические и справочные материалы, которые повышают доверие к медицинскому сайту и держат источники в одном месте.</p>
        </div>
      </section>

      <section className="stat-grid">
        <article className="stat-card">
          <strong>{clinicContacts.licenseNumber}</strong>
          <span>номер медицинской лицензии</span>
        </article>
        <article className="stat-card">
          <strong>{clinicContacts.licenseIssuedAt}</strong>
          <span>дата выдачи лицензии</span>
        </article>
        <article className="stat-card">
          <strong>{clinicContacts.ogrn}</strong>
          <span>ОГРН клиники</span>
        </article>
      </section>

      <section className="resource-grid">
        {officialResources.map((resource) => (
          <article className="resource-card" key={resource.href}>
            <strong>{resource.title}</strong>
            <p>{resource.description}</p>
            <a className="text-link" href={resource.href} rel="noreferrer" target="_blank">
              Открыть источник
            </a>
          </article>
        ))}
      </section>
    </div>
  )
}
