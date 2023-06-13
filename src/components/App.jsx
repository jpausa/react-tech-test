import { useEffect, useState } from 'react'
import { getRandomFact } from '../services/facts'
import { getImageUrlFromFact } from '../services/images'

const { VITE_CATS_IMAGES_API_URL_PREFIX } = import.meta.env

export const App = () => {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    getRandomFact().then(newFact => setFact(newFact))
  }, [])

  useEffect(() => {
    if (!fact) return

    const threeFirstWords = fact?.split(' ', 3).join(' ')

    getImageUrlFromFact(threeFirstWords).then(url => setImageUrl(url))
  }, [fact])

  const handleClick = async () => {
    const newFact = await getRandomFact()
    setFact(newFact)
  }

  return (
    <main>
      <h1> Cats app </h1>
      <button onClick={handleClick}>Get new random fact</button>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={`${VITE_CATS_IMAGES_API_URL_PREFIX}${imageUrl}`} alt='An image of a cat from cataas.com' />}
    </main>
  )
}
