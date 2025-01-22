"use client";

import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';

export default function Model() {
  const { scene, animations } = useGLTF("./model.glb");
  const group = useRef<Group>();

  const { actions } = useAnimations(animations, group);
  useEffect(() => {
    actions['KeyAction.001']!.play();
  }, [actions]);
  console.log(actions)

  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y -= delta * 0.1;
    }
  });

  return (
    <primitive ref={group} object={scene} scale={0.25}/>
  )
}

useGLTF.preload('/model.glb')
