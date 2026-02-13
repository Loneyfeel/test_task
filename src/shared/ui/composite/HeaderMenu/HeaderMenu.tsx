import React, { useEffect, useRef, useState } from 'react'
import { css } from '@emotion/react'
import { useLocation } from 'react-router-dom'
import Trapezoid from '../../base/Trapezoid'
import HeaderMenuItem, {type HeaderMenuItemProps} from './HeaderMenuItem/HeaderMenuItem.tsx'

interface HeaderMenuProps {
  items: HeaderMenuItemProps[]
}

const HeaderMenu: React.FC<HeaderMenuProps> = ({ items }) => {
  const location = useLocation()
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeStyle, setActiveStyle] = useState({ left: 0, width: 0 })

  useEffect(() => {
    if (!containerRef.current) return

    const links = Array.from(
      containerRef.current.querySelectorAll('a')
    ) as HTMLAnchorElement[]

    const activeLink = links.find(
      link => link.pathname === location.pathname
    )

    if (activeLink) {
      setActiveStyle({
        left: activeLink.offsetLeft,
        width: activeLink.offsetWidth,
      })
    }
  }, [location.pathname])

  return (
    <div
      ref={containerRef}
      css={css`
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;
        gap: 32px;
      `}
    >
      {items.map((item, idx) => (
        <HeaderMenuItem key={idx} {...item} />
      ))}

      <div
        css={css`
          position: absolute;
          bottom: 0;
          left: ${activeStyle.left}px;
          width: ${activeStyle.width}px;
          transition: left 200ms ease-in-out, width 200ms ease-in-out;
        `}
      >
        <Trapezoid
          width={activeStyle.width}
        />
      </div>
    </div>
  )
}

export default HeaderMenu
