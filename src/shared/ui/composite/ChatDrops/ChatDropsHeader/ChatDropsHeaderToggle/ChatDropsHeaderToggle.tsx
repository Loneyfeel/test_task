import React from 'react'
import { css } from '@emotion/react'
import BaseIcon from '../../../../base/BaseIcon'

interface ToggleButtonProps {
  active?: boolean
  label: string
  onClick?: () => void
  Icon: React.FC<React.SVGProps<SVGSVGElement>>
}

const ChatDropsHeaderToggle: React.FC<ToggleButtonProps> = ({
                                                              active = false,
                                                              label,
                                                              onClick,
                                                              Icon
                                                            }) => {
  return (
    <button
      onClick={onClick}
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 11px 0;
        gap: 4px;
        width: 115px;
        height: 36px;
        border-radius: 8px;
        background: ${active ? '#463DA6' : 'rgba(103, 93, 214, 0.1)'};
        border: none;
        cursor: pointer;
        position: relative;
        @media (max-width: 1190px) {
          width: 66px;
        }
      `}
    >
      <BaseIcon
        Icon={Icon}
        size={14}
        color={`${!active ? '#463DA6' : '#FFFFFF'}`}
      />
      <span
        css={css`
          font-family: 'Sohne', sans-serif;
          font-weight: 400;
          font-size: 14px;
          display: flex;
          align-items: center;
          color: ${active ? '#ECEBF7' : '#675DD6'};
          position: relative;
          @media (max-width: 1190px) {
            font-size: 8px;
          }
        `}
      >
        {label}
      </span>
    </button>
  )
}

export default ChatDropsHeaderToggle
