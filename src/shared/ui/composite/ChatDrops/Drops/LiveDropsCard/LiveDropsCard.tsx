import React from 'react'
import { css } from '@emotion/react'
import Badge, {type BadgeVariant} from '../../../../base/Badge/Badge.tsx'
import Trapezoid from '../../../../base/Trapezoid'
import BaseText from '../../../../base/BaseText'

type ColorVariant = 'red' | 'yellow' | 'gray' | 'blue' | 'green'

interface LiveDropsCardProps {
  badge?: BadgeVariant
  username: string
  title: string
  subtitle: string
  price: number
  image: string
  colorVariant?: ColorVariant
}

const gradientConfig: Record<
  ColorVariant,
  { gradient: string; accent: string }
> = {
  red: {
    gradient: 'linear-gradient(180deg, #F7B7AD 0%, #FFFFFF 49.9%)',
    accent: '#E71B00'
  },
  yellow: {
    gradient: 'linear-gradient(180deg, #FFE9A6 0%, #FFFFFF 49.9%)',
    accent: '#FFB800'
  },
  gray: {
    gradient: 'linear-gradient(180deg, #E5E5E5 0%, #FFFFFF 49.9%)',
    accent: '#9A9CAC'
  },
  blue: {
    gradient: 'linear-gradient(180deg, #CDE7FF 0%, #FFFFFF 49.9%)',
    accent: '#4CAEF1'
  },
  green: {
    gradient: 'linear-gradient(180deg, #CFFFCB 0%, #FFFFFF 49.9%)',
    accent: '#53D225'
  }
}

const LiveDropsCard: React.FC<LiveDropsCardProps> = ({
                                                       badge = 'Unique',
                                                       username,
                                                       title,
                                                       subtitle,
                                                       price,
                                                       image,
                                                       colorVariant = 'red'
                                                     }) => {
  const { gradient, accent } = gradientConfig[colorVariant]
  const formattedPrice = `$${price.toFixed(2)}`

  return (
    <div
      css={css`
        width: 100%;
        height: 170px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background: ${gradient};
        box-shadow: 0 0 6px rgba(0, 0, 0, 0.15);
        border-radius: 8px;
        overflow: hidden;
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: column;
          padding: 0 10px;
          gap: 8px;
        `}
      >
        <div
          css={css`
            display: flex;
            justify-content: center;
            padding: 0 20px;
            transform: rotate(180deg);
          `}
        >
          <Trapezoid width={255} height={3} color={accent} />
        </div>

        <div
          css={css`
            display: flex;
            justify-content: space-between;
            align-items: center;
          `}
        >
          <Badge variant={badge} />

          <BaseText
            variant="primary"
            weight="regular"
            fontSize={10}
            textColor="#18181899"
          >
            {username}
          </BaseText>
        </div>
      </div>

      <div
        css={css`
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
        `}
      >
        <img
          src={image}
          alt={title}
          css={css`
            width: 101px;
            object-fit: contain;
          `}
        />
      </div>

      <div
        css={css`
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 10px 12px;
        `}
      >
        <div
          css={css`
            display: flex;
            flex-direction: column;
            gap: 4px;
          `}
        >
          <BaseText
            variant="primary"
            weight="bold"
            fontSize={12}
            textColor="#181818"
          >
            {title}
          </BaseText>

          <BaseText
            variant="primary"
            weight="regular"
            fontSize={10}
            textColor="#9A9CAC"
          >
            {subtitle}
          </BaseText>
        </div>

        <BaseText
          variant="primary"
          weight="bold"
          fontSize={16}
          textColor="#181818"
        >
          {formattedPrice}
        </BaseText>
      </div>
    </div>
  )
}

export default LiveDropsCard
