import React from 'react'
import { css } from '@emotion/react'

import GamingIcon from '@/assets/icons/joystick.svg?react'
import YoloIcon from '@/assets/icons/game-cube.svg?react'
import BaseIcon from '../../../../../base/BaseIcon'
import BaseText from '../../../../../base/BaseText'

type Variant = 'Gaming' | 'Yolo'

interface Props {
  variant: Variant
  iconOnly?: boolean
}

const config = {
  Gaming: {
    label: 'Gaming',
    Icon: GamingIcon,
  },
  Yolo: {
    label: 'Yolo',
    Icon: YoloIcon,
  },
}

const CardCategory: React.FC<Props> = ({ variant, iconOnly = false }) => {
  const { label, Icon } = config[variant]

  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        padding: 6px 12px;
        gap: 6px;
        height: 32px;
        background: rgba(103, 93, 214, 0.15);
        border-radius: 8px;
        width: fit-content;
      `}
    >
      <BaseIcon
        Icon={Icon}
        size={20}
        color="#5146C1"
      />

      {!iconOnly && (
        <BaseText
          fontSize={12}
          weight="regular"
          textColor="#5146C1"
          variant="primary"
        >
          {label}
        </BaseText>
      )}
    </div>
  )
}

export default CardCategory
