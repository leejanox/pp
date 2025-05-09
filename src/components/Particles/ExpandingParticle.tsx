import * as THREE from 'three'
import vt from './ExpandingParticleVertex.glsl?raw'
import fg from './ExpandingParticleFrag.glsl?raw'
import { useMemo, forwardRef ,useImperativeHandle , useRef } from 'react'
import { useFrame } from '@react-three/fiber'

type ExpandingParticleProps = {
    texture?: THREE.Texture;
}

const ExpandingParticle = forwardRef<THREE.Group,ExpandingParticleProps>(
    ({texture,...props},ref) => {

    //ref
    const groupRef = useRef<THREE.Group>(null!);
    const matRef = useRef<THREE.ShaderMaterial>(null!);

    //geom
    const geom = useMemo(()=> new THREE.PlaneGeometry(240.,480.,480,960),[]);
    //shaderMaterial & uniforms
    const mat = useMemo(()=> new THREE.ShaderMaterial({
        uniforms:{
            uTime:{value:0},
            uTexture:{value:texture},
            uDistortion:{value:0.},
            uAlpha:{value:1.},
        },
        vertexShader:vt,
        fragmentShader:fg,
        side:THREE.DoubleSide,
        transparent:true,
        depthWrite:false,
        blending:THREE.NormalBlending,
        toneMapped:false,
    }),[texture]);

    useFrame((state)=>{
        const time = state.clock.getElapsedTime();
        if(!matRef.current) return;
        matRef.current.uniforms.uTime.value = time;
        matRef.current.uniforms.uTexture.value = texture;
    });

    useImperativeHandle(ref,()=>groupRef.current);
    return (
        <group ref={groupRef}{...props}>
            <points>
                <primitive attach="geometry" object={geom}/>
                <primitive attach="material" ref={matRef} object={mat}/>
            </points>
        </group>
    );
});

export default ExpandingParticle