import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState, useMemo, Suspense } from "react";
import { gsap } from "gsap";
import * as THREE from "three";
import { ErrorBoundary } from "react-error-boundary";
import { useTexture } from "@react-three/drei";

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
      <planeGeometry args={[2, 2]} />
      {texture && (
        <meshBasicMaterial map={texture} transparent={true} side={THREE.DoubleSide} />
      )}
    </mesh>
  );
};

// Floating Leaves Component
const Leaves = () => {
  const leafTexture = useTexture("/leaf_texture.png");

  const leaves = useMemo(() => {
    return Array.from({ length: 50 }, () => ({
      position: [
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 15,
      ],
      rotation: [
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2,
      ],
      scale: Math.random() * 0.5 + 0.3,
    }));
  }, []);

  return leaves.map((leaf, index) => (
    <Suspense key={index} fallback={null}>
      <Leaf {...leaf} texture={leafTexture} />
    </Suspense>
  ));
};

// Main Background Component
const WaterRepelBackground = ({ children }) => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Fixed Moving Gradient Background */}
      <div className="fixed inset-0 -z-20 animate-gradientMove bg-gradient-to-br from-blue-300 via-purple-500 to-blue-300"></div>

      {/* Floating Leaves Animation (Fixed) */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <ErrorBoundary fallback={<div>Something went wrong in the 3D scene!</div>}>
          <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
            <ambientLight intensity={0.8} />
            <pointLight position={[5, 5, 5]} intensity={1.2} />
            <Suspense fallback={null}>
              <Leaves />
            </Suspense>
          </Canvas>
        </ErrorBoundary>
      </div>

      {/* Scrollable Content */}
      <div className="relative z-10 overflow-auto h-screen">{children}</div>

      {/* Global Tailwind Animation */}
      <style>
        {`
          @keyframes gradientMove {
            0% { background-position: 0% 0%; }
            50% { background-position: 100% 100%; }
            100% { background-position: 0% 0%; }
          }

          .animate-gradientMove {
            background-size: 300% 300%;
            animation: gradientMove 12s ease infinite;
          }
        `}
      </style>
    </div>
  );
};

export default WaterRepelBackground;
