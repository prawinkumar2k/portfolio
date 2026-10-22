import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

// Mouse tracking for parallax camera effect
function CameraController() {
  const { camera, pointer } = useThree();
  useFrame(() => {
    // Smoothly interpolate camera position based on mouse pointer
    const targetX = pointer.x * 1.5;
    const targetY = pointer.y * 0.5;
    camera.position.x += (targetX - camera.position.x) * 0.05;
    camera.position.y += (targetY - camera.position.y) * 0.05;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

// Advanced glowing abstract core
function AbstractCore() {
  const mesh = useRef<THREE.Mesh>(null);
  const ring = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (mesh.current) {
      mesh.current.rotation.x = time * 0.2;
      mesh.current.rotation.y = time * 0.3;
    }
    if (ring.current) {
      ring.current.rotation.x = Math.PI / 2 + Math.sin(time * 0.5) * 0.2;
      ring.current.rotation.y = time * 0.1;
    }
  });

  return (
    <group position={[0, 0, -2]}>
      <mesh ref={mesh}>
        <icosahedronGeometry args={[1.5, 1]} />
        <meshStandardMaterial 
          color="#a855f7" 
          wireframe 
          transparent 
          opacity={0.3} 
          emissive="#7c3aed"
          emissiveIntensity={0.5}
        />
      </mesh>
      <mesh ref={ring}>
        <torusGeometry args={[2.5, 0.02, 16, 100]} />
        <meshBasicMaterial color="#38bdf8" transparent opacity={0.5} />
      </mesh>
    </group>
  );
}

function WaveGrid() {
  const mesh = useRef<THREE.Points>(null);
  
  const [positions, count] = useMemo(() => {
    const width = 45;
    const depth = 20;
    const total = width * depth;
    const pos = new Float32Array(total * 3);
    let i = 0;
    for (let x = 0; x < width; x++) {
      for (let z = 0; z < depth; z++) {
        pos[i * 3] = (x - width / 2) * 0.35;
        pos[i * 3 + 1] = -1.5; // Offset vertically lower
        pos[i * 3 + 2] = (z - depth / 2) * 0.35;
        i++;
      }
    }
    return [pos, total];
  }, []);

  useFrame((state) => {
    if (!mesh.current) return;
    const time = state.clock.getElapsedTime();
    const positionAttr = mesh.current.geometry.attributes.position;
    const array = positionAttr.array as Float32Array;
    
    for (let i = 0; i < count; i++) {
      const idx = i * 3;
      const x = array[idx];
      const z = array[idx + 2];
      array[idx + 1] = Math.sin(x * 0.2 + time * 1.2) * Math.cos(z * 0.2 + time * 1.2) * 0.5 - 1.5;
    }
    positionAttr.needsUpdate = true;
    mesh.current.rotation.y = Math.sin(time * 0.05) * 0.1;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#a855f7"
        size={0.065}
        sizeAttenuation={true}
        transparent
        opacity={0.3}
        depthWrite={false}
      />
    </points>
  );
}

function FloatingNodes({ count = 35 }) {
  const mesh = useRef<THREE.Points>(null);
  
  const [positions, velocities] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vels = [];
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 6;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8;
      vels.push({
        x: (Math.random() - 0.5) * 0.008,
        y: (Math.random() - 0.5) * 0.008,
        z: (Math.random() - 0.5) * 0.008
      });
    }
    return [pos, vels];
  }, [count]);

  useFrame(() => {
    if (!mesh.current) return;
    const positionAttr = mesh.current.geometry.attributes.position;
    const array = positionAttr.array as Float32Array;
    
    for (let i = 0; i < count; i++) {
      const idx = i * 3;
      let x = array[idx] + velocities[i].x;
      let y = array[idx + 1] + velocities[i].y;
      let z = array[idx + 2] + velocities[i].z;
      
      if (Math.abs(x) > 7.5) velocities[i].x *= -1;
      if (Math.abs(y) > 3) velocities[i].y *= -1;
      if (Math.abs(z) > 4) velocities[i].z *= -1;
      
      array[idx] = x;
      array[idx + 1] = y;
      array[idx + 2] = z;
    }
    positionAttr.needsUpdate = true;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#38bdf8"
        size={0.12}
        sizeAttenuation={true}
        transparent
        opacity={0.8}
        depthWrite={false}
      />
    </points>
  );
}

export default function TechParticles3D() {
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const support = !!(
        window.WebGLRenderingContext &&
        (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
      );
      setHasWebGL(support);
    } catch {
      setHasWebGL(false);
    }
  }, []);

  if (!hasWebGL) {
    return (
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas 
        dpr={[1, 1.5]}
        gl={{ powerPreference: "high-performance", antialias: false, alpha: true }}
        camera={{ position: [0, 0, 5], fov: 55 }}
      >
        <ambientLight intensity={1.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#a855f7" />
        <CameraController />
        <AbstractCore />
        <WaveGrid />
        <FloatingNodes count={35} />
      </Canvas>
    </div>
  );
}
