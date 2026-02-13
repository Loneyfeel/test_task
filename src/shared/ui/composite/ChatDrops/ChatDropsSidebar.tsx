import React, { useState } from 'react'
import { css } from '@emotion/react'
import Drops from './Drops'
import Chat from './Chat'
import ChatDropsHeader from './ChatDropsHeader'

import InputIcon from '@/assets/icons/plane-message.svg?react'
import ReplyIcon from '@/assets/icons/arrow-down-left.svg?react'
import BadgeIcon from '@/assets/icons/crown.svg?react'

const ChatDropsSidebar: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'drops' | 'chat'>('drops')

  return (
    <div
      css={css`
        height: 100%;
        overflow: hidden;
        width: 100%;
        background-color: #FFFFFF;
        border-radius: 14px;
        padding: 10px;
        display: flex;
        flex-direction: column;
      `}
    >
      <ChatDropsHeader activeTab={activeTab} setActiveTab={setActiveTab} />

      <div
        css={css`
          flex: 1;
          position: relative;
        `}
      >
        <div
          css={css`
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            opacity: ${activeTab === 'drops' ? 1 : 0};
            transition: opacity 300ms ease-in-out;
            pointer-events: ${activeTab === 'drops' ? 'all' : 'none'};
          `}
        >
          <Drops />
        </div>

        <div
          css={css`
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            opacity: ${activeTab === 'chat' ? 1 : 0};
            transition: opacity 300ms ease-in-out;
            pointer-events: ${activeTab === 'chat' ? 'all' : 'none'};
          `}
        >
          <Chat
            InputIcon={InputIcon}
            BadgeIcon={BadgeIcon}
            ReplyIcon={ReplyIcon}
          />
        </div>
      </div>
    </div>
  )
}

export default ChatDropsSidebar
