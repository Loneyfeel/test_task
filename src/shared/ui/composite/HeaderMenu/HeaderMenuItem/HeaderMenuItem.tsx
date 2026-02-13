import React from 'react'
import { css } from '@emotion/react'
import { NavLink } from 'react-router-dom'
import BaseIcon from '../../../base/BaseIcon'
import BaseText from '../../../base/BaseText'

export interface HeaderMenuItemProps {
  icon: React.FC<React.SVGProps<SVGSVGElement>>
  iconSize?: number
  iconColor?: string
  text: string
  fontSize?: number
  variant?: 'primary' | 'secondary'
  weight?: 'regular' | 'bold'
  to: string
  disabled?: boolean
  activeColor?: string
  defaultColor?: string
}

const HeaderMenuItem: React.FC<HeaderMenuItemProps> = ({
                                                         icon,
                                                         iconSize,
                                                         iconColor,
                                                         text,
                                                         fontSize,
                                                         variant = 'primary',
                                                         weight = 'regular',
                                                         to,
                                                         disabled = false,
                                                         activeColor = '#5146C1',
                                                         defaultColor = '#4C4C4C',
                                                       }) => {
  return (
    <NavLink
      to={to}
      css={css`
        text-decoration: none;
        pointer-events: ${disabled ? 'none' : 'auto'};
        opacity: ${disabled ? 0.5 : 1};
      `}
    >
      {({ isActive }) => {
        const currentColor = isActive ? activeColor : defaultColor

        return (
          <div
            css={css`
              display: flex;
              align-items: center;
              gap: 4px;
            `}
          >
            <BaseIcon
              Icon={icon}
              size={iconSize}
              color={isActive ? activeColor : iconColor || defaultColor}
            />

            <BaseText
              fontSize={fontSize}
              variant={variant}
              weight={weight}
              textColor={currentColor}
            >
              {text}
            </BaseText>
          </div>
        )
      }}
    </NavLink>
  )
}

export default HeaderMenuItem
