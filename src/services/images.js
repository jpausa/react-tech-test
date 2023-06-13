const { VITE_CATS_IMAGES_API_URL_PREFIX, VITE_CATS_IMAGES_API_URL_SUFFIX } =
  import.meta.env

export const getImageUrlFromFact = async (fact) => {
  const res = await fetch(
    `${VITE_CATS_IMAGES_API_URL_PREFIX}${VITE_CATS_IMAGES_API_URL_SUFFIX}${fact}?size=50&color=red&json=true`
  )
  const data = await res.json()
  const { url } = data
  return url
}
