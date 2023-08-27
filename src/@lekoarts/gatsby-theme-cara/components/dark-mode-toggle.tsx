/** @jsx jsx */
import {  jsx, Switch, useColorMode, Box, Flex, Label, ThemeUICSSObject } from 'theme-ui';
import { keyframes } from "@emotion/react";

const DarkModeToggle = () => {
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`

  const toggleColorMode = (e: any) => {
    setColorMode(isDark ? `light` : `dark`)
  }

  const glowing = keyframes`
  0% { background-position: 0 0; }
  50% { background-position: 400% 0; }
  100% { background-position: 0 0; }
  `
  
  const glowingStyle: ThemeUICSSObject = {
  height: "22px",
  minWidth: '20px',
  border: "none",
  outline: "none",
  color: "#fff",
  background: "#111",
  cursor: "pointer",
  position: "relative",
  zIndex: 0,
  borderRadius: "10px",
  '::before': {
    content: "''",
    background:
      "linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000)",
    position: "absolute",
    top: "-2px",
    left: "-2px",
    backgroundSize: "400%",
    zIndex: -1,
    filter: "blur(5px)",
    width: "calc(100% + 4px)",
    height: "calc(100% + 4px)",
    animation: `${glowing} 20s linear infinite`,
    opacity: 0,
    transition: "opacity .3s ease-in-out",
    borderRadius: "10px"
  },
  ':active:after': {
    background: 'transparent'
  },
  ':hover:before': {
    opacity: 1
  },
  ':after': {
    zIndex: -1,
    content: "''",
    position: "absolute",
    width: "100%",
    height: "100%",
    background: "#111",
    left: "0",
    top: "0",
    borderRadius: "10px"
  }
  };
  return (
    <Flex sx={{ alignItems: 'center'  }}>
    <Box>
      <Switch onClick={toggleColorMode} sx={{ ...glowingStyle, outline: '1px solid white', width: '40px', textDecoration: 'strong' }}  id='dark-mode' />
    </Box>
    <Label htmlFor='dark-mode' sx={{ flex: 1 }}>
      {isDark ? `Light` : `Dark`}
    </Label>
  </Flex>
  )
}

export default DarkModeToggle
