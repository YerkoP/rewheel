import { BoardRegion } from './BoardRegion'

export function Board() {
  return (
    <div className="grid grid-cols-3 w-96 h-96">
        <BoardRegion region="topleft" />
        <BoardRegion region="top" />
        <BoardRegion region="topright" />
        <BoardRegion region="left" />
        <BoardRegion region="center" />
        <BoardRegion region="right" />
        <BoardRegion region="bottomleft" />
        <BoardRegion region="bottom" />
        <BoardRegion region="bottomright" />
      </div>
  )
}

export default Board