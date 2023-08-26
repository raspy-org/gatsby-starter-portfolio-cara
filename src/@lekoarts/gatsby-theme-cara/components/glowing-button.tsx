import { keyframes } from '@emotion/react';
import React from 'react';
import { Button, ThemeUICSSObject } from 'theme-ui'
import useTextMeasurer from '../hooks/use-text-measurer'


const GlowingButton = ({ children }) => {

  const glowing = keyframes`
    0% { background-position: 0 0; }
    50% { background-position: 400% 0; }
    100% { background-position: 0 0; }
  `

  const width = useTextMeasurer({ value: children })
  const padding = 36;

  const buttonStyle: ThemeUICSSObject = {
    height: "50px",
    minWidth: `${width + padding}px`,
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
    <Button sx={buttonStyle}>
      {children}
    </Button>
  );
};

export default GlowingButton;
