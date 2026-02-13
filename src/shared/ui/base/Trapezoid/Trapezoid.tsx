import React from 'react'

interface TrapezoidProps {
  width?: number
  height?: number
  color?: string
}

const Trapezoid: React.FC<TrapezoidProps> = ({
                                               width = 74,
                                               height = 3,
                                               color = '#5146C1',
                                             }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 74 3"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      style={{ display: 'block', transition: 'height 100ms ease' }}
    >
      <path
        d="M7 0L2.42016 0C1.84284 6.96182e-05 1.31071 0.352652 1.02898 0.921679L0 3L7 3V0Z"
        fill={color}
      />
      <rect
        width="60"
        height="3"
        transform="matrix(1 0 0 -1 7 3)"
        fill={color}
      />
      <path
        d="M67 0H71.5798C72.1572 6.96182e-05 72.6893 0.352652 72.971 0.921679L74 3H67V0Z"
        fill={color}
      />
    </svg>
  )
}

export default Trapezoid
