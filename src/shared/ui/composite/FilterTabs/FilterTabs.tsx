import React, { useRef, useEffect, useState } from 'react'
import { css } from '@emotion/react'
import FilterTabsItem from './FilterTabsItem'

import tabWatches from '@/assets/images/tabWatches.svg'
import tabTech from '@/assets/images/tabTech.svg'
import tabJackpot from '@/assets/images/tabWatches.svg'
import tabWomen from '@/assets/images/tabWomen.svg'
import tabGaming from '@/assets/images/tabGaming.svg'
import tabRandom from '@/assets/images/tabDigital.svg'
import tabDigital from '@/assets/images/tabDigital.svg'
import tabMen from '@/assets/images/tabMen.svg'
import tabClothes from '@/assets/images/tabMen.svg'


const FilterTabs: React.FC = () => {
  const tabs = [
    { image: tabWatches, title: 'Watches', key: 'Watches', variant: 'secondary' },
    { image: tabTech, title: 'Tech', key: 'Tech', variant: 'secondary' },
    { image: tabJackpot, title: 'Jackpot', key: 'Jackpot', variant: 'secondary' },
    { image: tabClothes, title: 'Clothes', key: 'Clothes', variant: 'primary' },
    { image: tabDigital, title: 'Digital', key: 'Digital', variant: 'primary' },
    { image: tabWomen, title: 'Women', key: 'Women', variant: 'primary' },
    { image: tabGaming, title: 'Gaming', key: 'Gaming', variant: 'primary' },
    { image: tabRandom, title: 'Random', key: 'Random', variant: 'primary' },
    { image: tabMen, title: 'Men', key: 'Men', variant: 'primary' },
  ] as const

  const scrollRef = useRef<HTMLDivElement>(null)

  const [showLeftFade, setShowLeftFade] = useState(false)
  const [showRightFade, setShowRightFade] = useState(false)

  const checkScroll = () => {
    const el = scrollRef.current
    if (!el) return

    setShowLeftFade(el.scrollLeft > 1)
    setShowRightFade(el.scrollWidth > el.clientWidth && el.scrollLeft + el.clientWidth < el.scrollWidth - 1)
  }


  useEffect(() => {
    checkScroll()
  }, [])

  return (
    <div
      css={css`
        position: relative;
        width: 100%;
      `}
    >
      {showLeftFade && (
        <div
          css={css`
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            width: 150px;
            pointer-events: none;
            background: linear-gradient(
              90deg,
              #ffffff 0%,
              rgba(255, 255, 255, 0) 100%
            );
            z-index: 2;
          `}
        />
      )}

      {showRightFade && (
        <div
          css={css`
            position: absolute;
            right: 0;
            top: 0;
            bottom: 0;
            width: 150px;
            pointer-events: none;
            background: linear-gradient(
              270deg,
              #ffffff 0%,
              rgba(255, 255, 255, 0) 100%
            );
            z-index: 2;
          `}
        />
      )}

      <div
        ref={scrollRef}
        onScroll={checkScroll}
        css={css`
          display: flex;
          gap: 10px;
          overflow-x: auto;
          scroll-behavior: smooth;
          padding: 4px;

          scrollbar-width: none;
          -ms-overflow-style: none;

          &::-webkit-scrollbar {
            display: none;
          }
        `}
      >
        {tabs.map(tab => (
          <FilterTabsItem
            key={tab.key}
            image={tab.image}
            title={tab.title}
            tabKey={tab.key}
            variant={tab.variant}
            onClick={() => console.log(tab.key)}
          />
        ))}
      </div>
    </div>
  )
}

export default FilterTabs
