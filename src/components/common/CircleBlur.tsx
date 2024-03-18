import React from 'react'
import { Box } from '@mui/material'

type Props = {
  color: string
  size: number
  left?: number
  top?: number
  right?: number
  bottom?: number
  blur?: number
  zIndex?: number
}

const CircleBlur = ({ color, size, left, top, right, bottom, blur = 40, zIndex = 0 }: Props) => {
  const styles = {
    position: "absolute",
    width: size,
    height: size,
    borderRadius: "100%",
    background: color,
    filter: `blur(${blur}px)`,
    zIndex,
    ...(left !== undefined ? { left } : {}),
    ...(right !== undefined ? { right } : {}),
    ...(top !== undefined ? { top } : {}),
    ...(bottom !== undefined ? { bottom } : {}),
  };
  return (
    <Box sx={styles} />
  )
}

export default CircleBlur