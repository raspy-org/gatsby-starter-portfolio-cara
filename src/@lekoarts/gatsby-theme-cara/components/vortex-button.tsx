import React, { useRef, useState } from 'react';
import { useSpring, a } from '@react-spring/three';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';

const VortexButton = () => {
  const vortexRef = useRef();
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div>
      <button onClick={handleClick} className="button">
        Toggle Vortex
      </button>
      <Canvas>
        <Vortex rotation={clicked ? [0, 0, 0.5] : [0, 0, 0]} ref={vortexRef} />
      </Canvas>
    </div>
  );
};

const Vortex = ({ rotation }) => {
  const vortexMaterial = new THREE.PointsMaterial({
    color: 'blue',
    size: 0.02,
  });

  const [springs, set] = useSpring(() => ({
    from: { position: [0, 0, 0] },
    position: [0, 0, 2],
    config: { duration: 2000 },
    reset: true,
  }));

  set({ position: [0, 0, 0] });

  return (
    <a.points position-x={springs.position.interpolate(x => x)} rotation={rotation}>
      <points>
        <sphereGeometry args={[1, 32, 32]} />
        <a.pointsMaterial attach="material" args={[vortexMaterial]} />
      </points>
    </a.points>
  );
};

export default VortexButton;
