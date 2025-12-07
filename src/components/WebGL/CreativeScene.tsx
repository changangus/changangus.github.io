import { Environment, Float, OrbitControls } from '@react-three/drei';

const CreativeScene = () => {
  return (
    <group>
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <mesh position={[-2, 1, 0]}>
          <torusKnotGeometry args={[0.6, 0.2, 100, 16]} />
          <meshStandardMaterial color="green" roughness={0.3} metalness={0.1} />
        </mesh>
      </Float>
      
      <Float speed={3} rotationIntensity={1.5} floatIntensity={1.5}>
        <mesh position={[2, -1, -1]}>
          <sphereGeometry args={[0.8, 32, 32]} />
          <meshStandardMaterial color="blue" roughness={0.2} metalness={0.2} />
        </mesh>
      </Float>
      
      {/* Add some lights specific to this scene if needed, or rely on global lights */}
      <pointLight position={[5, 5, 5]} intensity={50} color="#ffffff" distance={20} />
      <pointLight position={[-5, -5, 5]} intensity={30} color="#ea580c" distance={20} />
      <Environment preset="forest" />
      <OrbitControls />
    </group>
  );
};

export default CreativeScene;
