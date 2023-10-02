/* eslint-disable react/no-unknown-property */
import { useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'
import snowflakeImage from '../../assets/snowflake.png'

const Stars = (props) => {
  const ref = useRef()

  const sphere = new Float32Array(3000 * 3)
  const snowflakeTexture = new THREE.TextureLoader().load(snowflakeImage)
  snowflakeTexture.wrapS = THREE.RepeatWrapping
  snowflakeTexture.wrapT = THREE.RepeatWrapping

  for (let i = 0; i < sphere.length; i += 3) {
    // Randomize snowflake positions
    sphere[i] = Math.random() * 2 - 1
    sphere[i + 1] = Math.random() * 2 - 1
    sphere[i + 2] = Math.random() * 2 - 1
  }
  useFrame((state, delta) => {
    // Update snowflake positions
    for (let i = 0; i < sphere.length; i += 3) {
      sphere[i + 1] -= delta * 0.1 // Move snowflake up by delta units (from bottom to top)
      if (sphere[i + 1] < -1) {
        sphere[i + 1] = 1 + Math.random() * 0.1 // Reset snowflake position to a random value near the top
      }
    }
    ref.current.geometry.attributes.position.needsUpdate = true // Update the positions in the GPU
  })

  return (
    <group>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled={false}
        {...props}
      >
        <PointMaterial
          transparent
          map={snowflakeTexture}
          size={0.01} // Adjust the size of the snowflakes
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

const StarsCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1] ">
      <Canvas camera={{ position: [0, 0, Math.PI / 4] }}>
        <Suspense fallback={null}>
          <Stars className="w-full " />
        </Suspense>
        <ambientLight intensity={0.5} />
      </Canvas>
    </div>
  )
}

export default StarsCanvas
