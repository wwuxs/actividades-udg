const root = document.getElementById('screens')
const btnPrev = document.getElementById('btn-prev')
const btnNext = document.getElementById('btn-next')

let index = Math.floor(root.scrollLeft / innerWidth);

const goToIndex = (value) => {
  if(value + index <= 20 && value + index >= 0) index += value 
  root.scrollTo(index * innerWidth, 0)
}

root.addEventListener('resize', () => {
  index = Math.floor(root.scrollLeft / innerWidth)
})

btnNext.addEventListener('click', () => goToIndex(1))
btnPrev.addEventListener('click', () => goToIndex(-1))