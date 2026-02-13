import React from 'react'
import { css } from '@emotion/react'
import ChatDropsHeaderToggle from './ChatDropsHeaderToggle'
import LiveChatIcon from '@/assets/icons/message.svg?react'
import LiveDropsIcon from '@/assets/icons/red-point.svg?react'

interface ChatDropsHeaderProps {
  activeTab: 'drops' | 'chat'
  setActiveTab: (tab: 'drops' | 'chat') => void
}

const ChatDropsHeader: React.FC<ChatDropsHeaderProps> = ({
                                                           activeTab,
                                                           setActiveTab,
                                                         }) => {
  return (
    <div
      css={css`
        display: flex;
        gap: 6px;
        margin-bottom: 10px;
      `}
    >
      <ChatDropsHeaderToggle
        active={activeTab === 'chat'}
        label="Live Chat"
        onClick={() => setActiveTab('chat')}
        Icon={LiveChatIcon}
      />
      <ChatDropsHeaderToggle
        active={activeTab === 'drops'}
        label="Live Drops"
        onClick={() => setActiveTab('drops')}
        Icon={LiveDropsIcon}
      />
    </div>
  )
}

export default ChatDropsHeader
