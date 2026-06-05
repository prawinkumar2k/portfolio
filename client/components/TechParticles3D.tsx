import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

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
        // Space out particles
        pos[i * 3] = (x - width / 2) * 0.35;
        pos[i * 3 + 1] = -0.5; // Offset vertically
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
    
    for (let i = 0; i < count; i++) {
      const x = positionAttr.getX(i);
      const z = positionAttr.getZ(i);
      // Create a smooth rolling wave effect
      const y = Math.sin(x * 0.2 + time * 1.2) * Math.cos(z * 0.2 + time * 1.2) * 0.3 - 0.3;
      positionAttr.setY(i, y);
    }
    positionAttr.needsUpdate = true;
    
    // Rotate the entire grid slowly
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
        opacity={0.45}
        depthWrite={false}
      />
    </points>
  );
}

function FloatingNodes({ count = 25 }) {
  const mesh = useRef<THREE.Points>(null);
  
  const [positions, velocities] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vels = [];
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 4;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 6;
      vels.push({
        x: (Math.random() - 0.5) * 0.005,
        y: (Math.random() - 0.5) * 0.005,
        z: (Math.random() - 0.5) * 0.005
      });
    }
    return [pos, vels];
  }, [count]);

  useFrame((state) => {
    if (!mesh.current) return;
    const positionAttr = mesh.current.geometry.attributes.position;
    
    for (let i = 0; i < count; i++) {
      let x = positionAttr.getX(i) + velocities[i].x;
      let y = positionAttr.getY(i) + velocities[i].y;
      let z = positionAttr.getZ(i) + velocities[i].z;
      
      // Boundary check & bounce
      if (Math.abs(x) > 6) velocities[i].x *= -1;
      if (Math.abs(y) > 2) velocities[i].y *= -1;
      if (Math.abs(z) > 3) velocities[i].z *= -1;
      
      positionAttr.setX(i, x);
      positionAttr.setY(i, y);
      positionAttr.setZ(i, z);
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
        opacity={0.7}
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
    <div className="absolute inset-0 pointer-events-none z-0">
      <Canvas camera={{ position: [0, 0, 4.5], fov: 55 }}>
        <ambientLight intensity={0.7} />
        <WaveGrid />
        <FloatingNodes count={35} />
      </Canvas>
    </div>
  );
}
