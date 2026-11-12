import { useState } from 'react'

export function useCurrentMark(current: string) {
  const [currentMark, setCurrentMark] = useState(current)
  return {
    currentMark,
    setCurrentMark
  }
}