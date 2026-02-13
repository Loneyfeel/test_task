import React from 'react'
import { css } from '@emotion/react'

import CardColorTabs from './CardColorTabs'
import CardContent from './CardContent'
import Badge from '../../base/Badge'

interface CardProps {
  title: string
  description: string
  price: number
  category: 'Gaming' | 'Yolo'
  backgroundImage: string
  badge?: Parameters<typeof Badge>[0]['variant']
}

const Card: React.FC<CardProps> = ({
                                     title,
                                     description,
                                     price,
                                     category,
                                     badge,
                                     backgroundImage,
                                   }) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        width: 100%;
        min-width: 200px;
        max-width: 300px;
        height: 250px;
        background: #FFFFFF;
        box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
        border-radius: 12px;
        position: relative;
        overflow: hidden;
        cursor: pointer;
      `}
    >
      {backgroundImage && (
        <div
          css={css`
            position: absolute;
            inset: 0;
            z-index: 0;
            pointer-events: none;
          `}
        >
          <div
            css={css`
              position: absolute;
              height: 250px;
              width: 100%;
              left: 0;
              top: 0;
              background-image: url(${backgroundImage});
              background-size: cover;
              background-position: center;
            `}
          />
        </div>
      )}

      {badge && (
        <div
          css={css`
            position: absolute;
            top: 12px;
            left: 12px;
            z-index: 4;
          `}
        >
          <Badge variant={badge} />
        </div>
      )}

      <div
        css={css`
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          z-index: 3;
        `}
      >
        <CardColorTabs />
      </div>
      <div
        css={css`
          position: relative;
          z-index: 5;
          width: 100%;
          display: flex;
          justify-content: center;
        `}
      >
        <CardContent
          title={title}
          description={description}
          price={price}
          category={category}
        />
      </div>
    </div>
  )
}

export default Card
