import React from 'react'
import {css} from '@emotion/react'

interface TextProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'action'
  weight?: 'regular' | 'bold'
  fontSize?: number
  textColor?: string
}

const BaseText: React.FC<TextProps> = ({
                                     children,
                                     variant = 'primary',
                                     weight = 'regular',
                                     fontSize = 16,
                                     textColor = '#4C4C4C'
                                   }) => {
  const fontWeight = weight === 'bold' ? 700 : 500

  return (
    <div
      css={css`
        font-family: ${variant === 'primary' ? 'SohneBreit-Kraftig, sans-serif' : 'Sohne, sans-serif'};
        font-size: ${fontSize}px;
        font-weight: ${fontWeight};
        color: ${textColor};
        transition: color 200ms ease-in-out;
      `}
    >
      {children}
    </div>
  )
}

export default BaseText
