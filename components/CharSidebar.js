import createEl from "../utils/createEl.js"

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

export default function CharSidebar(characters){
  const accordion = document.querySelector('#charAccordion')

  characters.forEach((char) => {
    const tab = 
    createEl(
      'div', 
      { 
        attrs: { class: 'accordion-tab' }, 
        listeners: { click: openAccordion } 
      }, 
      char.name)
    const summary = createEl('div', { attrs: { class: 'accordion-summary' } }, createEl('div', {}, lorem))
  
    function openAccordion(e) {
      e.target.nextSibling.classList.toggle('active')
      accordion.childNodes.forEach(acc => {
        if(acc !== e.target.nextSibling){
          acc.classList.remove('active')
        }
      })
    }

    accordion.append(tab, summary)
  })
}
