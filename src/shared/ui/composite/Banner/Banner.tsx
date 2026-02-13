import React from 'react'
import { css } from '@emotion/react'

interface BannerProps {
  image: string
  align?: 'left' | 'center'
  children?: React.ReactNode
}

const Banner: React.FC<BannerProps> = ({
                                         image,
                                         align = 'left',
                                         children,
                                       }) => {
  return (
    <div
      css={css`
        width: 100%;
        height: 100%;
        padding: 20px;
        background-image: url(${image});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        border-radius: 20px;

        display: flex;
        justify-content: ${align === 'center' ? 'center' : 'flex-start'};
        align-items: center;
        
        transition: width 200ms ease-in-out;
      `}
    >
      {children}
    </div>
  )
}

export default Banner
