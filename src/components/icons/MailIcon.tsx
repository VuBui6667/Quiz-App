import React from 'react'

type Props = {
  width?: number
  height?: number
  color?: string
}

const MailIcon = ({ width = 24, height = 24, color = "white" }: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
      <path d="M2.24283 6.85419L11.4895 1.30843C11.8062 1.11848 12.2019 1.11855 12.5185 1.30862L21.7573 6.85416C21.9079 6.94453 22 7.10726 22 7.28286V19.9998C22 20.5521 21.5523 20.9998 21 20.9998H3C2.44772 20.9998 2 20.5521 2 19.9998V7.28298C2 7.10732 2.09218 6.94454 2.24283 6.85419ZM18.3456 8.24367L12.0606 13.6827L5.64722 8.23752L4.35278 9.76213L12.0731 16.3169L19.6544 9.75599L18.3456 8.24367Z" fill={color} />
    </svg>
  )
}

export default MailIcon