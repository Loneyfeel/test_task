import React from 'react'
import { css } from '@emotion/react'
import BaseText from '../../../base/BaseText'
import CardPriceBlock from './CardPriceBlock'

interface Props {
  title: string
  description: string
  price: number
  category: 'Gaming' | 'Yolo'
}

const CardContent: React.FC<Props> = ({ title, description, price, category }) => {
  return (
    <div
      css={css`
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 12px;
        gap: 10px;
        width: 100%;
        background: rgba(255, 255, 255, 0.99);
        backdrop-filter: blur(10px);
        border-radius: 12px;
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 0;
          gap: 12px;
        `}
      >
        <BaseText
          fontSize={16}
          weight="bold"
          textColor="#181818"
        >
          {title}
        </BaseText>

        <BaseText
          fontSize={14}
          weight="regular"
          textColor="#ADADAD"
        >
          {description}
        </BaseText>
      </div>
      <CardPriceBlock price={price} category={category} />
    </div>
  )
}

export default CardContent
