import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

const BouncingButton = ({ children, onClick, gradient }) => {
  const [clicked, setClicked] = useState(false);

  const springProps = useSpring({
    scale: clicked ? 1.2 : 1,
    config: { mass: 5, tension: 900, friction: 10 },
  });

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
      onClick()
    }, 50);
  };

  return (
    <animated.button
      onClick={handleClick}
      style={{
        transform: springProps.scale.to(scale => `scale(${scale})`),
        margin: '0 10px',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        background: gradient ?? 'linear-gradient(327deg, #FF6CAB, #7366FF)',
        cursor: 'pointer',
      }}
    >
      {children}
    </animated.button>
  );
};

export default BouncingButton;