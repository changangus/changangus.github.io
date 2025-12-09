import { Canvas } from '@react-three/fiber';
import { canvasContainer } from './webgl.css';
import LogicScene from './LogicScene';
import { useMode } from '../../context/ModeContext';

const WebGLExperience = () => {
  useMode(); // Simply ensure context is loaded

  return (
    <div className={canvasContainer}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <LogicScene />
      </Canvas>
    </div>
  );
};

export default WebGLExperience;
