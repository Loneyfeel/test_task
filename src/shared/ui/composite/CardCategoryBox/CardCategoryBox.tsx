import React, {type FC, type SVGProps} from 'react'
import { css } from '@emotion/react';

import HotIcon from '@/assets/icons/fire.svg?react'
import YoloIcon from '@/assets/icons/game-cube.svg?react'
import CardGridRandomizer from '../CardGridRandomizer'
import BaseIcon from '../../base/BaseIcon'
import BaseText from '../../base/BaseText'
import Button from '../../base/Button'

import ArrowRightIcon from '@/assets/icons/arrow-right.svg?react'
import type {BadgeVariant} from '../../base/Badge/Badge.tsx'

type CategoryType = 'Hot' | 'YOLO';

interface CardCategoryBoxProps {
  category: CategoryType;
}

const categoryConfig: Record<CategoryType, {
  background: string;
  icon: FC<SVGProps<SVGSVGElement>>,
  iconColor: string,
  title: string,
  badge: BadgeVariant
}> = {
  Hot: {
    background: 'url(assets/images/hotCases.png)',
    icon: HotIcon,
    iconColor: '#FF3700',
    title: 'Hot Category',
    badge: 'Hot'
  },
  YOLO: {
    background: 'url(assets/images/yoloCases.png)',
    icon: YoloIcon,
    iconColor: '#FFFFFF',
    title: 'YOLO Category',
    badge: 'YOLO'
  },
};

const CardCategoryBox: React.FC<CardCategoryBoxProps> = ({ category }) => {
  const { background, icon, title, badge, iconColor } = categoryConfig[category];

  return (
    <div
      css={css`
        background-image: ${background};
        width: 100%;
        padding: 20px;
        background-image: ${background};
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        border-radius: 20px;
      `}
    >
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 19px;
        `}
      >
        <div
          css={css`
            display: flex;
            align-items: center;
            gap: 8px
          `}
        >
          <BaseIcon
            Icon={icon}
            size={28}
            color={iconColor}
          />
          <BaseText
            fontSize={24}
            textColor={'#000000'}
          >
            {title}
          </BaseText>
        </div>
        <Button
          onClick={() => {console.log('view all')}}
          text={'View All'}
          variant={'action'}
          icon={ArrowRightIcon}
        >

        </Button>
      </div>
      <CardGridRandomizer badge={badge} />
    </div>
  );
};

export default CardCategoryBox;
