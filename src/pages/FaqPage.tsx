import { NavLink } from 'react-router-dom'
import { PageMeta } from '../components/PageMeta'
import { faqItems } from '../data/siteContent'

export function FaqPage() {
  return (
    <div className="page-shell">
      <PageMeta
        title="FAQ"
        description="Частые вопросы пациентов о записи, стоимости, подготовке к приему и работе сайта."
      />

      <section className="page-hero soft-hero">
        <div className="section-heading narrow-heading">
          <h1>FAQ</h1>
          <p>Ответы на основные вопросы о записи, стоимости, документах и работе формы на сайте.</p>
        </div>
      </section>

      <section className="content-section">
        <div className="faq-grid">
          {faqItems.map((item) => (
            <details className="faq-item" key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="helper-strip">
        <div>
          <h3>Не нашли нужный ответ?</h3>
          <p>Если вопрос связан с подготовкой к исследованию или графиком конкретного врача, лучше сразу позвонить в регистратуру.</p>
        </div>
        <div className="footer-actions">
          <NavLink className="secondary-button" to="/contacts">
            Контакты
          </NavLink>
          <NavLink className="primary-button" to="/appointment">
            Оставить заявку
          </NavLink>
        </div>
      </section>
    </div>
  )
}
