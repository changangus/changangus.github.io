import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const LogicScene = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    
    // Continuous subtle rotation
    meshRef.current.rotation.x += 0.001;
    meshRef.current.rotation.y += 0.002;

    // Mouse reaction
    const { x, y } = state.pointer;
    meshRef.current.rotation.x += y * 0.0005;
    meshRef.current.rotation.y += x * 0.0005;
  });

  return (
    <mesh ref={meshRef}>
      {/* args: width, height, depth, widthSegments, heightSegments, depthSegments */}
      <boxGeometry args={[30, 30, 30, 100, 100, 100]} />
      <meshBasicMaterial
        color="#3b82f6" // Logic Blue
        wireframe={true}
        transparent
        opacity={0.15} // Subtle visibility
      />
    </mesh>
  );
};

export default LogicScene;
