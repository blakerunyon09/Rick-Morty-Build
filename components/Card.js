import createEl from '../utils/createEl.js'

export default function characterCard(character){
  const card = createEl('article', { attrs: { class: 'charCard', 'data-species': character.species }})
  const image = createEl('img', { attrs: { src: character.image, class: 'charImage' }})
  const name = createEl('h3', { attrs: { class: 'charName' }}, character.name)

  card.append(image, name)
  return card
}
