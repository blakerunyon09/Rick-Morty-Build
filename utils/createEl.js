export default function createEl(name, options={}, ...children){
  let dom = document.createElement(name)

  if(options?.attrs){
    for(let attr of Object.keys(options.attrs)){
      dom.setAttribute(attr, options.attrs[attr])
    }
  }

  if(options?.listeners){
    for(let listener of Object.keys(options.listeners)){
      dom.addEventListener(listener, options.listeners[listener])
    }
  }

  for(let child of children){
    if(typeof child === 'string'){
      dom.append(document.createTextNode(child))
    } else {
      dom.append(child)
    }
  }

  return dom
}
