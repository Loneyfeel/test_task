import React from 'react'
import { css } from '@emotion/react'
import FooterListLabel from './FooterListLabel'
import FooterListItem from './FooterListItem'

const FooterList: React.FC = () => {
  const columns = [
    {
      title: 'RollBox',
      items: [
        { text: 'Lucky Cases', href: '/lucky-cases' },
        { text: 'Gold Cases', href: '/gold-cases' },
        { text: 'New Cases', href: '/new-cases' },
        { text: 'Popular', href: '/popular' },
      ],
    },
    {
      title: 'About Us',
      items: [
        { text: 'How it Works', href: '/how-it-works' },
        { text: 'Probably Fair', href: '/probably-fair' },
        { text: 'Terms of Service', href: '/terms-of-service' },
        { text: 'Privacy Policy', href: '/privacy-policy' },
      ],
    },
    {
      title: 'Support',
      items: [
        { text: 'Help Centre', href: '/help-centre' },
        { text: 'Live Support', href: '/live-support' },
        { text: 'Helpline', href: '/helpline' },
      ],
    },
  ]

  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 90px;
      `}
    >
      {columns.map((col) => (
        <div key={col.title}
             css={css`display: flex;
               flex-direction: column;`}
        >
          <FooterListLabel text={col.title} />
          <div
            css={css`
              display: flex;
              flex-direction: column;
              gap: 8px;
            `}
          >
            {col.items.map((item) => (
              <FooterListItem key={item.text}
                              text={item.text}
                              href={item.href}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default FooterList
