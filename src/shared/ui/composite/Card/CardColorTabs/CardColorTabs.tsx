import React, { useState, useRef, useEffect } from 'react'
import { css } from '@emotion/react'
import CardColorTabsItem from './CardColorTabsItem'
import BaseIcon from '../../../base/BaseIcon'
import CursorIcon from '@/assets/icons/cursor.svg?react'

const colors = ['#FFD1CF', '#FFC5A3', '#FFD940', '#DEF7D5']

const CardColorTabs: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(2)
  const containerRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])
  const [cursorX, setCursorX] = useState(0)

  useEffect(() => {
    const container = containerRef.current
    const activeEl = itemRefs.current[activeIndex]

    if (container && activeEl) {
      const containerRect = container.getBoundingClientRect()
      const activeRect = activeEl.getBoundingClientRect()

      const center =
        activeRect.left - containerRect.left + activeRect.width / 2

      setCursorX(center)
    }
  }, [activeIndex])

  return (
    <div
      ref={containerRef}
      css={css`
        display: flex;
        justify-content: center;
        align-items: flex-start;
        position: relative;
        padding: 0 20px;
      `}
    >
      {colors.map((color, index) => (
        <CardColorTabsItem
          key={index}
          index={index}
          total={colors.length}
          ref={(el) => {
            itemRefs.current[index] = el
          }}
          color={color}
          isActive={activeIndex === index}
          onClick={() => {
            console.log('Selected:', index)
            setActiveIndex(index)
          }}
        />
      ))}

      <div
        css={css`
          position: absolute;
          top: 18px;
          left: 0;
          transform: translateX(${cursorX}px);
          transition: transform 200ms ease-in-out;
          pointer-events: none;
        `}
      >
        <BaseIcon Icon={CursorIcon} size={6} color="#181818" />
      </div>
    </div>
  )
}

export default CardColorTabs
