import React from 'react'
import { css } from '@emotion/react'
import logo from '@/assets/icons/logo.svg'

interface LogoV1Props {
  src: string
  gap?: number
  height?: number
  heightText?: number
}

const Logo: React.FC<LogoV1Props> = ({ src, gap = 0, height = 32, heightText = 22 }) => {
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        gap: ${gap}px;
      `}
    >
      <img
        src={logo}
        alt="logo"
        css={css`
          height: ${height}px;
        `}
      />

      <img
        src={src}
        alt="logo"
        css={css`
          height: ${heightText}px;
        `}
      />
    </div>
  )
}

export default Logo
