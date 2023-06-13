// @ts-check
import { test, expect } from '@playwright/test'
import 'dotenv/config'

const { VITE_LOCALHOST_URL, VITE_CATS_IMAGES_API_URL_PREFIX } = process.env

test('page has title, paragraph text and image url', async ({ page }) => {
  // @ts-ignore
  await page.goto(VITE_LOCALHOST_URL)

  const h2 = await page.getByRole('heading')
  const h2Text = await h2.textContent()
  const paragraph = await page.getByRole('paragraph')
  const paragraphText = await paragraph.textContent()
  const image = await page.getByRole('img')
  const imageUrl = await image.getAttribute('src')

  await expect(h2Text?.length).toBeGreaterThan(0)
  await expect(paragraphText?.length).toBeGreaterThan(0)
  await expect(
    // @ts-ignore
    imageUrl?.startsWith(VITE_CATS_IMAGES_API_URL_PREFIX)
  ).toBeTruthy()
})
