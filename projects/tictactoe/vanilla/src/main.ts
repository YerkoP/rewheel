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

const marks: string[] = []
const winnerSlots = [
  [0, 1, 2],
  [3, 4, 5],
  [9, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

const regionsElements = regions.map(r => grid!.querySelector<HTMLDivElement>(`[data-region="${r}"]`))

regionsElements.forEach(el => {
  el?.addEventListener('click', () => {
    el.innerHTML = `<span>${currentPlayer}</span>`

    // check winner
    const i = regions.indexOf(el.dataset.region || '')
    marks[i] = currentPlayer

    for (const slot of winnerSlots) {
      if (slot.every(s => marks[s] === currentPlayer)) {
        alert(`${currentPlayer} wins!`)
        continue
      }
    }
    console.log(marks)

    // switch player
    let tmpPlayer = currentPlayer
    currentPlayer = otherPlayer
    otherPlayer = tmpPlayer
  })
})
