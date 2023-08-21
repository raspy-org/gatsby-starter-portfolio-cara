/** @jsx jsx */
import {  jsx, Switch, useColorMode, Flex, Themed, Box, Grid } from "theme-ui";
import { Link } from 'gatsby';
import Content from "../elements/content";

const HeaderTemp = ({ offset, factor = 1 }) => {
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`

  const toggleColorMode = (e: any) => {
    setColorMode(isDark ? `light` : `dark`)
  }

  // TODO: UPDATE font/size of name
  return (
    <Content speed={0.4} offset={offset} factor={factor}>
      <Flex
        sx={{
          gridArea: 'header',
          justifyContent: 'space-between',
          alignItems: 'center',
          m: 20,
        }}>
        <Box>Ross Rasmussen</Box>
        <Flex sx={{ gap: 30 }}>
          <Themed.a as={Link} to="/">Home</Themed.a>  
          <Themed.a as={Link} to="/work">Work</Themed.a>  
          <Themed.a as={Link} to="/about">About</Themed.a>  
          <Themed.a as={Link} to="/blog">Blog</Themed.a>  
          <Themed.a as={Link} to="/resume">Resume</Themed.a>
          <Switch sx={{ outline: '1px solid white', width: '40px', textDecoration: 'strong' }} onClick={toggleColorMode} label={isDark ? `Light` : `Dark`} />
        </Flex>
      </Flex>
    </Content>
  );
};

export default HeaderTemp;