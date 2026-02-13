import {css} from '@emotion/react'
import Logo from '../shared/ui/base/Logo'
import Line from '../shared/ui/base/Line'
import logoText from '@/assets/icons/logoTextHeader.svg'
import HeaderMenu from '../shared/ui/composite/HeaderMenu'

import GiftIcon from '@/assets/icons/gift.svg?react'
import LockIcon from '@/assets/icons/lock.svg?react'
import BoxIcon from '@/assets/icons/box.svg?react'
import QuestionIcon from '@/assets/icons/question.svg?react'
import BalanceButton from '../shared/ui/composite/BalanceButton'
import Button from '../shared/ui/base/Button'


export function Header() {
  const menuItems = [
    {icon: GiftIcon, text: 'Home', to: '/', iconSize: 24},
    {icon: BoxIcon, text: 'Boxes', to: '/boxes', iconSize: 24},
    {icon: LockIcon, text: 'Deals', to: '/deals', iconSize: 24, disabled: true},
    {icon: QuestionIcon, text: 'FAQ', to: '/faq', iconSize: 24}
  ]

  return (
    <header
      css={css`
        height: 80px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #FFFFFF;
        box-shadow: 0 1px 10px rgba(0, 0, 0, 0.1);
        position: sticky;
        top: 0;
        z-index: 1000;
      `}
    >
      <div
        css={css`
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          height: 100%;
          max-width: 1920px;
          padding: 0 20px;
        `}
      >
        <div
          css={css`
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
          `}
        >
          <div
            css={css`
              margin-right: clamp(40px, 5vw, 110px);
            `}
          >
            <Logo src={logoText}
                  gap={12}
            />
          </div>
          <HeaderMenu items={menuItems} />
        </div>
        <div
          css={css`
            display: flex;
            align-items: center;
          `}
        >
          <BalanceButton
            amount={0}
            onClick={()=>console.log('add balance')}
          />
          <Line/>
          <div
            css={css`
              display: flex;
              align-items: center;
              gap: 8px
            `}
          >
            <Button
              text={'Log In'}
              variant={'primary'}
              onClick={()=>console.log('log in')}
            />
            <Button
              text={'Sign Up'}
              variant={'secondary'}
              onClick={()=>console.log('sign up')}
            />
          </div>
        </div>
      </div>
    </header>
  )
}