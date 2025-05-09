import * as THREE from 'three'
import { Canvas, useFrame, useLoader } from "@react-three/fiber"
import { useEffect, useRef, useState } from "react"
import { Bloom, EffectComposer } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'
import ExpandingParticle from '../components/Particles/ExpandingParticle'
import gsap from 'gsap'

function Animation() {
    const [animated, setAnimated] = useState(false)
    const [bloomStrength, setBloomStrength] = useState(0)
    const tt = useLoader(THREE.TextureLoader, 'src/assets/3_1.jpg')
    const gRef = useRef<THREE.Group>(null!)

    useFrame((state) => {
        const time = state.clock.getElapsedTime()
        if (!gRef.current) return
        const ref = (gRef.current.children[0] as THREE.Points).material as THREE.ShaderMaterial
        ref.uniforms.uTime.value = time
    })

    const animateParticle = () => {
        if (!gRef.current) return
        setAnimated(true)
        requestAnimationFrame(() => {
        setTimeout(() => {
            if (!gRef.current) return
            const mat = (gRef.current.children[0] as THREE.Points).material as THREE.ShaderMaterial
            if (!mat.uniforms) return

            const distortionValue = { value: 0 }
            const bloomValue = { value: 0 }

            gsap.fromTo(mat.uniforms.uAlpha,
            { value: 0 },
            {
                value: 1, duration: 2.5, ease: 'power4.out',
                onComplete: () => {
                gsap.to(mat.uniforms.uAlpha,
                    { value: 0, duration: 1.2, ease: 'power4.in' }
                )
                }
            }
            )

            gsap.fromTo(distortionValue,
            { value: 0 },
            {
                value: 1, duration: 2.5, delay: 0.2, ease: 'circ.out',
                onUpdate: () => {
                mat.uniforms.uDistortion.value = distortionValue.value
                },
                onComplete: () => {
                gsap.to(distortionValue,
                    {
                    value: 0, duration: 1.2, ease: 'circ.in',
                    onUpdate: () => {
                        mat.uniforms.uDistortion.value = distortionValue.value
                    },
                    onComplete: () => {
                        setAnimated(false)
                    }
                    }
                )
                }
            }
            )

            gsap.fromTo(bloomValue,
            { value: 0 },
            {
                value: 2.8, duration: 2.5, ease: 'power1',
                onUpdate: () => {
                setBloomStrength(bloomValue.value)
                },
                onComplete: () => {
                gsap.to(bloomValue,
                    {
                    value: 0, duration: 1.2, ease: 'power1',
                    onUpdate: () => {
                        setBloomStrength(bloomValue.value)
                    }
                    }
                )
                }
            }
            )
        }, 0)
    })}

    // 🟡 애니메이션을 6초 간격으로 반복 실행
    useEffect(() => {
        const interval = setInterval(() => {
        animateParticle()
        }, 6000)

        return () => clearInterval(interval) // 언마운트 시 정리
    }, [])

    return (
        <>
        {animated && (
            <ExpandingParticle ref={gRef} texture={tt} />
        )}
        <EffectComposer>
            <Bloom
            luminanceThreshold={0.1}
            luminanceSmoothing={0.9}
            intensity={bloomStrength}
            blendFunction={BlendFunction.SCREEN}
            kernelSize={2}
            />
        </EffectComposer>
        </>
    )
}

const SceneContent = () => {
    return (
        <Canvas camera={{ position: [0, 0, 600], fov: 70 }} style={{ backgroundColor: 'black' }}>
        <Animation />
        </Canvas>
    )
}

const ExpandingParticleScene = () => {
    useLoader.preload(THREE.TextureLoader, 'src/assets/3_1.jpg')

    return (
        <div className="container" style={{ width: '100vw', height: '100vh', margin: '0', padding: '0', boxSizing: 'border-box' }}>
        <SceneContent />
        </div>
    )
}

export default ExpandingParticleScene
