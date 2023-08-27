/** @jsx jsx */
import { Flex, jsx } from 'theme-ui';
import Content from '../elements/content';
import Divider from '../elements/divider';
import Inner from '../elements/inner';
import { UpDown, UpDownWide } from '../styles/animations';
import Svg from './svg';
/** @jsx jsx */
// @ts-ignore
import Intro from '../sections/intro';
import DarkModeToggle from './dark-mode-toggle';
import GlowingLinkButton from './glowing-button-link';
import Name from './name';

const Header = ({ offset, factor = 1 }: { offset: number; factor?: number }) => {
  return (
    <div>
      <Flex
        sx={{
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'absolute',
          zIndex: 100,
          width: '100%',
          p: 20,
        }}>
        <Name>Ross Rasmussen</Name>
        <Flex sx={{ gap: 30 }}>
          <GlowingLinkButton to='/'>Home</GlowingLinkButton>
          <GlowingLinkButton to='/about'>About</GlowingLinkButton>
          <GlowingLinkButton to='/resume'>Resume</GlowingLinkButton>
          <DarkModeToggle></DarkModeToggle>
        </Flex>
      </Flex>
      <Divider speed={0.2} offset={offset} factor={factor}>
        <UpDown>
          <Svg icon='triangle' hiddenMobile width={48} stroke color='icon_orange' left='10%' top='20%' />
          <Svg icon='hexa' width={48} stroke color='icon_red' left='60%' top='70%' />
          <Svg icon='box' width={6} color='icon_darker' left='60%' top='15%' />
        </UpDown>
        <UpDownWide>
          <Svg icon='arrowUp' hiddenMobile width={16} color='icon_blue' left='80%' top='10%' />
          <Svg icon='triangle' width={12} stroke color='icon_brightest' left='90%' top='50%' />
          <Svg icon='circle' width={16} color='icon_darker' left='70%' top='90%' />
          <Svg icon='triangle' width={16} stroke color='icon_darkest' left='30%' top='65%' />
          <Svg icon='cross' width={16} stroke color='icon_pink' left='28%' top='15%' />
          <Svg icon='circle' width={6} color='icon_darkest' left='75%' top='10%' />
          <Svg icon='upDown' hiddenMobile width={8} color='icon_darkest' left='45%' top='10%' />
        </UpDownWide>
        <Svg icon='circle' hiddenMobile width={24} color='icon_darker' left='5%' top='70%' />
        <Svg icon='circle' width={6} color='icon_darkest' left='4%' top='20%' />
        <Svg icon='circle' width={12} color='icon_darkest' left='50%' top='60%' />
        <Svg icon='upDown' width={8} color='icon_darkest' left='95%' top='90%' />
        <Svg icon='upDown' hiddenMobile width={24} color='icon_darker' left='40%' top='80%' />
        <Svg icon='triangle' width={8} stroke color='icon_darker' left='25%' top='5%' />
        <Svg icon='circle' width={64} color='icon_green' left='95%' top='5%' />
        <Svg icon='box' hiddenMobile width={64} color='icon_purple' left='5%' top='90%' />
        <Svg icon='box' width={6} color='icon_darkest' left='10%' top='10%' />
        <Svg icon='box' width={12} color='icon_darkest' left='40%' top='30%' />
        <Svg icon='hexa' width={16} stroke color='icon_darker' left='10%' top='50%' />
        <Svg icon='hexa' width={8} stroke color='icon_darker' left='80%' top='70%' />
      </Divider>
      <Content sx={{ variant: `texts.bigger` }} speed={0.4} offset={offset} factor={factor}>
        <Inner>
          <Intro />
        </Inner>
      </Content>
    </div>
  )}

export default Header
