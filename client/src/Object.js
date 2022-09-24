import * as THREE from 'three'
import React, { Suspense } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { Stage,OrbitControls } from '@react-three/drei'
import { MTLLoader, OBJLoader, DDSLoader } from 'three-stdlib'

THREE.DefaultLoadingManager.addHandler(/\.dds$/i, new DDSLoader())

function Model(props) {
  const materials = useLoader(MTLLoader, '/'+props.mtl)
  const obj = useLoader(OBJLoader, '/'+props.obj, (loader) => {
    materials.preload()
    loader.setMaterials(materials)
  })
  return <primitive object={obj} {...props} />
}

export default function Object(props) {
    const objFileName =props.objFile;
    const mtlFileName =props.mtlFile;
  return (
    <Canvas camera={{ position: [0, 0, 180], fov: 60 }}>
      <Suspense fallback={null}>
        <Stage>
          <Model obj={objFileName} mtl={mtlFileName} />
        </Stage>
        <OrbitControls/>
      </Suspense>
    </Canvas>
  )
}
