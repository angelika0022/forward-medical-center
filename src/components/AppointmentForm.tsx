import { startTransition, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { serviceCategories } from '../data/siteContent'

type AppointmentFormProps = {
  compact?: boolean
  title?: string
  description?: string
}

type FormState = {
  name: string
  phone: string
  category: string
  note: string
}

const initialState: FormState = {
  name: '',
  phone: '',
  category: '',
  note: '',
}

export function AppointmentForm({
  compact = false,
  title = 'Запись на прием',
  description = 'Оставьте контакты, мы перезвоним.',
}: AppointmentFormProps) {
  const [form, setForm] = useState<FormState>(initialState)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [success, setSuccess] = useState<string | null>(null)

  function updateField<Key extends keyof FormState>(key: Key, value: FormState[Key]) {
    setForm((current) => ({ ...current, [key]: value }))
    setErrors((current) => ({ ...current, [key]: undefined }))
  }

  function validate() {
    const nextErrors: Partial<Record<keyof FormState, string>> = {}

    if (form.name.trim().length < 2) {
      nextErrors.name = 'Введите имя, чтобы мы могли к вам обратиться.'
    }

    if (!/^\+?\d[\d\s()-]{9,}$/.test(form.phone.trim())) {
      nextErrors.phone = 'Укажите корректный номер телефона.'
    }

    if (!form.category) {
      nextErrors.category = 'Выберите направление приема.'
    }

    return nextErrors
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextErrors = validate()

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      setSuccess(null)
      return
    }

    startTransition(() => {
      setSuccess('Спасибо. Форма зафиксировала заявку и показала успешное завершение сценария.')
      setForm(initialState)
      setErrors({})
    })
  }

  return (
    <form className={`appointment-form${compact ? ' compact-form' : ''}`} onSubmit={handleSubmit}>
      <div className="section-heading">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      <div className="form-grid">
        <label>
          <span>Имя</span>
          <input
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={(event) => updateField('name', event.target.value)}
            placeholder="Как к вам обращаться"
          />
          {errors.name ? <small>{errors.name}</small> : null}
        </label>

        <label>
          <span>Телефон</span>
          <input
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={(event) => updateField('phone', event.target.value)}
            placeholder="+7 (___) ___-__-__"
          />
          {errors.phone ? <small>{errors.phone}</small> : null}
        </label>

        <label>
          <span>Направление</span>
          <select
            value={form.category}
            onChange={(event) => updateField('category', event.target.value)}
          >
            <option value="" disabled>
              Выберите направление
            </option>
            {serviceCategories.map((category) => (
              <option key={category.slug} value={category.title}>
                {category.title}
              </option>
            ))}
          </select>
          {errors.category ? <small>{errors.category}</small> : null}
        </label>

        <label className="field-span">
          <span>Комментарий</span>
          <textarea
            rows={compact ? 3 : 5}
            value={form.note}
            onChange={(event) => updateField('note', event.target.value)}
            placeholder="Жалобы или удобное время для звонка"
          />
        </label>
      </div>

      <div className="form-actions">
        <button className="primary-button" type="submit">
          Отправить заявку
        </button>
        <div className="form-note-stack">
          <p className="form-note">
            Нажимая кнопку, вы соглашаетесь с{' '}
            <NavLink className="inline-link" to="/privacy">
              политикой обработки персональных данных
            </NavLink>
            .
          </p>
          <p className="form-note form-note-quiet">В этой версии проекта заявка не передается в CRM или медицинскую информационную систему.</p>
        </div>
      </div>

      {success ? (
        <div className="success-message" aria-live="polite">
          {success}
        </div>
      ) : null}
    </form>
  )
}
