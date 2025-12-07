import { Canvas } from '@react-three/fiber';
import { canvasContainer } from './webgl.css';
import LogicScene from './LogicScene';
import CreativeScene from './CreativeScene';
import { useMode } from '../../context/ModeContext';
import { useSpring, animated } from '@react-spring/three';

const WebGLExperience = () => {
  const { isCreativeMode, isReducedMotion } = useMode();

  const logicSpring = useSpring({
    scale: isCreativeMode ? 0 : 1,
    opacity: isCreativeMode ? 0 : 1,
    config: { mass: 1, tension: 120, friction: 26 },
    immediate: isReducedMotion // Instant transition if reduced motion is enabled
  });

  const creativeSpring = useSpring({
    scale: isCreativeMode ? 1 : 0,
    opacity: isCreativeMode ? 1 : 0,
    config: { mass: 1, tension: 120, friction: 26 },
    immediate: isReducedMotion // Instant transition if reduced motion is enabled
  });

  return (
    <div className={canvasContainer}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        
         {/* Logic Scene Group */}
        <animated.group 
          scale={logicSpring.scale}
          visible={logicSpring.opacity.to(o => o > 0.01)}
        >
          <LogicScene />
        </animated.group>

        {/* Creative Scene Group */}
         <animated.group 
          scale={creativeSpring.scale}
          visible={creativeSpring.opacity.to(o => o > 0.01)}
        >
           <CreativeScene />
        </animated.group>

      </Canvas>
    </div>
  );
};

export default WebGLExperience;
