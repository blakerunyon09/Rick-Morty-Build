
export default function CharSearch() {
  const searchInput = document.querySelector('#searchCharacters')
  const filterInput = document.querySelector('#filterCharacters')
  const charGrid = document.querySelector('#charGrid').childNodes
  searchInput.addEventListener('keyup', (e) => {
    filterInput.value = "all"
    charGrid.forEach((card) =>{
      card.style.display = "flex"
      if(!card.innerText.toLowerCase().includes(e.target.value.toLowerCase())){
        card.style.display = "none"
      }
    })
  })
}