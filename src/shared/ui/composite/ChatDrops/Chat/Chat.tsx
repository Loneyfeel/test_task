import React, {useEffect, useRef, useState, useCallback} from 'react'
import {css} from '@emotion/react'
import ChatCard, {type ChatCardProps, type ChatVariant} from './ChatCard/ChatCard.tsx'
import BaseInput from '../../../base/BaseInput'

const HEIGHTS: Record<ChatVariant, number> = {
  regular: 44,
  long: 70,
  reply: 45,
  user: 45
}
const VISIBLE_COUNT = 20
const SCROLL_DURATION = 600

const USERNAMES = [
  {name: 'LionMaky16', color: '#D01A1A'},
  {name: 'genius322', color: '#FF9705'},
  {name: 'qWNdxX', color: '#BC27BC'},
  {name: 'darkWave', color: '#D01A1A'},
  {name: 'sunShard', color: '#FF9705'}
]

const SHORT_MESSAGES = [
  'Lorem ipsum dolor',
  'Nice drop bro!',
  'When does this end?',
  'gg ez win',
  'First!!',
  'Lets go 🔥'
]

const LONG_MESSAGES = [
  'Consectetur. Sed ut fermentum facilisis ipsum fermentum vulputate.',
  'Pellentesque habitant morbi tristique senectus et netus malesuada.',
  'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.',
  'Duis mollis est non commodo luctus nisi erat porttitor ligula eget.'
]

const AUTO_VARIANTS: ChatVariant[] = ['regular', 'long', 'reply']

interface ChatItem extends ChatCardProps {
  id: number
}

const pad = (n: number) => String(n).padStart(2, '0')
const now = () => {
  const d = new Date()
  return `${pad(d.getHours())}:${pad(d.getMinutes())}`
}

const generateRandomChat = (id: number): ChatItem => {
  const variant = AUTO_VARIANTS[Math.floor(Math.random() * AUTO_VARIANTS.length)]
  const user = USERNAMES[Math.floor(Math.random() * USERNAMES.length)]
  const message = variant === 'long'
    ? LONG_MESSAGES[Math.floor(Math.random() * LONG_MESSAGES.length)]
    : SHORT_MESSAGES[Math.floor(Math.random() * SHORT_MESSAGES.length)]

  return {
    id,
    variant,
    username: user.name,
    usernameColor: user.color,
    timestamp: now(),
    message
  }
}

interface ChatsProps {
  BadgeIcon?: React.FC<React.SVGProps<SVGSVGElement>>
  ReplyIcon?: React.FC<React.SVGProps<SVGSVGElement>>
  InputIcon?: React.FC<React.SVGProps<SVGSVGElement>>
  currentUser?: string
}

const Chat: React.FC<ChatsProps> = ({
                                      BadgeIcon,
                                      ReplyIcon,
                                      InputIcon,
                                      currentUser = 'You'
                                    }) => {
  const [chats, setChats] = useState<ChatItem[]>(() =>
    Array.from({length: 8}, (_, i) => generateRandomChat(i))
  )
  const [inputValue, setInputValue] = useState('')

  const [offset, setOffset] = useState(0)
  const [animate, setAnimate] = useState(false)
  const pendingStep = useRef(0)

  const pushMessage = useCallback((item: ChatItem) => {
    pendingStep.current = HEIGHTS[item.variant]

    setChats(prev => {
      const updated = [...prev, item]
      return updated.slice(-VISIBLE_COUNT - 1)
    })
    setAnimate(false)
    setOffset(pendingStep.current)

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setAnimate(true)
        setOffset(0)
      })
    })
  }, [])


  useEffect(() => {
    const interval = setInterval(() => {
      pushMessage(generateRandomChat(Date.now()))
    }, 3000)
    return () => clearInterval(interval)
  }, [pushMessage])

  const handleSubmit = useCallback(() => {
    const text = inputValue.trim()
    if (!text) return

    pushMessage({
      id: Date.now(),
      variant: 'user',
      username: currentUser,
      timestamp: now(),
      message: text
    })
    setInputValue('')
  }, [inputValue, currentUser, pushMessage])

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSubmit()
  }, [handleSubmit])

  return (
    <div
      css={css`
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 1000px;
        overflow: hidden;
        box-sizing: border-box;
      `}
    >
      <div
        css={css`
          pointer-events: none;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 80px;
          background: linear-gradient(to top, rgba(255, 255, 255, 0), #ffffff 90%);
          z-index: 1;
        `}
      />

      <div
        css={css`
          flex: 1;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 0 9px;
        `}
      >
        <div
          css={css`
            display: flex;
            flex-direction: column;
            width: 100%;
            transform: translateY(${offset}px);
            gap: 3px;
            transition: ${animate ? `transform ${SCROLL_DURATION}ms ease` : 'none'};
          `}
          onTransitionEnd={() => setAnimate(false)}
        >
          {chats.map(chat => (
            <ChatCard
              key={chat.id}
              variant={chat.variant}
              username={chat.username}
              usernameColor={chat.usernameColor}
              timestamp={chat.timestamp}
              message={chat.message}
              BadgeIcon={BadgeIcon}
              ReplyIcon={ReplyIcon}
            />
          ))}
        </div>
      </div>

      <div
        css={css`
          flex-shrink: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 8px 9px 12px;
        `}
        onKeyDown={handleKeyDown}
      >

        <BaseInput
          value={inputValue}
          placeholder="Type to chat..."
          onChange={setInputValue}
          icon={InputIcon}
        />
      </div>
    </div>
  )
}

export default Chat