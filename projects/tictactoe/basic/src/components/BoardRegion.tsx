import { useState } from "react"

export type ValidRegion =
  'topleft'
  | 'top'
  | 'topright'
  | 'left'
  | 'center'
  | 'right'
  | 'bottomleft'
  | 'bottom'
  | 'bottomright'

export function BoardRegion({ region }: { region: ValidRegion}) {
  const [mark, setMark] = useState<string | null>(null)

  if (region === 'topleft')
    return <div onClick={e => setMark('x')} className="leading-[0] flex justify-center items-center text-8xl border-b border-e">{mark ? mark : ''}</div>
  if (region === 'top')
    return <div onClick={e => setMark('x')} className="leading-[0] flex justify-center items-center text-8xl border-b border-e border-s">{mark ? mark : ''}</div>
  if (region === 'topright')
    return <div onClick={e => setMark('x')} className="leading-[0] flex justify-center items-center text-8xl border-b border-s">{mark ? mark : ''}</div>
  if (region === 'left')
    return <div onClick={e => setMark('x')} className="leading-[0] flex justify-center items-center text-8xl border-b border-t border-e">{mark ? mark : ''}</div>
  if (region === 'center')
    return <div onClick={e => setMark('x')} className="leading-[0] flex justify-center items-center text-8xl border">{mark ? mark : ''}</div>
  if (region === 'right')
    return <div onClick={e => setMark('x')} className="leading-[0] flex justify-center items-center text-8xl border-b border-s border-t">{mark ? mark : ''}</div>
  if (region === 'bottomleft')
    return <div onClick={e => setMark('x')} className="leading-[0] flex justify-center items-center text-8xl border-e border-t">{mark ? mark : ''}</div>
  if (region === 'bottom')
    return <div onClick={e => setMark('x')} className="leading-[0] flex justify-center items-center text-8xl border-e border-s border-t">{mark ? mark : ''}</div>
  if (region === 'bottomright')
    return <div onClick={e => setMark('x')} className="leading-[0] flex justify-center items-center text-8xl border-s border-t">{mark ? mark : ''}</div>
}
export default BoardRegion