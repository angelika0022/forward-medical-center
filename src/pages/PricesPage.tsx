import { useDeferredValue, useMemo, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { PageMeta } from '../components/PageMeta'
import { priceItems } from '../data/siteContent'

export function PricesPage() {
  const [query, setQuery] = useState('')
  const deferredQuery = useDeferredValue(query)

  const filteredItems = useMemo(() => {
    const normalized = deferredQuery.trim().toLowerCase()

    if (!normalized) {
      return priceItems
    }

    return priceItems.filter((item) =>
      [item.category, item.service, item.price].some((field) =>
        field.toLowerCase().includes(normalized),
      ),
    )
  }, [deferredQuery])

  return (
    <div className="page-shell">
      <PageMeta
        title="Цены"
        description="Цены на прием и диагностику в медицинском центре «Форвард»."
      />

      <section className="page-hero">
        <div className="section-heading narrow-heading">
          <h1>Цены</h1>
          <p>Поиск по услугам и направлениям.</p>
        </div>
        <label className="search-bar">
          <span>Поиск услуги</span>
          <input
            type="search"
            placeholder="Например, ЭКГ или эндокринолог"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>
      </section>

      <section className="price-table-wrapper">
        <div className="price-table-head">
          <span>Категория</span>
          <span>Услуга</span>
          <span>Стоимость</span>
        </div>
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <article className="price-row" key={`${item.category}-${item.service}`}>
              <span>{item.category}</span>
              <strong>{item.service}</strong>
              <b>{item.price}</b>
            </article>
          ))
        ) : (
          <article className="empty-state">По этому запросу ничего не найдено. Попробуйте другое название услуги.</article>
        )}
      </section>

      <section className="helper-strip">
        <p>Нужна помощь с выбором услуги или врача? Оставьте заявку.</p>
        <NavLink className="primary-button" to="/appointment">
          Оставить заявку
        </NavLink>
      </section>
    </div>
  )
}
