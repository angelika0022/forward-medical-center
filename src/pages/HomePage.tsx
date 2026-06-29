import { NavLink } from 'react-router-dom'
import { AppointmentForm } from '../components/AppointmentForm'
import { ArrowUpRightIcon, CheckIcon, ClockIcon, HeartPulseIcon, ShieldIcon } from '../components/Icons'
import { PageMeta } from '../components/PageMeta'
import {
  appointmentSteps,
  clinicBenefits,
  clinicContacts,
  clinicFacts,
  doctors,
  faqItems,
  priceItems,
  reviewItems,
  serviceCategories,
} from '../data/siteContent'

const featuredDoctors = doctors.slice(0, 3)
const featuredServices = serviceCategories.slice(0, 4)
const spotlightPrices = priceItems.slice(0, 4)

const heroChecklist = [
  'Выбор направления без длинного меню',
  'Цены и контакты рядом с действием',
  'Подтверждение записи по телефону',
]

function getInitials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
}

export function HomePage() {
  return (
    <div className="page-shell">
      <PageMeta
        title="Главная"
        description="Редизайн пациентского сайта медицинского центра «Форвард»: услуги, врачи, цены, документы и быстрая запись на прием."
      />

      <section className="hero-section">
        <div className="hero-copy">
          <h1>Медицинский центр в Уфе</h1>
          <p>Врачи, диагностика, цены, документы и запись на прием в одном сценарии без лишних переходов.</p>

          <div className="hero-actions">
            <NavLink className="primary-button" to="/appointment">
              Записаться на прием
            </NavLink>
            <NavLink className="secondary-button" to="/services">
              Смотреть услуги
            </NavLink>
          </div>

          <div className="hero-facts">
            {clinicFacts.map((item) => (
              <article key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-status-chip">
            <ClockIcon width={18} height={18} />
            {clinicContacts.schedule[0].label}: {clinicContacts.schedule[0].value}
          </div>

          <div className="hero-visual-stage">
            <div className="hero-stage-orb hero-stage-orb-large" />
            <div className="hero-stage-orb hero-stage-orb-small" />

            <article className="hero-stage-card hero-stage-card-main">
              <strong>Запись на прием без лишних шагов</strong>
              <ul className="hero-check-list">
                {heroChecklist.map((item) => (
                  <li key={item}>
                    <CheckIcon width={16} height={16} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="hero-stage-card hero-stage-card-side">
              <HeartPulseIcon width={22} height={22} />
              <div>
                <strong>Официальные данные под рукой</strong>
                <p>Контакты, лицензия и политика обработки данных вынесены в отдельные разделы сайта.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading section-heading-split">
          <div>
            <h2>Коротко о проекте</h2>
            <p>Главный акцент редизайна сделан на сценарии пациента: выбрать врача, увидеть цену и быстро связаться с клиникой.</p>
          </div>
          <NavLink className="text-link" to="/about">
            О клинике и редизайне
            <ArrowUpRightIcon width={18} height={18} />
          </NavLink>
        </div>

        <div className="feature-grid">
          {clinicBenefits.map((item) => (
            <article className="feature-card" key={item.title}>
              <ShieldIcon width={22} height={22} />
              <strong>{item.title}</strong>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading section-heading-split">
          <div>
            <h2>Основные направления</h2>
          </div>
          <NavLink className="text-link" to="/services">
            Все услуги
            <ArrowUpRightIcon width={18} height={18} />
          </NavLink>
        </div>

        <div className="service-grid service-grid-featured">
          {featuredServices.map((service) => (
            <article className="service-card service-card-featured" key={service.slug}>
              <span className="service-price">{service.priceFrom}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>
                {service.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section split-section doctor-showcase">
        <div className="section-heading">
          <h2>Врачи</h2>
          <p>Подборка специалистов по наиболее востребованным направлениям.</p>
          <NavLink className="text-link" to="/doctors">
            Все врачи
            <ArrowUpRightIcon width={18} height={18} />
          </NavLink>
        </div>

        <div className="doctor-preview-list">
          {featuredDoctors.map((doctor) => (
            <article className="doctor-preview-card" key={doctor.name}>
              <div className="doctor-avatar" aria-hidden="true">
                {getInitials(doctor.name)}
              </div>
              <div>
                <span className="doctor-role">{doctor.role}</span>
                <h3>{doctor.name}</h3>
                <p>{doctor.focus}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section steps-section">
        <div className="section-heading">
          <h2>Как записаться</h2>
        </div>

        <div className="steps-grid">
          {appointmentSteps.map((step, index) => (
            <article className="step-card" key={step}>
              <span className="step-index">{index + 1}</span>
              <p>{step}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section price-highlight-section">
        <div className="section-heading section-heading-split">
          <div>
            <h2>Цены</h2>
          </div>
          <NavLink className="text-link" to="/prices">
            Весь прайс
            <ArrowUpRightIcon width={18} height={18} />
          </NavLink>
        </div>

        <div className="price-highlight-grid">
          {spotlightPrices.map((item) => (
            <article className="price-highlight-card" key={`${item.category}-${item.service}`}>
              <span>{item.category}</span>
              <strong>{item.service}</strong>
              <b>{item.price}</b>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading section-heading-split">
          <div>
            <h2>Отзывы и обратная связь</h2>
            <p>В прототипе выделены типовые ожидания пациентов, которые напрямую влияют на структуру интерфейса.</p>
          </div>
          <NavLink className="text-link" to="/reviews">
            Страница отзывов
            <ArrowUpRightIcon width={18} height={18} />
          </NavLink>
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

      <section className="content-section faq-section">
        <div className="section-heading section-heading-split">
          <div>
            <h2>Частые вопросы</h2>
          </div>
          <NavLink className="text-link" to="/faq">
            Весь FAQ
            <ArrowUpRightIcon width={18} height={18} />
          </NavLink>
        </div>

        <div className="faq-grid">
          {faqItems.slice(0, 4).map((item) => (
            <details className="faq-item" key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="helper-strip">
        <div>
          <h3>Документы и политика обработки данных</h3>
          <p>Для проекта добавлены отдельные сервисные страницы с лицензией, политикой и внешними официальными источниками.</p>
        </div>
        <div className="footer-actions">
          <NavLink className="secondary-button" to="/licenses">
            Лицензии
          </NavLink>
          <NavLink className="primary-button" to="/privacy">
            Политика ПДн
          </NavLink>
        </div>
      </section>

      <section className="content-section appointment-section">
        <AppointmentForm
          compact
          title="Запись на прием"
          description="Оставьте телефон, и администратор свяжется с вами для подтверждения времени."
        />
      </section>
    </div>
  )
}
