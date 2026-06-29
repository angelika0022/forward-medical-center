import { useEffect } from 'react'

const baseTitle = 'Форвард'
const fallbackDescription =
  'Медицинский центр «Форвард» в Уфе: специалисты, диагностика, цены, контакты и запись на прием.'

type PageMetaProps = {
  title: string
  description?: string
}

export function PageMeta({ title, description = fallbackDescription }: PageMetaProps) {
  useEffect(() => {
    const previousTitle = document.title
    const descriptionTag = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    const previousDescription = descriptionTag?.getAttribute('content') ?? fallbackDescription

    document.title = `${title} | ${baseTitle}`
    descriptionTag?.setAttribute('content', description)

    return () => {
      document.title = previousTitle
      descriptionTag?.setAttribute('content', previousDescription)
    }
  }, [description, title])

  return null
}
