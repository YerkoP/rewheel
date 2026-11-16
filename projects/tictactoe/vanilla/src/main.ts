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

let marks: string[] = []
const winnerSlots = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
let isMultiplayer = false

const regionsElements = regions.map(r => grid!.querySelector<HTMLDivElement>(`[data-region="${r}"]`))

regionsElements.forEach(el => {
  el?.addEventListener('click', () => {
    if (el.children.length !== 0)
      return

    // mark the slot
    el.innerHTML = `<span>${currentPlayer}</span>`
    const i = regions.indexOf(el.dataset.region || '')
    marks[i] = currentPlayer

    // check winner
    if (isWinner(currentPlayer))
      return

    // check draw
    if (isDraw())
      return

    if (isMultiplayer) {
      // switch player
      let tmpPlayer = currentPlayer
      currentPlayer = otherPlayer
      otherPlayer = tmpPlayer
    } else {
      // autoplay
      let randomIndex = Math.floor(Math.random() * 9)
      while (marks[randomIndex])
        randomIndex = Math.floor(Math.random() * 9)

      const otherElement = regionsElements[randomIndex]
      otherElement!.innerHTML = `<span>${otherPlayer}</span>`
      marks[randomIndex] = otherPlayer

      // check winner
      if (isWinner(otherPlayer))
        return

      // check draw
      if (isDraw())
        return
    }
  })
})

function isDraw(): boolean {
  if (marks.length === 9 && Array.from(marks).every(m => m === 'x' || m === 'o')) {
    setTimeout(() => {
      alert('It\'s a draw!')

      // reset the game
      regionsElements.forEach(rel => {
        if (rel)
          rel.innerHTML = ''
      })
      marks = []
    }, 0)
    return true
  }
  return false
}

function isWinner(player: string): boolean {
  for (const slot of winnerSlots) {
    if (slot.every(s => marks[s] === player)) {
      setTimeout(() => {
        alert(`${player} wins!`)

        // reset the game
        regionsElements.forEach(rel => {
          if (rel)
            rel.innerHTML = ''
        })
        marks = []
      }, 0)
      return true
    }
  }
  return false
}