import React from 'react'
import { css } from '@emotion/react'
import BaseText from '../../../base/BaseText'

interface FooterListItemProps {
  text: string
  href: string
}

const FooterListItem: React.FC<FooterListItemProps> = ({ text, href }) => {
  const handleClick = () => {
    console.log(href)
  }

  return (
    <div
      css={css`
        cursor: pointer;
        &:hover {
          opacity: 0.8;
        }
      `}
      onClick={handleClick}
    >
      <BaseText
        fontSize={16}
      >
        {text}
      </BaseText>
    </div>
  )
}

export default FooterListItem
