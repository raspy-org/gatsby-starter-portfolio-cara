import Seo from "@lekoarts/gatsby-theme-cara/src/components/seo"
import { Image, Flex } from 'theme-ui'
import * as React from "react"
import DarkModeToggle from '../@lekoarts/gatsby-theme-cara/components/dark-mode-toggle';
import GlowingLinkButton from '../@lekoarts/gatsby-theme-cara/components/glowing-button-link';
import Name from '../@lekoarts/gatsby-theme-cara/components/name';

const Resume = () => (
  <Flex>
    <Flex sx={{
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'absolute',
      zIndex: 100,
      height: 100,
      width: '100%',
      p: 20,
    }}>
      <Name>Ross Rasmussen</Name>
      <Flex sx={{ gap: 30 }}>
        <GlowingLinkButton to='/'>Home</GlowingLinkButton>
        <GlowingLinkButton to='/resume'>Resume</GlowingLinkButton>
        <DarkModeToggle></DarkModeToggle>
    </Flex>
    </Flex>
    <Flex sx={{ overflow: 'auto', justifyContent: 'center', width: '100vw' }}>
      <Seo title="Resume" />
      <Image sx={{ p: '130px 0 50px 0', width: '60vw' }} src='/resume.jpeg'/>
    </Flex>
  </Flex>
)

export default Resume
