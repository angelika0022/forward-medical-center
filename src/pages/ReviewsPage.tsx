import { PageMeta } from '../components/PageMeta'
import { clinicContacts, reviewItems } from '../data/siteContent'

export function ReviewsPage() {
  return (
    <div className="page-shell">
      <PageMeta
        title="Отзывы"
        description="Страница отзывов и обратной связи для редизайна сайта медицинского центра «Форвард»."
      />

      <section className="page-hero soft-hero">
        <div className="section-heading narrow-heading">
          <h1>Отзывы</h1>
          <p>Здесь показаны типовые формулировки обратной связи, на которых строилась информационная архитектура сайта.</p>
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <h2>Что хотели видеть пациенты</h2>
          <p>Эти карточки не подменяют реальные отзывы, а фиксируют ожидания пользователя от сайта клиники: прозрачный прайс, понятные контакты и короткий путь до записи.</p>
        </div>

        <div className="testimonial-grid">
          {reviewItems.map((item) => (
            <article className="testimonial-card" key={item.title}>
              <span className="testimonial-context">{item.context}</span>
              <strong>{item.title}</strong>
              <p>{item.text}</p>
              <small>{item.author}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="helper-strip">
        <div>
          <h3>Где смотреть официальные сведения</h3>
          <p>Для актуальных отзывов и контактной информации используйте официальный сайт клиники и регистратуру.</p>
        </div>
        <div className="footer-actions">
          <a className="secondary-button" href={clinicContacts.officialReviews} rel="noreferrer" target="_blank">
            Официальные отзывы
          </a>
          <a className="primary-button" href={clinicContacts.phones[0].href}>
            {clinicContacts.phones[0].value}
          </a>
        </div>
      </section>
    </div>
  )
}
