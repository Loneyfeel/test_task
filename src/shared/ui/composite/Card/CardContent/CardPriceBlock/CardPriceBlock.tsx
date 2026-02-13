import React, { useEffect, useRef, useState } from 'react'
import { css } from '@emotion/react'
import CardCategory from './CardCategory'
import BaseText from '../../../../base/BaseText'

interface Props {
  price: number
  category: 'Gaming' | 'Yolo'
}

const CardPriceBlock: React.FC<Props> = ({ price, category }) => {
  const blockRef = useRef<HTMLDivElement>(null)
  const [iconOnly, setIconOnly] = useState(false)

  const formattedPrice = `$${price.toFixed(2)}`

  useEffect(() => {
    const el = blockRef.current
    if (!el) return

    const observer = new ResizeObserver((entries) => {
      const width = entries[0].contentRect.width
      setIconOnly(width < 240)
    })

    observer.observe(el)

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={blockRef}
      css={css`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 5px;
        width: 100%;
        height: 32px;
      `}
    >
      <BaseText fontSize={16} weight="bold" textColor="#181818">
        {formattedPrice}
      </BaseText>

      <CardCategory variant={category} iconOnly={iconOnly} />
    </div>
  )
}

export default CardPriceBlock
