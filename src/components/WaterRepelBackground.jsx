import { Canvas, useFrame } from "@react-three/fiber";
import { Plane, useTexture } from "@react-three/drei";
import { useRef, useState, useMemo, Suspense } from "react";
import { gsap } from "gsap";
import * as THREE from "three";
import { ErrorBoundary } from "react-error-boundary";

// Individual Leaf Component
const Leaf = ({ position, rotation, scale, texture }) => {
  const ref = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame(({ clock }) => {
    ref.current.position.y += Math.sin(clock.elapsedTime + position[0]) * 0.001;
    ref.current.rotation.y += 0.005;
    ref.current.rotation.z += 0.003;
  });

  const handlePointerOver = () => {
    if (!hovered) {
      gsap.to(ref.current.position, {
        x: "+=0.3",
        y: "+=0.3",
        duration: 0.4,
        ease: "power2.out",
      });
      setHovered(true);
      setTimeout(() => setHovered(false), 1000);
    }
  };

  const handleClick = () => {
    gsap.to(ref.current.scale, {
      x: scale * 1.3,
      y: scale * 1.3,
      z: scale * 1.3,
      duration: 0.2,
      yoyo: true,
      repeat: 1,
      ease: "power2.out",
    });
  };

  return (
    <mesh
      ref={ref}
      position={position}
      rotation={rotation}
      scale={scale}
      onPointerOver={handlePointerOver}
      onClick={handleClick}
    >
      <planeGeometry args={[1.3, 1.3]} /> 
      {texture && (
        <meshBasicMaterial
          map={texture}
          transparent={true}
          side={THREE.DoubleSide}
        />
      )}
    </mesh>
  );
};

// Floating Leaves Component
const Leaves = () => {
  const leaves = useMemo(() => {
    return Array.from({ length: 25 }, () => ({
      position: [
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 5,
      ],
      rotation: [
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2,
      ],
      scale: Math.random() * 0.5 + 0.2, // Increased size
    }));
  }, []);

  const leafTexture = useTexture("/leaf_texture.png"); // Replace with your actual texture path

  return leaves.map((leaf, index) => (
    <Suspense key={index} fallback={null}>
      <Leaf {...leaf} texture={leafTexture} />
    </Suspense>
  ));
};

// Water Plane Component
const WaterPlane = () => {
  const waterTexture = useTexture("/water_texture.jpg"); // Replace with your actual texture path

  useMemo(() => {
    if (waterTexture) {
      waterTexture.wrapS = waterTexture.wrapT = THREE.RepeatWrapping;
      waterTexture.repeat.set(4, 4);
    }
  }, [waterTexture]);

  return (
    <Plane args={[20, 20]} rotation-x={-Math.PI / 2} position={[0, -1, 0]}>
      <meshBasicMaterial map={waterTexture} />
    </Plane>
  );
};

// Main WaterRepelBackground Component
const WaterRepelBackground = ({ children }) => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Gradient Background Overlay */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-blue-600 via-blue-300 to-blue-100"></div>

      {/* Water & Leaves Animation - Positioned Behind */}
      <div className="absolute inset-0 -z-10">
        <ErrorBoundary fallback={<div>Something went wrong in the 3D scene!</div>}>
          <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
            <ambientLight intensity={0.8} />
            <pointLight position={[5, 5, 5]} intensity={1.2} />
            <Suspense fallback={null}>
              <WaterPlane />
              <Leaves />
            </Suspense>
          </Canvas>
        </ErrorBoundary>
      </div>

      {/* Main Content (Routes or Dashboard) */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default WaterRepelBackground;
