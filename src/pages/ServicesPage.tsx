import { useDeferredValue, useMemo, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { PageMeta } from '../components/PageMeta'
import { serviceCategories } from '../data/siteContent'

export function ServicesPage() {
  const [query, setQuery] = useState('')
  const deferredQuery = useDeferredValue(query)

  const filteredServices = useMemo(() => {
    const normalized = deferredQuery.trim().toLowerCase()

    if (!normalized) {
      return serviceCategories
    }

    return serviceCategories.filter((service) =>
      [service.title, service.description, service.highlights.join(' ')].some((field) =>
        field.toLowerCase().includes(normalized),
      ),
    )
  }, [deferredQuery])

  return (
    <div className="page-shell">
      <PageMeta
        title="Услуги"
        description="Услуги медицинского центра «Форвард»: направления приема, стоимость и запись."
      />

      <section className="page-hero">
        <div className="section-heading narrow-heading">
          <h1>Услуги</h1>
          <p>Поиск по направлениям и процедурам.</p>
        </div>

        <label className="search-bar">
          <span>Поиск направления</span>
          <input
            type="search"
            placeholder="Например, УЗИ или кардиология"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>
      </section>

      <section className="service-grid">
        {filteredServices.length > 0 ? (
          filteredServices.map((service) => (
            <article className="service-card service-card-large" key={service.slug}>
              <div className="service-card-top">
                <span className="service-price">{service.priceFrom}</span>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
              </div>
              <ul>
                {service.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              <NavLink className="secondary-button" to="/appointment">
                Записаться
              </NavLink>
            </article>
          ))
        ) : (
          <article className="empty-state">
            Ничего не найдено. Попробуйте название направления или процедуры.
          </article>
        )}
      </section>
    </div>
  )
}
