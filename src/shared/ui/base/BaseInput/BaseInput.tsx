import React from 'react'
import { css } from '@emotion/react'

interface BaseInputProps {
  value?: string
  placeholder?: string
  onChange?: (value: string) => void
  icon?: React.FC<React.SVGProps<SVGSVGElement>>
}

const BaseInput: React.FC<BaseInputProps> = ({
                                               value,
                                               placeholder = 'Type here...',
                                               onChange,
                                               icon: Icon,
                                             }) => {
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        gap: 14px;
        padding: 10px 16px;
        width: 300px;
        height: 38px;
        background: #f5f5fc;
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 8px;
      `}
    >
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange?.(e.target.value)}
        css={css`
          flex: 1;
          font-family: 'Sohne', sans-serif;
          font-weight: 500;
          font-size: 14px;
          line-height: 100%;
          color: #B3B2BE;
          border: none;
          background: transparent;
          outline: none;
          &::placeholder {
          color: #B3B2BE;
          font-size: 14px;
          font-style: italic;
        }
        `}
      />

      {Icon && <Icon
        css={css`
          width: 20px;
          height: 20px;
          flex-shrink: 0;
        `}
      />}
    </div>
  )
}

export default BaseInput
