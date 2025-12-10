import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useMode } from '../../context/ModeContext';

const LogicScene = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const { isLightMode } = useMode();

  const color = isLightMode ? '#ea580c' : '#3b82f6';

  useFrame((state) => {
    // Scroll Calculation
    const scrollY = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const scrollProgress = maxScroll > 0 ? scrollY / maxScroll : 0;

    // Camera Zoom Out Logic
    // Move from z=5 (inside) to z=50 (outside)
    const targetZ = 5 + scrollProgress * 20;
    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, targetZ, 0.1);

    // Scroll Rotation Logic (Applied to Group)
    if (groupRef.current) {
      groupRef.current.rotation.y = scrollProgress * Math.PI * 0.2;
      groupRef.current.rotation.x = scrollProgress * Math.PI * 0.2;
    }

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
    <group ref={groupRef}>
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
    </group>
  );
};

export default LogicScene;
