const header = document.getElementById("main-header")
const menu = document.getElementById("main-menu")

const menuButton = document.getElementById("menu-button")
menuButton.addEventListener("click", toggleMenu)
menu.children[0].addEventListener("click", toggleMenu)

let initHeaderPosition = 0
updateHeaderEvent()
window.addEventListener("scroll", () => updateHeaderEvent())

function toggleMenu() {
  return menu.classList.toggle("active")
}

function updateHeaderEvent(is_active=true) {
  const displacement = scrollY
  if (is_active) header.classList.toggle("active", (initHeaderPosition >= displacement || displacement <= 40))
  header.classList.toggle("with-bg", (displacement > 0))
  initHeaderPosition = displacement
}