import React from 'react'
import { css } from '@emotion/react'

interface LineProps {
  width?: number
  height?: number
  color?: string
  rotate?: number
}

const Line: React.FC<LineProps> = ({
                                     width = 42,
                                     height = 1,
                                     color = '#EFEEFA',
                                     rotate = 90,
                                   }) => {
  return (
    <div
      css={css`
        width: ${width}px;
        height: ${height}px;
        transform: rotate(${rotate}deg);
        background-color: ${color};
      `}
    />
  )
}

export default Line
