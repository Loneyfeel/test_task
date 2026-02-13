import { useState, forwardRef } from 'react'
import { css } from '@emotion/react'
import Trapezoid from '../../../../base/Trapezoid'

interface Props {
  color: string
  isActive: boolean
  onClick: () => void
  index: number
  total: number
}

const CardColorTabsItem = forwardRef<HTMLDivElement, Props>(
  ({ color, isActive, onClick, index, total }, ref) => {
    const [hovered, setHovered] = useState(false)

    const height = isActive ? 8 : hovered ? 8 : 5

    return (
      <div
        ref={ref}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={onClick}
        css={css`
          flex: 0 0 47px;
          min-width: 30px;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          cursor: pointer;
          z-index: ${total - index};
        `}
      >
        <div
          css={css`
            transform: rotate(180deg);
            filter: drop-shadow(-2px 0px 4px rgba(0, 0, 0, 0.25));
            transition: all 200ms ease;
          `}
        >
          <Trapezoid height={height} color={color} width={50}/>
        </div>
      </div>
    )
  }
)

export default CardColorTabsItem
