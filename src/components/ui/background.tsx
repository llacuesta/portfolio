"use client";

import React, { RefObject } from "react";
import { CameraControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

interface BackgroundProps {
  bgRef: RefObject<CameraControls>;
}

export default function Background(props: BackgroundProps) {
  const { bgRef } = props

  useFrame((_, delta) => {
    if (bgRef.current) {
      bgRef.current.azimuthAngle += delta * 0.1; 
    }
  });

  return (
    <CameraControls
      ref={bgRef}
      mouseButtons={{ left: 0, middle: 0, right: 0, wheel: 0 }}
      maxPolarAngle={(Math.PI * 31) / 60}
      minPolarAngle={(Math.PI * 31) / 60}
    />
  )
}
