import React from 'react'
import {css} from '@emotion/react'
import BaseText from '../../../base/BaseText'
import Trapezoid from '../../../base/Trapezoid'

interface FilterTabsProps {
  image: string
  title: string
  tabKey: string
  variant?: 'primary' | 'secondary'
  onClick?: (key: string) => void
}

const FilterTabsItem: React.FC<FilterTabsProps> = ({
                                                     image,
                                                     title,
                                                     tabKey,
                                                     variant = 'primary',
                                                     onClick
                                                   }) => {
  const isPrimary = variant === 'primary'

  const color = isPrimary ? '#5146C1' : '#FFFFFF'

  return (
    <div
      onClick={() => onClick?.(tabKey)}
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        min-width: 102px;
        cursor: pointer;
        position: relative;
        background-image: url(${image});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        border-radius: 6px;
        padding: 10px 0 0;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
        &:hover {
          opacity: 0.9;
        }

        &:active {
          opacity: 0.7;
        }
      `}
    >
      <BaseText
        weight="bold"
        fontSize={14}
        textColor={color}
      >
        {title}
      </BaseText>

      <div
        css={css`
          margin-top: 4px;
        `}
      >
        <Trapezoid color={isPrimary ? '#5146C1' : '#FFFFFF'} />
      </div>
    </div>
  )
}

export default FilterTabsItem
