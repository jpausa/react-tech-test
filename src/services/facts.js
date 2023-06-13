const { VITE_CATS_FACTS_API_URL } = import.meta.env

export const getRandomFact = async () => {
  const res = await fetch(VITE_CATS_FACTS_API_URL)
  const data = await res.json()
  const { fact } = data
  return fact
}
