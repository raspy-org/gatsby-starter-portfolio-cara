import React, { useRef, useEffect } from 'react';
import { useSpring, animated, to } from '@react-spring/web';

const Button = ({ children }) => {

  const target = useRef(null)

  const [{ x, y, rotateX, rotateY, rotateZ, zoom, scale }, api] = useSpring(
    () => ({
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      scale: 1,
      zoom: 0,
      x: 0,
      y: 0,
      config: { mass: 5, tension: 900, friction: 10 },
    }))

    const onClick = () => {
      api({ rotateX: 0, rotateY: 0, scale: 1.2 })
      setTimeout(() => {
        api({ rotateX: 0, rotateY: 0, scale: 1 })
      }, 50);
    }

  return (
    <animated.button
      ref={target}
      style={{
        transform: 'perspective(600px)',
        x,
        y,
        scale: to([scale, zoom], (s, z) => s + z),
        rotateX,
        rotateY,
        rotateZ,
        display: 'inline-block',
        border: 'none',
        padding: 0,
        margin: 0,
        textDecoration: 'none',
        color: '#ffffff',
        fontFamily: 'sans-serif',
        fontSize: '1rem',
        cursor: 'pointer',
        textAlign: 'center',
        transition:
          'background 250ms ease-in-out, \n                transform 150ms ease',
        WebkitAppearance: 'none',
        MozAppearance: 'none'
      }}
      onClick={onClick}>
        {children}
    </animated.button>
  );
}

export default Button;
