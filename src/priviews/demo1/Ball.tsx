import { forwardRef, useMemo } from "react"
import * as THREE from 'three'
import vert from './vert.glsl'
import frag from './frag.glsl'

interface BallProps {
    position?: [number, number, number]
    color?: string
    rotation?: [number, number, number]
    scale?: [number, number, number]
}

const Ball = forwardRef<THREE.Points,BallProps>(({...props},ref) => {

    const icosGeom = useMemo(()=> new THREE.IcosahedronGeometry(20,20),[]);

    const shaderMat = useMemo(()=> new THREE.ShaderMaterial({
        uniforms:{
            uTime: { value: 0 }, //scene time
            uColor : { value: new THREE.Vector3(.5,.5,.5)},
            uMouse : { value: new THREE.Vector3(0,0,0) },
            uVolume: { value: 0. },
        },
        vertexShader:vert,
        fragmentShader:frag,
        side:THREE.DoubleSide,
        wireframe:true,
        transparent:true,
    }),[]);

    return (
        <points ref={ref} {...props}>
            <primitive attach="geometry" object={icosGeom} />
            <primitive attach="material" object={shaderMat} /> 
        </points>
    )
})

export default Ball