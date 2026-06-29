import fs from 'node:fs/promises'
import path from 'node:path'
import { chromium } from 'playwright'

const baseUrl = process.env.BASE_URL ?? 'http://127.0.0.1:4176'
const outputDir = path.resolve('artifacts', 'usability')
const outputFile = path.join(outputDir, 'results.json')

function now() {
  return new Date().toISOString()
}

async function measure(name, run) {
  const startedAt = Date.now()
  await run()
  return {
    name,
    status: 'passed',
    durationMs: Date.now() - startedAt,
  }
}

const browser = await chromium.launch({ headless: true })
const results = {
  generatedAt: now(),
  baseUrl,
  scenarios: [],
}

try {
  const desktop = await browser.newContext({ viewport: { width: 1440, height: 900 } })
  const desktopPage = await desktop.newPage()

  // Warm up the local preview so the first measured flow does not include cold-start noise.
  await desktopPage.goto(baseUrl, { waitUntil: 'networkidle' })
  await desktopPage.goto('about:blank')

  results.scenarios.push(await measure('desktop-home-to-services', async () => {
    await desktopPage.goto(baseUrl, { waitUntil: 'networkidle' })
    await desktopPage.click('a[href="/services"]')
    await desktopPage.waitForURL('**/services')
    await desktopPage.getByRole('heading', { name: 'Услуги' }).waitFor()
    await desktopPage.getByText('Кардиология').waitFor()
  }))

  results.scenarios.push(await measure('desktop-doctor-to-appointment', async () => {
    await desktopPage.goto(`${baseUrl}/doctors`, { waitUntil: 'networkidle' })
    await desktopPage.getByText('Невролог').waitFor()
    await desktopPage.getByRole('link', { name: 'Записаться' }).first().click()
    await desktopPage.waitForURL('**/appointment')
    await desktopPage.getByRole('heading', { name: 'Запись на прием' }).waitFor()
  }))

  results.scenarios.push(await measure('desktop-price-search', async () => {
    await desktopPage.goto(`${baseUrl}/prices`, { waitUntil: 'networkidle' })
    await desktopPage.getByRole('searchbox').fill('кардиолог')
    await desktopPage.getByText('Первичный прием кардиолога').waitFor()
    await desktopPage.getByText('1 900 ₽').waitFor()
  }))

  results.scenarios.push(await measure('desktop-appointment-validation-and-success', async () => {
    await desktopPage.goto(`${baseUrl}/appointment`, { waitUntil: 'networkidle' })
    await desktopPage.getByRole('button', { name: 'Отправить заявку' }).click()
    await desktopPage.getByText('Введите имя, чтобы мы могли к вам обратиться.').waitFor()
    await desktopPage.getByText('Укажите корректный номер телефона.').waitFor()
    await desktopPage.getByText('Выберите направление приема.').waitFor()
    await desktopPage.getByLabel('Имя').fill('Тестовый пациент')
    await desktopPage.getByLabel('Телефон').fill('+7 (999) 123-45-67')
    await desktopPage.getByLabel('Направление').selectOption({ label: 'Кардиология' })
    await desktopPage.getByLabel('Комментарий').fill('Нужна запись на следующую неделю')
    await desktopPage.getByRole('button', { name: 'Отправить заявку' }).click()
    await desktopPage.getByText('Спасибо. Форма зафиксировала заявку и показала успешное завершение сценария.').waitFor()
  }))

  results.scenarios.push(await measure('desktop-contacts', async () => {
    await desktopPage.goto(`${baseUrl}/contacts`, { waitUntil: 'networkidle' })
    await desktopPage.getByRole('heading', { name: 'Контакты' }).waitFor()
    await desktopPage.getByText('450064, Республика Башкортостан, г. Уфа, ул. Мира, 13, корпус 1').waitFor()
    await desktopPage.getByRole('link', { name: /Регистратура: \+7 \(347\) 216-44-75/ }).waitFor()
  }))

  await desktop.close()

  const mobile = await browser.newContext({
    viewport: { width: 390, height: 844 },
    isMobile: true,
    hasTouch: true,
  })
  const mobilePage = await mobile.newPage()

  await mobilePage.goto(baseUrl, { waitUntil: 'networkidle' })
  await mobilePage.goto('about:blank')

  results.scenarios.push(await measure('mobile-quick-actions', async () => {
    await mobilePage.goto(baseUrl, { waitUntil: 'networkidle' })
    await mobilePage.getByRole('link', { name: 'Позвонить' }).waitFor()
    await mobilePage.getByRole('link', { name: 'Записаться' }).last().click()
    await mobilePage.waitForURL('**/appointment')
    await mobilePage.getByRole('heading', { name: 'Запись на прием' }).waitFor()
  }))

  results.scenarios.push(await measure('mobile-menu', async () => {
    await mobilePage.goto(baseUrl, { waitUntil: 'networkidle' })
    await mobilePage.getByRole('button', { name: 'Открыть меню' }).click()
    await mobilePage.locator('.site-nav-open').getByRole('link', { name: 'FAQ' }).click()
    await mobilePage.waitForURL('**/faq')
    await mobilePage.getByRole('heading', { name: 'FAQ' }).waitFor()
  }))

  await mobile.close()

  await fs.mkdir(outputDir, { recursive: true })
  await fs.writeFile(outputFile, JSON.stringify(results, null, 2))
  console.log(JSON.stringify(results, null, 2))
} catch (error) {
  const failedResults = {
    ...results,
    status: 'failed',
    error: error instanceof Error ? error.message : String(error),
  }
  await fs.mkdir(outputDir, { recursive: true })
  await fs.writeFile(outputFile, JSON.stringify(failedResults, null, 2))
  console.error(JSON.stringify(failedResults, null, 2))
  process.exitCode = 1
} finally {
  await browser.close()
}
