import {css} from '@emotion/react'
import FooterBigIcon from '@/assets/icons/logoTextFooterBig.svg'
import FooterIcon from '@/assets/icons/logoTextFooter.svg'
import LogoIcon from '@/assets/icons/logo.svg'
import InstagramIcon from '@/assets/icons/instagram.svg?react'
import BaseText from '../shared/ui/base/BaseText'
import FooterList from '../shared/ui/composite/FooterList'
import Button from '../shared/ui/base/Button'

export function Footer() {
  const breakpoints = {
    max1024: 768,
    max1280: 1024,
    max1540: 1185,
    max1920: 1565
  }

  return (
    <footer
      style={{borderTop: '1px solid rgba(255,255,255,0.12)', marginTop: 24}}
    >
      <div
        css={css`
          display: flex;
          justify-content: center;
          padding-inline: 20px;
        `}
      >
        <div
          css={
            css`
              width: 100%;
              max-width: 1920px;
              display: flex;
              flex-direction: column;
              position: relative;
              padding-right: 20px;

              @media (max-width: ${breakpoints.max1024}px) {
                max-width: ${breakpoints.max1024}px;
              }
              @media (max-width: ${breakpoints.max1280}px) {
                max-width: ${breakpoints.max1280}px;
              }
              @media (max-width: ${breakpoints.max1540}px) {
                max-width: ${breakpoints.max1540}px;
              }
              @media (max-width: ${breakpoints.max1920}px) {
                max-width: ${breakpoints.max1920}px;
              }
            `
          }
        >

          <div
            css={css`
              display: flex;
              align-items: center;
              gap: 16px
            `}
          >
            <img src={LogoIcon}
                 alt={''}
                 css={css`
                   height: 80px;
                 `}
            />
            <img src={FooterIcon}
                 alt={''}
                 css={css`
                   height: 52px;
                   margin-top: -7px;
                 `}
            />
          </div>
          <div
            css={css`
              display: flex;
              justify-content: space-between;
              margin-top: 20px;
              @media (max-width: 1280px) {
                flex-direction: column;
                gap: 40px;
              }
            `}
          >
            <div>
              <BaseText
                fontSize={12}
              >
                <strong>RollBox</strong> is an online entertainment platform for unboxing experiences, <br /> built with a focus on emotion, excitement, and fair gameplay. <br /><br />

                All outcomes are generated transparently using a provably fair system, <br /> ensuring verifiable and fair results for every opening.<br /><br />

                Each result can be independently verified after the opening. No <br /> purchase is necessary where applicable. Void where prohibited by law.<br /><br />

                Please review our <span style={{
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
              >Terms of Service </span> for more information.<br /><br />

                Play responsibly.

              </BaseText>
            </div>
            <div>
              <FooterList />
            </div>
          </div>
          <div
            css={css`
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin-top: 24px;
            `}
          >
            <div
              css={css`
                display: flex;
                gap: 6px
              `}
            >
              <Button
                icon={InstagramIcon}
                variant={'secondary'}
                onClick={() => {
                  console.log('inst')
                }}
              />
              <Button
                icon={InstagramIcon}
                variant={'secondary'}
                onClick={() => {
                  console.log('inst')
                }}
              />
              <Button
                icon={InstagramIcon}
                variant={'secondary'}
                onClick={() => {
                  console.log('inst')
                }}
              />
            </div>
            <BaseText
              fontSize={12}
            >
              RollBox © {new Date().getFullYear()} All rights reserved
            </BaseText>
          </div>
          <div
            css={css`
              width: 100%;
              z-index: -1;
            `}
          >
            <img
              src={FooterBigIcon}
              alt={''}
              css={css`
                width: 100%;
                margin-top: -20px;
              `}
            />
          </div>
        </div>
        <div
          css={css`
            max-width: 300px;
            @media (max-width: ${breakpoints.max1540}px) {
              max-width: 200px;
            }
          `}
        >
        </div>
      </div>
    </footer>
  )
}
