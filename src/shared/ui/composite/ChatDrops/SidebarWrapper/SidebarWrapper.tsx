import React from 'react'
import { css } from '@emotion/react'
import ChatDropsSidebar from '../ChatDropsSidebar.tsx'
import WrapperIcon from '@/assets/icons/arrow-stick-right.svg?react'
import BaseIcon from '../../../base/BaseIcon'

interface SidebarWrapperProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const SidebarWrapper: React.FC<SidebarWrapperProps> = ({ open, setOpen }) => {

  return (
    <div
      css={css`
        position: relative;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
      `}
    >
      <button
        onClick={() => setOpen(prev => !prev)}
        css={css`
          position: absolute;
          top: 10px;
          right: 10px;
          z-index: 10;
          border-radius: 8px;
          padding: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #f8f4f4;
          cursor: pointer;
          border: none;
        `}
      >
        <div
          css={css`
            transform: ${!open ? 'rotate(-180deg)' : 'rotate(0deg)'};
            transition: transform 200ms ease-in-out;
          `}
        >
          <BaseIcon
            Icon={WrapperIcon}
            color={'#5146C1'}
          />
        </div>

      </button>

      <div
        css={css`
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          transform: translateX(${open ? '0' : '+150%'});
          transition: transform 200ms ease;
          display: flex;
          flex-direction: column;
          overflow-y: hidden;
        `}
      >
        <ChatDropsSidebar />
      </div>
    </div>
  )
}

export default SidebarWrapper
