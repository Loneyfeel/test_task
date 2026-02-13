import {css} from '@emotion/react'
import Banner from '../shared/ui/composite/Banner'
import Banner1 from '../assets/images/banner1.png'
import Banner2 from '../assets/images/banner2.png'
import Banner3 from '../assets/images/banner3.png'
import Badge from '../shared/ui/base/Badge'
import BaseText from '../shared/ui/base/BaseText'
import Button from '../shared/ui/base/Button'
import FilterTabs from '../shared/ui/composite/FilterTabs'
import BaseInput from '../shared/ui/base/BaseInput'
import CardGridRandomizer from '../shared/ui/composite/CardGridRandomizer'
import CardCategoryBox from '../shared/ui/composite/CardCategoryBox'
import {Footer} from '../layout'
import SidebarWrapper from '../shared/ui/composite/ChatDrops/SidebarWrapper'
import {useEffect, useState} from 'react'

export function BoxesPage() {
  const breakpoints = {
    max1024: 768,
    max1280: 1024,
    max1540: 1185,
    max1920: 1565
  }

  const [open, setOpen] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1280) {
        setOpen(false)
      } else {
        setOpen(true)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <div css={css`
        display: grid;
        grid-template-columns: ${open ? '1fr 300px' : '1fr 40px'};
        position: relative;
        padding: 20px;
        overflow-x: hidden;
        @media (max-width: ${breakpoints.max1540}px) {
          grid-template-columns: ${open ? '1fr 200px' : '1fr 40px'};
        }
      `}
      >
        <div 
          css={css`
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            @media (min-width: 2560px) {
              margin-right: -320px;
            }
          `}
          style={{flex: 1}}>
          <div
            css={
              css`
                width: 100%;
                max-width: 1920px;
                gap: 28px;
                display: flex;
                flex-direction: column;
                align-items: center;
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
                width: 100%;
                display: flex;
                gap: 20px;
              `}
            >
              <div
                css={css`
                  width: 100%;
                  height: 340px;
                `}
              >
                <Banner
                  image={Banner1}
                  align={'left'}
                >
                  <div
                    css={css`
                      display: flex;
                      flex-direction: column;
                      justify-content: space-between;
                      height: 100%;
                    `}
                  >
                    <div>
                      <Badge
                        variant={'Limited'}
                      />
                    </div>
                    <div>
                      <div>
                        <BaseText
                          fontSize={54}
                          textColor={'#FFFFFF'}
                        >
                          Upgrade <br /> Your Look
                        </BaseText>
                        <BaseText
                          fontSize={16}
                          textColor={'#FFFFFF'}
                        >
                          Open the Hermes Box and add <br /> accessories and cosmetics to your <br /> inventory.
                        </BaseText>
                      </div>
                    </div>
                    <div>
                      <Button
                        variant={'action'}
                        text={'Open Box'}
                        onClick={() => console.log('open box')}
                      />
                    </div>
                  </div>
                </Banner>
              </div>
              <div
                css={css`
                  display: flex;
                  width: 560px;
                  height: 340px;
                  @media (max-width: 1280px) {
                    display: none;
                  }
                `}
              >
                <Banner
                  image={Banner2}
                >
                  <div
                    css={css`
                      display: flex;
                      flex-direction: column;
                      justify-content: space-between;
                      height: 100%;
                    `}
                  >
                    <div>
                      <Badge
                        variant={'Bonus'}
                      />
                    </div>
                    <div>
                      <div>
                        <BaseText
                          fontSize={54}
                          textColor={'#FFFFFF'}
                        >
                          Sign up <br />
                          to Get a <br />
                          FREE Box
                        </BaseText>
                      </div>
                    </div>
                    <div>
                      <Button
                        variant={'action'}
                        text={'Sign Up'}
                        onClick={() => console.log('Sign Up')}
                      />
                    </div>
                  </div>
                </Banner>
              </div>
            </div>
            <div
              css={css`
                display: grid;
                grid-template-columns: minmax(0, 1fr) auto;
                align-items: center;
                width: 100%;
                gap: 12px;
                border-radius: 14px;
                padding: 12px;
                background-color: #FFFFFF;
              `}
            >
              <div
                css={css`
                  flex: 1 1 0;
                  min-width: 0;
                  overflow: hidden;
                `}
              >
                <FilterTabs />
              </div>
              <div
                css={css`
                  display: flex;
                  flex: 0 0 auto;
                  align-items: center;
                  flex-shrink: 0;
                  gap: 6px
                `}
              >
                <BaseInput
                  placeholder={'Type here...'}
                />
                <Button
                  text={'Search'}
                  variant={'purple'}
                  onClick={() => console.log('search')}
                />
              </div>
            </div>
            <div style={{display: 'flex', width: '100%'}}>
              <CardGridRandomizer />
            </div>

            <CardCategoryBox category={'Hot'} />

            <div
              css={css`
                width: 100%;
                height: 340px;
              `}
            >
              <Banner
                image={Banner3}
                align={'center'}
              >
                <div
                  css={css`
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    align-items: center;
                    height: 100%;
                  `}
                >
                  <div>
                    <Badge
                      variant={'Community'}
                    />
                  </div>
                  <div>
                    <div>
                      <BaseText
                        fontSize={54}
                        textColor={'#FFFFFF'}
                        weight={'bold'}
                      >
                        Invite friends,
                      </BaseText>
                      <BaseText
                        fontSize={54}
                        textColor={'#5146C1'}
                        weight={'bold'}
                      >
                        Earn rewards
                      </BaseText>
                      <BaseText
                        fontSize={16}
                        textColor={'#000000'}
                      >
                        Share your link & get bonuses when they unbox.
                      </BaseText>
                    </div>
                  </div>
                  <div>
                    <Button
                      variant={'action'}
                      text={'Open Apple Box'}
                      onClick={() => console.log('open box')}
                    />
                  </div>
                </div>
              </Banner>
            </div>

            <CardCategoryBox category={'YOLO'} />

          </div>
          <Footer />
        </div>

        <SidebarWrapper
          open={open}
          setOpen={setOpen}
        />
      </div>
    </>
  )
}
