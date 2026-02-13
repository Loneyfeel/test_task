import React from 'react'
import { css } from '@emotion/react'

interface IconProps {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>
  size?: number
  color?: string
}

const BaseIcon: React.FC<IconProps> = ({
                                     Icon,
                                     size = 16,
                                     color = 'currentColor',
                                   }) => {
  return (
    <Icon
      css={css`
        width: ${size}px;
        height: ${size}px;
        display: block;
        color: ${color};
        flex-shrink: 0;
      `}
    />
  )
}

export default BaseIcon
