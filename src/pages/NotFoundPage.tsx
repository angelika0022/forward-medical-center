import { NavLink } from 'react-router-dom'
import { PageMeta } from '../components/PageMeta'

export function NotFoundPage() {
  return (
    <div className="page-shell">
      <PageMeta title="404" description="Страница не найдена." />

      <section className="page-hero soft-hero">
        <div className="section-heading narrow-heading">
          <h1>404</h1>
          <p>Такой страницы нет. Вернитесь на главную или перейдите к услугам, контактам и записи.</p>
        </div>
      </section>

      <section className="helper-strip">
        <div>
          <h3>Куда перейти дальше</h3>
          <p>Навигация ниже помогает быстро вернуться в основной сценарий пациента.</p>
        </div>
        <div className="footer-actions">
          <NavLink className="secondary-button" to="/">
            Главная
          </NavLink>
          <NavLink className="secondary-button" to="/services">
            Услуги
          </NavLink>
          <NavLink className="secondary-button" to="/contacts">
            Контакты
          </NavLink>
          <NavLink className="primary-button" to="/appointment">
            Запись
          </NavLink>
        </div>
      </section>
    </div>
  )
}
