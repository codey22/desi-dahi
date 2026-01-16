'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

function ClayPot() {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            // Gentle rotation
            meshRef.current.rotation.y += 0.005;
            // Subtle floating animation
            meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
        }
    });

    return (
        <group>
            {/* Clay Pot Body */}
            <mesh ref={meshRef} position={[0, 0, 0]}>
                <latheGeometry
                    args={[
                        [
                            new THREE.Vector2(0, 0),
                            new THREE.Vector2(0.5, 0),
                            new THREE.Vector2(0.8, 0.5),
                            new THREE.Vector2(0.9, 1),
                            new THREE.Vector2(0.85, 1.5),
                            new THREE.Vector2(0.7, 2),
                            new THREE.Vector2(0.6, 2.3),
                            new THREE.Vector2(0.5, 2.5),
                        ],
                        32,
                    ]}
                />
                <meshStandardMaterial
                    color="#C17A5C"
                    roughness={0.8}
                    metalness={0.2}
                />
            </mesh>

            {/* Pot Rim */}
            <mesh position={[0, 2.5, 0]}>
                <torusGeometry args={[0.55, 0.08, 16, 32]} />
                <meshStandardMaterial
                    color="#A66B50"
                    roughness={0.9}
                    metalness={0.1}
                />
            </mesh>

            {/* Curd inside (white creamy color) */}
            <mesh position={[0, 2.2, 0]}>
                <cylinderGeometry args={[0.5, 0.5, 0.3, 32]} />
                <meshStandardMaterial
                    color="#FFFDD0"
                    roughness={0.3}
                    metalness={0.1}
                    emissive="#FFF4CC"
                    emissiveIntensity={0.2}
                />
            </mesh>
        </group>
    );
}

export default function ClayPot3D() {
    return (
        <div className="w-full h-[400px] md:h-[500px]">
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 2, 6]} />
                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    minPolarAngle={Math.PI / 3}
                    maxPolarAngle={Math.PI / 1.5}
                />

                {/* Lighting */}
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
                <pointLight position={[-5, 3, -5]} intensity={0.5} color="#FF9933" />
                <spotLight
                    position={[0, 10, 0]}
                    angle={0.3}
                    penumbra={1}
                    intensity={0.5}
                    color="#F4C430"
                />

                <ClayPot />
            </Canvas>
        </div>
    );
}
