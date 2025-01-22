"use client";

// Imports
import React, { useRef, useEffect, useState } from 'react';
import Link from "next/link";
import Image from 'next/image';
import { Button } from "./ui/button"
import { HiDownload } from "react-icons/hi"
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { Canvas } from '@react-three/fiber';
import { Environment, CameraControls } from "@react-three/drei";
import { Vector3 } from 'three';
import Model from './ui/model';
import Background from './ui/background';

const Hero = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [modelRendered, setModelRendered] = useState(false);

  const foregroundCameraRef = useRef<CameraControls | null>(null);
  const backgroundCameraRef = useRef<CameraControls | null>(null);

  // ref for auto scroll on navigation press
  const { ref } = useSectionInView({ 
    sectionName: "home", 
    threshold: 0.75
  });

  // overlay
  useEffect(() => {
    if (modelRendered) {
      const timer = setTimeout(() => {
        setShowOverlay(false);
      }, 5000);
  
      return () => clearTimeout(timer);
    }
  }, [modelRendered]);

  // sync background camera on model movement
  const syncCameras = () => {
    if (foregroundCameraRef.current && backgroundCameraRef.current) {
      const foregroundControls = foregroundCameraRef.current;
      const backgroundControls = backgroundCameraRef.current;

      const position = foregroundControls.getPosition(new Vector3(0, 0, 0));
      const target = foregroundControls.getTarget(new Vector3(0, 0, 0));

      console.log(position, target);
      backgroundControls.setLookAt(
        position.x,
        position.y,
        position.z,
        target.x,
        target.y,
        target.z,
        true
      );
    }
  };

  // camera initialization
  useEffect(() => {
    const initializeForegroundCamera = () => {
      if (foregroundCameraRef.current) {
        foregroundCameraRef.current.truck(0, -15.5, false);
        setShowOverlay(true);
      } else {
        requestAnimationFrame(initializeForegroundCamera);
      }
    };
    const initializeBackgroundCamera = () => {
      if (backgroundCameraRef.current) {
        backgroundCameraRef.current.truck(0, -7.5, false);
        backgroundCameraRef.current.setFocalOffset(-20, 0, 0);
      } else {
        requestAnimationFrame(initializeBackgroundCamera);
      }
    };

    initializeForegroundCamera();
    initializeBackgroundCamera();
  }, []);
  
  return (
    <section ref={ref} id="home" className="flex justify-end items-end scroll-mt-24 relative overflow-hidden">
      <div className="flex flex-col md:mx-28 mx-16 md:pb-16 pt-16 pb-[400px] md:pt-48 lg:pt-96 md:pr-[38%] md:items-start items-center gap-5">
        <p className="md:text-3xl text-2xl text-white md:text-left text-center" style={{ zIndex: 30 }}>
          Hi, <span className="font-bold">I&apos;m Lyco</span>! I&apos;m a <span className="font-bold">Full Stack Web Developer</span> and a <span className="font-bold">UI/UX designer</span> based in the Philippines. I am passionate in <span className="font-bold">designing and building things.</span>
        </p>

        
        <div className="flex flex-row gap-2" style={{ zIndex: 30 }}>
          <Button asChild className="flex items-center text-dark text-md bg-white rounded-full gap-2 hover:bg-dark hover:text-accent hover:scale-110 active:scale-110">
            <Link href="/Lacuesta_Resume.pdf">Résumé <HiDownload /></Link>
          </Button>
          <Button asChild className="flex items-center text-dark text-md bg-white rounded-full px-3 hover:bg-dark hover:text-accent hover:scale-110 active:scale-110">
            <Link href="https://www.linkedin.com/in/lllacuesta/" target="_blank"><FaLinkedinIn /></Link>
          </Button>
          <Button asChild className="flex items-center text-dark text-md bg-white rounded-full px-3 hover:bg-dark hover:text-accent hover:scale-110 active:scale-110">
            <Link href="https://github.com/llacuesta" target="_blank"><FaGithub /></Link>
          </Button>
        </div>

      </div>

      <div className="absolute h-3/4 w-full z-10 md:h-full md:-right-1/4 2xl:w-1/2 2xl:right-0">
        <Canvas>
          {/* Model canvas */}
          <Model />

          {/* Foreground camera */}
          <CameraControls
            mouseButtons={{ left: 1, middle: 0, right: 2, wheel: 0 }}
            ref={foregroundCameraRef}
            maxPolarAngle={(Math.PI * 31) / 60}
            minPolarAngle={(Math.PI * 31) / 60}
            onChange={syncCameras}
            onUpdate={() => setModelRendered(true)}
          />
          <Environment files="./bg.hdr" />
        </Canvas>
      </div>

      <div className={`absolute z-10 flex text-white text-xs py-10 w-full md:w-1/2 flex-col items-center transition-opacity duration-500 ${
          showOverlay ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <Image
          unoptimized
          src="/touch_gesture.gif"
          width={75}
          height={75}
          alt="touch"
          className="relative z-10"
        />
        <p className="font-semibold relative z-10">drag to rotate</p>
      </div>

      <div className='absolute w-full h-full z-0'>
        <Canvas>
          <Background bgRef={backgroundCameraRef} />
          <Environment files="./bg.hdr" background />
        </Canvas>
      </div>
    </section>
  )
}

export default Hero
