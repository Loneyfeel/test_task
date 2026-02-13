import React, { useEffect, useRef, useState } from 'react'
import { css } from '@emotion/react'
import Card from '../Card'
import type {BadgeVariant} from '../../base/Badge/Badge.tsx'

const titles = [
  'MacBook Air M3',
  'iPhone 15 Pro',
  'Sony WH-1000XM5',
  'Samsung 4K Smart TV',
  'Logitech MX Master 3S',
  'PlayStation 5 Slim',
  'iPad Pro 12.9',
  'DJI Mini 4 Pro'
]

const descriptions = [
  'Ultra-thin laptop with powerful performance and all-day battery life.',
  'Flagship smartphone with advanced camera system and A-series chip.',
  'Industry-leading noise cancelling wireless headphones.',
  'Crystal clear 4K resolution with smart streaming apps built-in.',
  'Ergonomic wireless mouse with precision tracking.',
  'Next-gen console with lightning-fast SSD and stunning graphics.',
  'High-performance tablet with Liquid Retina display.',
  'Compact drone with 4K video and intelligent flight modes.'
]

const categories: Array<'Gaming' | 'Yolo'> = ['Gaming', 'Yolo']

const badges: BadgeVariant[] = ['Limited', 'New', 'Hot', 'Community', 'YOLO', 'Popular', 'Bonus']

const images = [
  'src/assets/images/product1.png',
  'src/assets/images/product2.png',
  'src/assets/images/product3.png',
]

interface CardData {
  title: string
  description: string
  price: number
  category: 'Gaming' | 'Yolo'
  badge?: BadgeVariant
  image?: string
}

const getRandomItem = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)]

export interface CardGridRandomizerProps {
  count?: number
  badge?: BadgeVariant | 'random'
}

const CARD_WIDTH = 220
const GAP = 16

const CardGridRandomizer: React.FC<CardGridRandomizerProps> = ({
                                                                 count = 12,
                                                                 badge = 'random',
                                                               }) => {
  const [cards] = useState<CardData[]>(() =>
    Array.from({ length: count }, () => ({
      title: getRandomItem(titles),
      description: getRandomItem(descriptions),
      price: parseFloat((Math.random() * 500 + 50).toFixed(2)),
      category: getRandomItem(categories),
      badge: badge === 'random'
        ? getRandomItem(badges)
        : badge,
      image: getRandomItem(images),
    }))
  )

  const containerRef = useRef<HTMLDivElement>(null)
  const [containerWidth, setContainerWidth] = useState(0)

  useEffect(() => {
    const observer = new ResizeObserver(([entry]) => {
      setContainerWidth(entry.contentRect.width)
    })
    if (containerRef.current) observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  const visibleCount = containerWidth > 0
    ? Math.floor((containerWidth + GAP) / (CARD_WIDTH + GAP))
    : 0

  const visibleCards = cards.slice(0, visibleCount)

  return (
    <div
      ref={containerRef}
      css={css`
        display: flex;
        gap: ${GAP}px;
        width: 100%;
        overflow: hidden;
        box-sizing: border-box;
        & > * {
          height: 253px;
        }
      `}
    >
      {visibleCards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          price={card.price}
          category={card.category}
          badge={card.badge}
          backgroundImage={card.image ?? ''}
        />
      ))}
    </div>
  )
}

export default CardGridRandomizer