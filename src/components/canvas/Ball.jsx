/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from '@react-three/drei'
import Loader from '../Loader'

const Ball = ({ icon }) => {
  const [decal] = useTexture([icon])
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          flatShading
          map={decal}
        />
        <Decal
          position={[0, 0, -1]} // Adjust the z-coordinate to move the decal to the back
          rotation={[0, Math.PI, 0]} // Rotate the decal 180 degrees around the y-axis to face the back
          flatShading
          map={decal}
        />
      </mesh>
    </Float>
  )
}

const BallCanvas = ({ icon }) => {
  return (
    <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<Loader />}>
        <OrbitControls enableZoom={false} />
        <Ball icon={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default BallCanvas
