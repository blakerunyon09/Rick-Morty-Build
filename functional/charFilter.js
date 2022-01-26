import createEl from "../utils/createEl.js"

export default function charInit(characters){
  const filterInput = document.querySelector('#filterCharacters')
  const searchInput = document.querySelector('#searchCharacters')
  const charGrid = document.querySelector('#charGrid').childNodes 
  const filterOptions = []
  
  characters.forEach((char) => {
    if(!filterOptions.includes(char.species)){
      filterOptions.push(char.species)
      filterInput.append(createEl('option', { attrs: { value: char.species } }, char.species))
    }
  })

  filterInput.addEventListener('change', (e) => {
    searchInput.value = '';
    charGrid.forEach((char) => {
      console.log(char.dataset.species)
      if(char.dataset.species === e.target.value || e.target.value === 'all'){
        char.style.display = "flex"
      } else {
        char.style.display = "none"
      }
    })
  })
}