import Styles from '@styles/Demo.module.scss';
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from 'three';
import gsap from 'gsap';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import  ExpandingParticle  from './demo2/ExpandingParticle';


interface OverlayProps {
    onClick: (index: number|'all') => void;
}

const Overlay = ({onClick}: OverlayProps) => {

    return (
        <div className={Styles.demo2__overlay}>
            <h1>Click the button to see the animation</h1>
            <div className={Styles.demo2__overlay__buttonGroup}>
                <button onClick={() => onClick(0)}>1</button>
                <button onClick={() => onClick(1)}>2</button>
                <button onClick={() => onClick(2)}>3</button>
                <button onClick={() => onClick('all')}>All</button>
            </div>
        </div>
    );
}


const MainAnimation = ({active}:{active:number|'all'|null}) =>{
    //state 
    const [visible, setVisible] = useState<number[]>([]);
    const [bloomStrength,setBloomStrength] = useState(0.);

    //texture
    const tt1 = useLoader(THREE.TextureLoader,'/1_1.jpg');
    const tt2 = useLoader(THREE.TextureLoader,'/2_1.jpg');
    const tt3 = useLoader(THREE.TextureLoader,'/3_1.jpg');

    //ref
    const gRef1 = useRef<THREE.Group>(null!);
    const gRef2 = useRef<THREE.Group>(null!);
    const gRef3 = useRef<THREE.Group>(null!);
    const Refs = [gRef1,gRef2,gRef3];

    //time
    useFrame(({clock})=>{
        const time = clock.getElapsedTime();
        Refs.forEach((ref)=>{
            if(!ref.current) return;
            const ref1 = (ref.current.children[0] as THREE.Points).material as THREE.ShaderMaterial;
            ref1.uniforms.uTime.value = time;
        });
    });

    //animation

    const animation = (i:number) =>{
        if(visible.includes(i)) return; //이미 보이는 경우 종료
        setVisible((prev)=>[...prev,i]); //상태 업데이트

        requestAnimationFrame(()=>{
            setTimeout(()=>{
                const ref = Refs[i];
                if(!ref.current) return;

                const mat = (ref.current.children[0] as THREE.Points).material as THREE.ShaderMaterial;
                if(!mat.uniforms) return;

                const distortion = { value: 0. }; // 왜곡 초기값
                const bloom = { value: 0. }; // 블룸 초기값

                //alpha
                gsap.fromTo(mat.uniforms.uAlpha,
                    {value:0},
                    {
                        value:1,
                        duration:2.5,
                        ease:'power4.Out',
                        onComplete:()=>{
                            gsap.to(mat.uniforms.uAlpha,
                                {
                                    value:0,
                                    duration:1.2,
                                    ease:'power4.In',
                                }
                            );
                        }
                    }
                );

                //distortion
                gsap.fromTo(distortion, //alpha 바뀌고 보이기 시작한 뒤에 왜곡 시작
                    {value:0.},
                    {
                        value:1.,
                        duration:2.3,
                        delay:.2,
                        ease:'circ.Out',
                        onUpdate:()=>{
                            mat.uniforms.uDistortion.value = distortion.value;
                        },
                        onComplete:()=>{
                            gsap.to(distortion,{
                                value:0.,
                                duration:1.2,
                                delay:0.,
                                ease:'circ.In',
                                onUpdate:()=>{
                                    mat.uniforms.uDistortion.value = distortion.value;
                                },
                                onComplete:()=>{
                                    setVisible((prev)=>prev.filter((v)=>v!==i));
                                }
                            });
                        }
                    }
                );

                //bloom
                gsap.fromTo(bloom,
                    {value:0.},
                    {
                        value:2.8,
                        duration:2.3,
                        delay:.2,
                        ease:'power1',
                        onUpdate:()=>{
                            setBloomStrength(bloom.value);
                        },
                        onComplete:()=>{
                            gsap.to(bloom,{
                                value:0.,
                                duration:1.2,
                                delay:0.,
                                ease:'power1',
                                onUpdate:()=>{
                                    setBloomStrength(bloom.value);
                                }
                            });
                        }
                    }
                );
            },0);
        }); //requestAnimationFrame
    }

    useEffect(()=>{
        if(active === null) return;
        if(active === 'all') {
            [0,1,2].forEach((i)=>{
                gsap.delayedCall(i  * 4.,()=>{
                    animation(i);
                })
            });
        } else {
            animation(active);
        }
    },[active]);

    return (
        <>
            {visible.includes(0) && <ExpandingParticle ref={gRef1} texture={tt1}/>}
            {visible.includes(1) && <ExpandingParticle ref={gRef2} texture={tt2}/>}
            {visible.includes(2) && <ExpandingParticle ref={gRef3} texture={tt3}/>}
            <EffectComposer>
                <Bloom 
                    intensity={bloomStrength}
                    luminanceThreshold={0.9}
                    luminanceSmoothing={0.025}
                    blendFunction={BlendFunction.SCREEN}
                    kernelSize={2}
                />
            </EffectComposer>
        </>
    )
}


const Demo2 = () => {

    const [active, setActive] = useState<number|'all'|null>(null);

    useLoader.preload(THREE.TextureLoader,'1_1.jpg');
    useLoader.preload(THREE.TextureLoader,'2_1.jpg');
    useLoader.preload(THREE.TextureLoader,'3_1.jpg');

    return (
        <div className={Styles.container}>
            <div className={Styles.demo2}>
                <Canvas camera={{position:[0,0,600], fov:70 }}>
                    <ambientLight intensity={1} />
                    <MainAnimation active={active} />
                </Canvas>
                <Overlay onClick={setActive} />
            </div>
        </div>
    )
}

export default Demo2