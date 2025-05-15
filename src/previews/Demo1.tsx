import Styles from '@styles/Demo.module.scss'
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from 'three'
import Ball from '@components/r3f/Ball'
import { Bloom, EffectComposer } from '@react-three/postprocessing'
import { useRef } from 'react'
import { BlendFunction } from 'postprocessing'

export const Demo1Scene = () =>{

    //ref
    const ballRef = useRef<THREE.Points>(null!);


    useFrame(({clock,pointer})=>{
        if(!ballRef.current) return;

        const time = clock.getElapsedTime();
        const ballMaterial = ballRef.current.material as THREE.ShaderMaterial;

        ballMaterial.uniforms.uTime.value = time; //유니폼에 시간 업데이트

        const mouse = pointer;
        ballMaterial.uniforms.uMouse.value.x = mouse.x;
        ballMaterial.uniforms.uMouse.value.y = mouse.y;
        ballMaterial.uniforms.uMouse.value.z = .5;  //고정
    })

    return (
        <>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Ball ref={ballRef} position={[0,0,0]} scale={[.8,.8,.8]}/>

            <EffectComposer>
                <Bloom 
                    intensity={1.5}
                    luminanceThreshold={.1}
                    luminanceSmoothing={0.9}
                    blendFunction={BlendFunction.ADD}
                />
            </EffectComposer>
        </>
    )
}

const Overlay = () => {
    return (
        <div className={Styles.demo1__overlay}>
            <h1>Mouse Over the Ball</h1>
        </div>
    )
}

const Demo1 = () => {
    return (
        <div className={Styles.container}>
            <div className={Styles.demo1}>
                <Canvas camera={{position:[0,0,100], fov:45 }}>
                    <Demo1Scene />
                </Canvas>
                <Overlay />
            </div>  
        </div>
    )
}

export default Demo1