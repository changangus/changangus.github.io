import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useMode } from '../../context/ModeContext';

const LogicScene = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { isLightMode } = useMode();

  const color = isLightMode ? '#ea580c' : '#3b82f6';

  useFrame((state) => {
    if (!meshRef.current) return;
    
    // Continuous subtle rotation
    meshRef.current.rotation.x += 0.0001;
    meshRef.current.rotation.y += 0.0001;
    meshRef.current.rotation.z += 0.0001;

    // Mouse reaction
    const { x, y } = state.pointer;
    meshRef.current.rotation.x += y * 0.0005;
    meshRef.current.rotation.y += x * 0.0005;
  });

  return (
    <mesh ref={meshRef}>
      {/* args: width, height, depth, widthSegments, heightSegments, depthSegments */}
      <boxGeometry args={[35, 35, 35, 10, 10, 10]} />
      <meshBasicMaterial
        color={color}
        wireframe={true}
        transparent
        opacity={0.15} // Subtle visibility
      />
    </mesh>
  );
};

export default LogicScene;