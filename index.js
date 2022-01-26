import fetchCharacters from './utils/fetchCharacters.js'
import charSearch from './functional/charSearch.js'
import charFilter from  './functional/charFilter.js'
import CharGrid from './components/CharGrid.js'
import CharHeader from './components/CharHeader.js'
import CharSidebar from './components/CharSidebar.js'

document.addEventListener('DOMContentLoaded', async () => {
  const characters = await fetchCharacters()
  CharHeader(characters)
  charSearch()
  charFilter(characters)
  CharSidebar(characters)
  CharGrid(characters)
})
