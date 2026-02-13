import React from 'react'
import { css } from '@emotion/react'
import BaseText from '../../../base/BaseText'

interface FooterListLabelProps {
  text: string
}

const FooterListLabel: React.FC<FooterListLabelProps> = ({ text }) => {
  return (
    <div
      css={css`
        margin-bottom: 20px;
      `}
    >
      <BaseText
        weight="bold"
        fontSize={20}
        textColor={'#6056BD'}
      >
        {text}
      </BaseText>
    </div>
  )
}

export default FooterListLabel
