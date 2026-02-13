import React from 'react';
import PlusIcon from '@/assets/icons/plus.svg?react';
import Balance from '../../base/Balance'
import Button from '../../base/Button'

interface BalanceButtonProps {
  amount: number;
  onClick: () => void;
}

const BalanceButton: React.FC<BalanceButtonProps> = ({ amount, onClick }) => {
  return (
    <div
      css={{
        display: 'flex',
        alignItems: 'center',
        width: '160px',
        position: 'relative',
      }}
    >
      <Balance amount={amount} />
      <div style={{
        position: 'absolute',
        right: 0,
      }}>
      <Button
        text=""
        variant="secondary"
        icon={PlusIcon}
        onClick={onClick}
      />
    </div>
    </div>
  );
};

export default BalanceButton;
