import { useEffect, useState } from 'react'

const { VITE_CATS_FACTS_API_URL, VITE_CATS_IMAGES_API_URL_PREFIX, VITE_CATS_IMAGES_API_URL_SUFFIX } = import.meta.env

export const App = () => {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    fetch(VITE_CATS_FACTS_API_URL).then(res =>
      res.json()
    ).then(data => {
      const { fact } = data
      setFact(fact)

      const threeFirstWords = fact?.split(' ', 3).join(' ')

      fetch(`${VITE_CATS_IMAGES_API_URL_PREFIX}${VITE_CATS_IMAGES_API_URL_SUFFIX}${threeFirstWords}?size=50&color=red&json=true`).then(res => res.json()).then(data => {
        const { url } = data
        setImageUrl(url)
      })
    })
  }, [])

  return (
    <main>
      <h1> Cats app </h1>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={`${VITE_CATS_IMAGES_API_URL_PREFIX}${imageUrl}`} alt='An image of a cat from cataas.com' />}
    </main>
  )
}
