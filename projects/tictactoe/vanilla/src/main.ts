import './style.css'

let currentPlayer = 'x'
let otherPlayer = 'o'

const grid = document.querySelector<HTMLDivElement>('.grid')

const regions = [
  'topleft',
  'top',
  'topright',
  'left',
  'center',
  'right',
  'bottomleft',
  'bottom',
  'bottomright'
]

const regionsElements = regions.map(r => grid!.querySelector<HTMLDivElement>(`[data-region="${r}"]`))

regionsElements.forEach(el => {
  el?.addEventListener('click', () => {
    el.innerHTML = `<span>${currentPlayer}</span>`

    // switch player
  let tmpPlayer = currentPlayer
  currentPlayer = otherPlayer
  otherPlayer = tmpPlayer
  })
})
