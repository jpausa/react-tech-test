import './App.css'
import { useCatImageUrl } from '../hooks/useCatImageUrl'
import { useCatFact } from '../hooks/useCatFact'


const { VITE_CATS_IMAGES_API_URL_PREFIX } = import.meta.env

export const App = () => {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImageUrl({ fact })

  const handleClick = async () => {
    refreshFact()
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
