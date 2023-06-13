import { useState, useEffect } from 'react'
import { getImageUrlFromFact } from '../services/images'

export const useCatImageUrl = ({ fact }) => {
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    if (!fact) return

    const threeFirstWords = fact?.split(' ', 3).join(' ')

    getImageUrlFromFact(threeFirstWords).then((url) => setImageUrl(url))
  }, [fact])

  return { imageUrl }
}
