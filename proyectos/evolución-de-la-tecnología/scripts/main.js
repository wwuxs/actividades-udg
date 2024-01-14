const root = document.getElementById('screens')
const btnPrev = document.getElementById('btn-prev')
const btnNext = document.getElementById('btn-next')

const w = window.innerWidth

btnNext.addEventListener('click', () => root.scrollTo(root.scrollLeft+w, root.scrollTop))
btnPrev.addEventListener('click', () => root.scrollTo(root.scrollLeft-w, root.scrollTop))