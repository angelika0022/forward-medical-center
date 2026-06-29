import { NavLink } from 'react-router-dom'
import { PageMeta } from '../components/PageMeta'
import { aboutHighlights, aboutStats, clinicContacts } from '../data/siteContent'

export function AboutPage() {
  return (
    <div className="page-shell">
      <PageMeta
        title="О клинике"
        description="О клинике и редизайне сайта медицинского центра «Форвард»: структура, приоритеты интерфейса и юридические сведения."
      />

      <section className="page-hero soft-hero">
        <div className="section-heading narrow-heading">
          <h1>О клинике</h1>
          <p>Страница объединяет публичные сведения о клинике и объясняет, какие задачи решает редизайн пациентского интерфейса.</p>
        </div>
      </section>

      <section className="stat-grid">
        {aboutStats.map((item) => (
          <article className="stat-card" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </article>
        ))}
      </section>

      <section className="content-section">
        <div className="section-heading">
          <h2>Что меняет редизайн</h2>
        </div>

        <div className="feature-grid">
          {aboutHighlights.map((item) => (
            <article className="feature-card" key={item.title}>
              <strong>{item.title}</strong>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="two-column-section">
        <article className="content-section content-section-stack">
          <div className="section-heading">
            <h2>Логика структуры</h2>
          </div>
          <p>
            Сайт построен вокруг типового пути пациента: сначала понять, есть ли нужное направление и сколько стоит прием, затем выбрать врача
            и быстро связаться с регистратурой.
          </p>
          <p>
            Поэтому основные разделы вынесены в верхнюю навигацию, а юридические и сервисные страницы доступны из футера и с главной страницы.
            Это снижает число лишних переходов и делает структуру лучше подготовленной к реальной публикации.
          </p>
          <p>
            В текущей версии интерфейс, валидация и контент готовы, но форма записи пока не подключена к backend и медицинской
            информационной системе.
          </p>
        </article>

        <aside className="side-panel side-panel-stack">
          <div className="section-heading">
            <h2>Юридические сведения</h2>
          </div>
          <div className="contact-card">
            <strong>{clinicContacts.legalName}</strong>
            <p>ОГРН {clinicContacts.ogrn}</p>
            <p>Лицензия {clinicContacts.licenseNumber}</p>
            <p>Дата лицензии: {clinicContacts.licenseIssuedAt}</p>
          </div>
          <div className="contact-card">
            <strong>Контакты</strong>
            <p>{clinicContacts.addressFull}</p>
            <a href={clinicContacts.phones[0].href}>{clinicContacts.phones[0].value}</a>
            <a href={clinicContacts.emails[0].href}>{clinicContacts.emails[0].value}</a>
          </div>
          <div className="footer-actions">
            <NavLink className="secondary-button" to="/licenses">
              Документы
            </NavLink>
            <NavLink className="primary-button" to="/appointment">
              Записаться
            </NavLink>
          </div>
        </aside>
      </section>
    </div>
  )
}
