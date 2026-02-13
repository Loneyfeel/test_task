import React from 'react'
import { css } from '@emotion/react'
import BaseText from '../BaseText'
import BaseIcon from '../BaseIcon'

interface ButtonProps {
  text?: string
  variant?: 'primary' | 'secondary' | 'action' | 'purple'
  icon?: React.FC<React.SVGProps<SVGSVGElement>>
  onClick: () => void
}

const Button: React.FC<ButtonProps> = ({
                                         text,
                                         variant = 'primary',
                                         icon: Icon,
                                         onClick,
                                       }) => {
  const textColor =
    variant === 'primary' || variant === 'action'
      ? '#5146C1'
      : '#FFFFFF'

  return (
    <button
      onClick={onClick}
      css={css`
        display: flex;
        align-items: center;
        justify-content: center;
        width: fit-content;
        gap: 8px;
        border-radius: 8px;
        cursor: pointer;
        border: none;
        transition: all 100ms ease;

        ${text && variant !== 'action' &&
        `width: clamp(110px, 10vw, 140px);`}

        ${variant === 'primary' &&
        `
          padding: 14px;
          background: #ECEBF7;
        `}

        ${variant === 'secondary' &&
        `
          padding: 14px;
          background: radial-gradient(
            100% 100% at 50% 0%,
            rgba(255, 255, 255, 0.3) 0%,
            rgba(255, 255, 255, 0) 100%
          ), #5349C6;
          box-shadow: 0px 36px 14px rgba(0, 0, 0, 0.01), 
                      0px 20px 12px rgba(0, 0, 0, 0.05),
                      0px 9px 9px rgba(0, 0, 0, 0.09), 
                      0px 2px 5px rgba(0, 0, 0, 0.1);
        `}

        ${variant === 'action' &&
        `
          flex-direction: row;
          padding: 12px 24px;
          background: #FFFFFF;
          box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.2);
        `}

        ${variant === 'purple' &&
        `
          width: fit-content;
          padding: 10px 24px;
          background: #5146C1;
        `}

        &:hover {
          opacity: 0.9;
        }

        &:active {
          opacity: 0.7;
        }
      `}
    >
      {text && (
        <BaseText
          variant="primary"
          weight="bold"
          textColor={textColor}
          fontSize={14}
        >
          {text}
        </BaseText>
      )}

      {Icon && (
        <BaseIcon
          Icon={Icon}
          color={textColor}
        />
      )}
    </button>
  )
}

export default Button
