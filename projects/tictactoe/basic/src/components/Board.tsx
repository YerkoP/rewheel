import { BoardRegion } from './BoardRegion'
import { useCurrentMark } from '../game/useMark'

export function Board() {
  const { currentMark, setCurrentMark } = useCurrentMark('x')
  function handleMarked() {
    if (currentMark === 'x')
      setCurrentMark('o')
    else
      setCurrentMark('x')
  }
  return (
    <div className="grid grid-cols-3 w-96 h-96">
        <BoardRegion onMarked={handleMarked} current={currentMark} region="topleft" />
        <BoardRegion onMarked={handleMarked} current={currentMark} region="top" />
        <BoardRegion onMarked={handleMarked} current={currentMark} region="topright" />
        <BoardRegion onMarked={handleMarked} current={currentMark} region="left" />
        <BoardRegion onMarked={handleMarked} current={currentMark} region="center" />
        <BoardRegion onMarked={handleMarked} current={currentMark} region="right" />
        <BoardRegion onMarked={handleMarked} current={currentMark} region="bottomleft" />
        <BoardRegion onMarked={handleMarked} current={currentMark} region="bottom" />
        <BoardRegion onMarked={handleMarked} current={currentMark} region="bottomright" />
      </div>
  )
}

export default Board