import React from 'react';
import { css } from '@emotion/react';
import BaseText from '../BaseText'

interface BalanceProps {
  amount: number;
}

const Balance: React.FC<BalanceProps> = ({ amount }) => {
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        padding: 12px 16px;
        background: #f5f5fc;
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 8px;
      `}
    >
      <BaseText
        variant={'primary'}
        textColor={'#5349C6'}
      >
        ${amount.toFixed(2)}
      </BaseText>
    </div>
  );
};

export default Balance;
