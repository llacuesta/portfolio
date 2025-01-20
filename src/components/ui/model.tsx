"use client";

import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei';

export default function Model() {
  const { scene, animations } = useGLTF("./model.glb");
  const group = useRef();

  const { actions } = useAnimations(animations, group);
  useEffect(() => {
    actions['KeyAction.001']!.play();
  }, [actions]);
  console.log(actions)

  return (
    <primitive ref={group} object={scene} scale={0.25}/>
  )
}

useGLTF.preload('/model.glb')
