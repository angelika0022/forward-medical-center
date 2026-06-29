import { useDeferredValue, useMemo, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { PageMeta } from '../components/PageMeta'
import { doctors } from '../data/siteContent'

export function DoctorsPage() {
  const [query, setQuery] = useState('')
  const deferredQuery = useDeferredValue(query)

  const filteredDoctors = useMemo(() => {
    const normalized = deferredQuery.trim().toLowerCase()

    if (!normalized) {
      return doctors
    }

    return doctors.filter((doctor) =>
      [doctor.name, doctor.role, doctor.focus].some((field) =>
        field.toLowerCase().includes(normalized),
      ),
    )
  }, [deferredQuery])

  return (
    <div className="page-shell">
      <PageMeta
        title="Врачи"
        description="Врачи медицинского центра «Форвард»: специализации, опыт и запись на прием."
      />

      <section className="page-hero">
        <div className="section-heading narrow-heading">
          <h1>Врачи</h1>
          <p>Поиск по фамилии и специальности.</p>
        </div>

        <label className="search-bar">
          <span>Поиск врача</span>
          <input
            type="search"
            placeholder="Например, кардиолог"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>
      </section>

      <section className="doctor-grid">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doctor) => (
            <article className="doctor-card" key={doctor.name}>
              <div className="doctor-avatar" aria-hidden="true">
                {doctor.name
                  .split(' ')
                  .map((part) => part[0])
                  .join('')
                  .slice(0, 2)}
              </div>
              <div className="doctor-body">
                <span className="doctor-role">{doctor.role}</span>
                <h2>{doctor.name}</h2>
                <p>{doctor.focus}</p>
              </div>
              <div className="doctor-meta">
                <span>{doctor.experience}</span>
                <span>{doctor.schedule}</span>
              </div>
              <NavLink className="secondary-button" to="/appointment">
                Записаться
              </NavLink>
            </article>
          ))
        ) : (
          <article className="empty-state">По этому запросу врач не найден. Попробуйте специализацию или фамилию.</article>
        )}
      </section>
    </div>
  )
}
