import Card from "./Card.js";

export default function CharHeader(characters){
  const gallery = document.querySelector('#charGallery')
  const backButton = document.querySelector('#galleryControls').childNodes[1]
  const playButton = document.querySelector('#galleryControls').childNodes[3]
  const nextButton = document.querySelector('#galleryControls').childNodes[5]
  const timer = 500;
  let imgIndex = 0;
  let intervalOn = true;

  characters.forEach((char) => {
    const card = Card(char)
    card.style.display = "none"
    gallery.append(card)
  })

  gallery.firstChild.style.display = "flex"

  let interval = setInterval(nextImage, timer)

  function nextImage(){
    imgIndex + 1 === gallery.childNodes.length ? imgIndex = 0 : imgIndex++
    gallery.childNodes[imgIndex].style.display = "flex"
    gallery.childNodes[imgIndex === 0 ? gallery.childNodes.length - 1 : imgIndex - 1].style.display = "none"
  }

  function previousImage(){
    imgIndex === 0 ? imgIndex = gallery.childNodes.length - 1 : imgIndex--
    gallery.childNodes[imgIndex].style.display = "flex";
    gallery.childNodes[imgIndex === gallery.childNodes.length - 1 ? 0 : imgIndex + 1].style.display = "none";
  }

  playButton.addEventListener('click', () => {
    if(intervalOn){
      clearInterval(interval)
      playButton.innerText = "Play"
      intervalOn = false
    } else {
      interval = setInterval(nextImage, timer)
      playButton.innerText = "Pause"
      intervalOn = true
    }
  })

  nextButton.addEventListener('click', () => {
      clearInterval(interval)
      nextImage()
      intervalOn = false
      playButton.innerText = "Play"
  })

  backButton.addEventListener('click', () => {
    clearInterval(interval)
    previousImage()
    intervalOn = false
    playButton.innerText = "Play"
  })

}
