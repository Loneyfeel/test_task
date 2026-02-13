import React, { useEffect, useRef, useState } from 'react'
import { css } from '@emotion/react'
import LiveDropsCard from './LiveDropsCard'
import Gamepad from '@/assets/images/gamepad.png'

const CARD_HEIGHT = 167
const GAP = 16
const STEP = CARD_HEIGHT + GAP
const VISIBLE_COUNT = 20

interface DropItem {
  id: number
  username: string
  title: string
  subtitle: string
  price: number
  colorVariant: 'red' | 'yellow' | 'gray' | 'blue' | 'green'
}

const usernames = ['player1', 'gamerX', 'pro_user', 'dropKing', 'lootMaster']
const titles = ['Playstation 3', 'Xbox 360', 'Gamepad Pro', 'Elite Console']
const subtitles = ['Game Box', 'Limited Edition', 'Rare Drop', 'Collector']
const colors: DropItem['colorVariant'][] = [
  'red',
  'yellow',
  'gray',
  'blue',
  'green'
]

const generateRandomDrop = (id: number): DropItem => ({
  id,
  username: usernames[Math.floor(Math.random() * usernames.length)],
  title: titles[Math.floor(Math.random() * titles.length)],
  subtitle: subtitles[Math.floor(Math.random() * subtitles.length)],
  price: Math.floor(Math.random() * 500) + 50,
  colorVariant: colors[Math.floor(Math.random() * colors.length)]
})

const Drops: React.FC = () => {
  const [drops, setDrops] = useState<DropItem[]>(() =>
    Array.from({ length: 5 }, (_, i) => generateRandomDrop(i))
  )

  const [offset, setOffset] = useState(0)
  const [animate, setAnimate] = useState(false)
  const listRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      const newDrop = generateRandomDrop(Date.now())

      setDrops(prev => {
        const updated = [newDrop, ...prev]
        return updated.slice(0, VISIBLE_COUNT + 1)
      })

      setOffset(-STEP)

      requestAnimationFrame(() => {
        setAnimate(true)
        setOffset(0)
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      css={css`
        position: relative;
        height: ${STEP * VISIBLE_COUNT}px;
        overflow: hidden;
      `}
    >
      <div
        ref={listRef}
        css={css`
          display: flex;
          flex-direction: column;
          gap: ${GAP}px;
          width: 100%;
          transform: translateY(${offset}px);
          transition: ${animate ? 'transform 600ms ease' : 'none'};
        `}
        onTransitionEnd={() => {
          setAnimate(false)
        }}
      >
        {drops.map(drop => (
          <LiveDropsCard
            key={drop.id}
            username={drop.username}
            title={drop.title}
            subtitle={drop.subtitle}
            price={drop.price}
            image={Gamepad}
            colorVariant={drop.colorVariant}
          />
        ))}
      </div>

      <div
        css={css`
          pointer-events: none;
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 80px;
          background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0),
            #ffffff 90%
          );
        `}
      />
    </div>
  )
}

export default Drops