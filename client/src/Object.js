import * as THREE from 'three'
import React, { Suspense } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { Stage,OrbitControls } from '@react-three/drei'
import { MTLLoader, OBJLoader, DDSLoader } from 'three-stdlib'

THREE.DefaultLoadingManager.addHandler(/\.dds$/i, new DDSLoader())

function Model(props) {
  const materials = useLoader(MTLLoader, '/untitled.mtl')
  const obj = useLoader(OBJLoader, '/untitled.obj', (loader) => {
    materials.preload()
    loader.setMaterials(materials)
  })
  return <primitive object={obj} {...props} />
}

export default function Object() {
  return (
    <Canvas camera={{ position: [0, 0, 180], fov: 60 }}>
      <Suspense fallback={null}>
        <Stage>
          <Model />
        </Stage>
        <OrbitControls/>
      </Suspense>
    </Canvas>
  )
}
