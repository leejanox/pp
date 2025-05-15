import * as THREE from 'three'
import { forwardRef, useImperativeHandle, useRef } from 'react'
import { useGLTF } from '@react-three/drei';

interface CarProps {
    modelUrl?: string
}

const Car = forwardRef<THREE.Group, CarProps>(({ modelUrl, ...props }, ref) => {

    const carRef = useRef<THREE.Group>(null!);

    const car = useGLTF(modelUrl || '/models/porsche.glb');

    useImperativeHandle(ref, () => carRef.current!,[]);

    return (
        <group ref={carRef}>
            <primitive object={car.scene}  {...props} castShadow/>
        </group>
    )
})

export default Car