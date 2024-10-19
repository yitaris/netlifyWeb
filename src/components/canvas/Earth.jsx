import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload, useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from "three"; // Animasyonun loop modları için
import CanvasLoader from "../Loader";

const Earth = () => {
  const { scene, animations } = useGLTF("./plane/banner.glb"); // GLTF modelini yükle
  const { actions } = useAnimations(animations, scene); // Animasyon aksiyonlarını çek
  const [isClicked, setIsClicked] = useState(false); // Tıklama durumu

  useEffect(() => {
    if (actions && animations.length > 0) {
      const action = actions[Object.keys(actions)[0]]; // İlk animasyonu seç
      action.setLoop(THREE.LoopOnce); // Animasyonu sadece bir kere oynat
      action.clampWhenFinished = false; // Animasyonun son frame'inde kalmasını sağla
      action.reset().stop(); // Animasyonu sıfırla ve durdur, böylece ilk karede duracak

      if (isClicked) {
        action.play(); // Tıklanıldığında animasyonu başlat
      }
    }
  }, [actions, animations, isClicked]);

  return (
    <primitive
      object={scene}
      scale={1}
      position={[0, 0, 0]}
      rotation={[8, 0, 0]}
      onClick={() => setIsClicked(true)} // Model tıklandığında animasyonu başlat
    />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 100,
        position: [0, 0, 5], // Kamera pozisyonunu ayarla
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        {/* Işıklar */}
        <ambientLight intensity={0.5} /> {/* Genel sahne aydınlatması */}
        <directionalLight intensity={1} position={[5, 5, 5]} castShadow />{" "}
        {/* Nesnelerde gölgeleri etkinleştir */}
        <pointLight intensity={1} position={[-5, -5, -5]} /> {/* Ek bir ışık kaynağı */}

        <Earth /> {/* Model ve animasyon */}
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
