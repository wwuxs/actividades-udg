import { UAI_1 } from "./data.js"

loadActivities()

function loadActivities() {
  UAI_1.forEach((mod, i) => {
    const container = document.getElementById(`module-${i+1}`)
    if(i == 0) document.getElementById('uai1-button-more').onclick = () => seeAll(document.getElementById('UAI-1'))

    mod.forEach(act => {
      const element = document.createElement("li")
      const dynamic_img = document.createElement("div")
      element.className = "activity-card"
      dynamic_img.className = "image-container"

      act.media.forEach(image => {
        dynamic_img.innerHTML += `
          <img src="${image}" alt="${act.title}">
        `
      })

      let index = 0
      const imageAnimation = () => {
        const images = [...dynamic_img.children]
        images.forEach(image => {
          image.style.left = `${100*(-index)}%`
        })
        index = (index+1)%images.length
      }

      if(dynamic_img.children.length > 1)
        setInterval(imageAnimation, Math.random()*500+2000)

      element.innerHTML += `
      <p>${act.label}</p>
      <h4>${act.title}</h4>
      `
      element.appendChild(dynamic_img)
      container.appendChild(element)
    })
  })
}

function seeAll(article) {
  if(article.classList.toggle("all")) {
    document.getElementById("uai1-button-more").innerHTML = "ver menos"
  }else {
    document.getElementById("uai1-button-more").innerHTML = "ver más"
  }
}