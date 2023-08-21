/** @jsx jsx */
import { Box, Flex, jsx } from "theme-ui"

const Footer = () => {
  return (
    <Box as="footer" variant="footer" sx={{ width: '100%'}}>
      <Flex
        sx={{
          justifyContent: `center`,
          alignItems: `center`,
          mt: 3,
          color: `text`,
          fontWeight: `semibold`,
          a: { color: `text` },
        }}
      >
        Copyright &copy; {new Date().getFullYear()}. All rights reserved.
      </Flex>
    </Box>
  )
}

export default Footer
