import React from 'react'
import {css} from '@emotion/react'
import BaseIcon from '../BaseIcon'
import BaseText from '../BaseText'

import LimitedIcon from '@/assets/icons/clock.svg?react'
import NewIcon from '@/assets/icons/lamp.svg?react'
import HotIcon from '@/assets/icons/fire.svg?react'
import CommunityIcon from '@/assets/icons/medal.svg?react'
import YOLOIcon from '@/assets/icons/game-cube.svg?react'
import PopularIcon from '@/assets/icons/stars.svg?react'
import BonusIcon from '@/assets/icons/gift2.svg?react'

export type BadgeVariant =
  | 'Limited'
  | 'New'
  | 'Hot'
  | 'Community'
  | 'YOLO'
  | 'Unique'
  | 'Legendary'
  | 'Popular'
  | 'Bonus'

interface BadgeProps {
  variant: BadgeVariant
}

const badgeConfig: Record<
  BadgeVariant,
  { text: string; bgColor: string; icon?: React.FC<React.SVGProps<SVGSVGElement>> }
> = {
  Limited: {text: 'Limited', bgColor: '#FF9705', icon: LimitedIcon},
  New: {text: 'New', bgColor: '#53D225', icon: NewIcon},
  Hot: {text: 'Hot', bgColor: '#FF3700', icon: HotIcon},
  Community: {text: 'Community', bgColor: '#4473FB', icon: CommunityIcon},
  YOLO: {text: 'YOLO', bgColor: '#4CAEF1', icon: YOLOIcon},
  Unique: {text: 'Unique', bgColor: '#5146C1'},
  Legendary: {text: 'Legendary', bgColor: '#5146C1'},
  Popular: {text: 'Popular', bgColor: '#5146C1', icon: PopularIcon},
  Bonus: {text: 'Bonus', bgColor: '#5146C1', icon: BonusIcon}
}

const Badge: React.FC<BadgeProps> = ({variant}) => {
  const config = badgeConfig[variant]

  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 6px 10px;
        border-radius: 50px;
        width: fit-content;
        background-color: ${config.bgColor};
      `}
    >
      {config.icon &&
        <BaseIcon
          Icon={config.icon}
          size={16}
          color={'#FFFFFF'}
        />}
      <BaseText
        variant="primary"
        weight="regular"
        fontSize={14}
        textColor={'#FFFFFF'}
      >
        {config.text}
      </BaseText>
    </div>
  )
}

export default Badge
