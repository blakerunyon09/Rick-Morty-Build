import Card from './Card.js'

export default function CharGrid(characters){
  const charGrid = document.querySelector('#charGrid')
  characters.forEach((character) => {
    charGrid.append(Card(character))
  })
}