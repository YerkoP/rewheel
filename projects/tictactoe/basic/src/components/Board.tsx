import { BoardRegion } from './BoardRegion'
import { useCurrentMark } from '../game/useMark'
import { useEffect, useState } from 'react'

export function Board() {
  const { currentMark, setCurrentMark } = useCurrentMark('x')
  const [ grid, setGrid ] = useState<Array<Array<string | null>>>([
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ])

  useEffect(() => {
    console.log(grid)
    // check for a winner!
    let winner: string | null = null
    // y
    winner = grid[0][0] === grid[1][0] && grid[1][0] === grid[2][0] ? grid[0][0] : null
    winner = grid[0][1] === grid[1][1] && grid[1][1] === grid[2][1] ? grid[0][1] : null
    winner = grid[0][2] === grid[1][2] && grid[1][2] === grid[2][2] ? grid[0][2] : null

    // x
    winner = grid[0][0] === grid[0][1] && grid[0][1] === grid[0][2] ? grid[0][0] : null
    winner = grid[1][0] === grid[1][1] && grid[1][1] === grid[1][2] ? grid[1][0] : null
    winner = grid[2][0] === grid[2][1] && grid[2][1] === grid[2][2] ? grid[2][0] : null

    winner = grid[0][0] === grid[1][1] && grid[1][1] === grid[2][2] ? grid[0][0] : null
    winner = grid[0][2] === grid[1][1] && grid[1][1] === grid[2][0] ? grid[0][2] : null

    if (winner)
      alert(`The winner is ${winner}`)
  }, [grid])

  function handleMarked(region: string) {
    if (region === 'topleft')
      grid[0][0] = currentMark
    if (region === 'top')
      grid[0][1] = currentMark
    if (region === 'topright')
      grid[0][2] = currentMark
    if (region === 'left')
      grid[1][0] = currentMark
    if (region === 'center')
      grid[1][1] = currentMark
    if (region === 'right')
      grid[1][2] = currentMark
    if (region === 'bottomleft')
      grid[2][0] = currentMark
    if (region === 'bottom')
      grid[2][1] = currentMark
    if (region === 'bottomright')
      grid[2][2] = currentMark
    setGrid([...grid])

    if (currentMark === 'x')
      setCurrentMark('o')
    else
      setCurrentMark('x')
  }
  return (
    <div className="grid grid-cols-3 w-96 h-96">
        <BoardRegion onMarked={() => handleMarked('topleft')} current={currentMark} region="topleft" />
        <BoardRegion onMarked={() => handleMarked('top')} current={currentMark} region="top" />
        <BoardRegion onMarked={() => handleMarked('topright')} current={currentMark} region="topright" />
        <BoardRegion onMarked={() => handleMarked('left')} current={currentMark} region="left" />
        <BoardRegion onMarked={() => handleMarked('center')} current={currentMark} region="center" />
        <BoardRegion onMarked={() => handleMarked('right')} current={currentMark} region="right" />
        <BoardRegion onMarked={() => handleMarked('bottomleft')} current={currentMark} region="bottomleft" />
        <BoardRegion onMarked={() => handleMarked('bottom')} current={currentMark} region="bottom" />
        <BoardRegion onMarked={() => handleMarked('bottomright')} current={currentMark} region="bottomright" />
      </div>
  )
}

export default Board