import React from 'react'
import { css } from '@emotion/react'
import BaseText from '../../../../base/BaseText'
import BaseIcon from '../../../../base/BaseIcon'

export type ChatVariant = 'regular' | 'long' | 'reply' | 'user'

export interface ChatCardProps {
  variant: ChatVariant
  username: string
  usernameColor?: string
  timestamp: string
  message: string
  BadgeIcon?: React.FC<React.SVGProps<SVGSVGElement>>
  ReplyIcon?: React.FC<React.SVGProps<SVGSVGElement>>
}

const ChatCard: React.FC<ChatCardProps> = ({
                                             variant,
                                             username,
                                             usernameColor = '#D01A1A',
                                             timestamp,
                                             message,
                                             BadgeIcon,
                                             ReplyIcon,
                                           }) => {
  const isReply   = variant === 'reply'
  const isLong    = variant === 'long'
  const isUser    = variant === 'user'
  const isRegular = variant === 'regular'

  return (
    <div
      css={css`
        display: flex;
        flex-direction: row;
        justify-content: ${isReply ? 'center' : 'flex-start'};
        align-items: center;
        padding: 9px;
        gap: 2px;
        width: 100%;
        box-sizing: border-box;
        ${isReply ? 'background: #E1D6FF; border-radius: 5.08px;' : ''}
        ${(isRegular || isUser) ? 'opacity: 0.7;' : ''}
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          gap: 4px;
          width: 100%;
        `}
      >
        <div
          css={css`
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            gap: 5px;
            width: 100%;
          `}
        >
          <div
            css={css`
              display: flex;
              flex-direction: row;
              align-items: center;
              gap: 3px;
              flex-shrink: 0;
            `}
          >
            {BadgeIcon && (isLong || isReply) && (
              <div
                css={css`
                  width: 10px;
                  height: 10px;
                  background: #ff3700;
                  border-radius: 2px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  flex-shrink: 0;
                `}
              >
                <BaseIcon Icon={BadgeIcon} size={7} color="#ff3700" />
              </div>
            )}

            <BaseText
              variant="primary"
              weight="bold"
              fontSize={12}
              textColor={isUser ? '#675DD6' : usernameColor}
            >
              {username}:
            </BaseText>
          </div>

          <BaseText
            variant="secondary"
            weight="regular"
            fontSize={10}
            textColor={`rgba(24, 24, 24, ${isReply ? '0.5' : '0.4'})`}
          >
            {timestamp}
          </BaseText>
        </div>

        <div
          css={css`
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            gap: 8px;
            width: 100%;
          `}
        >
          <div css={css`flex: 1; overflow: hidden;`}>
            <BaseText
              variant="primary"
              weight="regular"
              fontSize={12}
              textColor={isLong ? 'rgba(24, 24, 24, 0.8)' : '#181818'}
            >
              <span
                css={css`
                  display: -webkit-box;
                  -webkit-line-clamp: ${isLong ? 3 : 1};
                  -webkit-box-orient: vertical;
                  overflow: hidden;
                `}
              >
                {message}
              </span>
            </BaseText>
          </div>

          {isReply && ReplyIcon && (
            <BaseIcon Icon={ReplyIcon} size={14} color="#181818" />
          )}
        </div>
      </div>
    </div>
  )
}

export default ChatCard