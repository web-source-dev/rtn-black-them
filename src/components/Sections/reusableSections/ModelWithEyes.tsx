"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const EyeTrackingModel = () => {
  const model = useGLTF("/CartoonCharacter_FaceTrack.glb"); // put your model path
  const leftEye = model.nodes.LeftEye as THREE.Mesh;
  const rightEye = model.nodes.RightEye as THREE.Mesh;
  const eyeGroup = useRef<THREE.Group>(null);

  const { viewport, mouse } = useThree();

  useFrame(() => {
    if (!leftEye || !rightEye) return;

    const x = mouse.x * viewport.width * 0.2;
    const y = mouse.y * viewport.height * 0.2;

    leftEye.lookAt(x, y, 0);
    rightEye.lookAt(x, y, 0);
  });

  return (
    <primitive object={model.scene} ref={eyeGroup} position={[0, 0, 0]} />
  );
};

export default function ModelCanvas() {
  return (
    <div className="w-full h-[300px]">
      <Canvas camera={{ position: [0, 0, 5], fov: 35 }}>
        <ambientLight intensity={1} />
        <EyeTrackingModel />
      </Canvas>
    </div>
  );
}
