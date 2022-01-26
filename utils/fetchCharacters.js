import { API_URL } from "./globals.js"

export default async function fetchCharacters(){
  const data = await fetch(API_URL)
  const {results: characters} = await data.json()
  return characters
}
