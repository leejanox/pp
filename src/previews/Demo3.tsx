import Styles from '@styles/Demo.module.scss';
import { Canvas, useFrame} from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import Card from '@components/r3f/Card';
import type { CardRefHandle } from '@components/r3f/Card';
import { Environment, OrbitControls } from '@react-three/drei';
import Car from '@components/r3f/Car';
import Track from '@components/r3f/Track';
import gsap from 'gsap';

interface Demo3SceneProps {
    reset: boolean;
    showLine: boolean;
    setReset: (reset: boolean) => void;
}

const Demo3Scene = ({reset,showLine,setReset}:Demo3SceneProps) => {

    //ref
    const carRef = useRef<THREE.Group>(null!);
    const cardRef = useRef<CardRefHandle>(null!);
    const cameraRef = useRef<THREE.PerspectiveCamera>(null!);
    const progress = useRef(0);
    const revealed = useRef(false); //gsap용

    //setting
    const scale = .3; //initial car scale
    const curve = new THREE.CubicBezierCurve3(
        new THREE.Vector3(20, 0, -15), // 시작점
        new THREE.Vector3(-20, 0, -2), // 제어점1
        new THREE.Vector3(10, 0, ), // 제어점2
        new THREE.Vector3(-1, 0, 1) // 끝점
    );
    const initialCameraPos = useRef<THREE.Vector3>(new THREE.Vector3(-4, 1, 5));
    const initialFov = useRef(45);

    
    useFrame(({clock,camera},delta)=>{
        cameraRef.current = camera as THREE.PerspectiveCamera;
        if(!carRef.current || reset) return;

        if(progress.current === 0) clock.start();
        progress.current += delta * .1 * clock.getElapsedTime() ** 2.1;

        if(progress.current > 0 && progress.current < 1.){
            //car
            //크기
            const incrementScale = THREE.MathUtils.lerp(scale,1.7,progress.current);
            carRef.current.scale.setScalar(incrementScale);
            //위치
            const pos = curve.getPoint(progress.current);
            carRef.current.position.set(pos.x,pos.y,pos.z);
            //회전
            const tangent = curve.getTangent(progress.current).normalize();
            const lookAt = new THREE.Vector3().addVectors(pos,tangent);
            carRef.current.lookAt(lookAt);
        }
        if(progress.current >= 1.1){
            //car
            progress.current = 1.1;
            carRef.current.scale.set(1.7,1.7,1.7);
            const lastTargetPos = new THREE.Vector3(4.5,1,2.5);
            camera.position.lerp(lastTargetPos,.005);
            const carTarget = camera.position.clone();
            carTarget.y = 0;
            carRef.current.lookAt(carTarget);
            if(camera instanceof THREE.PerspectiveCamera){
                camera.fov = THREE.MathUtils.lerp(30,50,.2);
                camera.updateProjectionMatrix();
            }
            //card
            const distance = camera.position.distanceTo(carTarget);
            if(distance < .1 && cardRef.current && !revealed.current){
                revealed.current = true;
                const { box, text } = cardRef.current;
                gsap.to(box.material,{opacity:1.,duration:.5,ease:'circ.in'});
                gsap.to(text.material,{opacity:1.,duration:.5,ease:'circ.in'});
            }
        }
    })

    useEffect(()=>{
        if(reset){
            progress.current = 0;
            revealed.current = false;
            if(cardRef.current) carRef.current.scale.setScalar(scale);
            if(cardRef.current){
                const { box, text } = cardRef.current;
                (box.material as THREE.MeshStandardMaterial).opacity = 0;
                (text.material as THREE.MeshStandardMaterial).opacity = 0;
            }
            if(cameraRef.current){
                cameraRef.current.position.copy(initialCameraPos.current);
                cameraRef.current.fov = initialFov.current;
                cameraRef.current.updateProjectionMatrix();
            }
            setTimeout(()=>{
                setReset(false);
            },100);
        }
    },[reset,setReset]);

    return (
        <>
            <Environment files={'/hdrs/qwantani_dusk_2_1k.hdr'} background/>
            <Car ref={carRef}/>
            <Card ref={cardRef} position={[1.3,.7,.1]} rotation-y={THREE.MathUtils.degToRad(45)} scale={[.3,.3,.3]}/>
            {showLine ? <Track points={curve.getPoints(100)} color={'#fff'}/> 
            :
            <Track points={curve.getPoints(100)} color={'#000'}/>}
        </>
    )
}

interface OverlayProps {
    setReset: (reset: boolean) => void;
    setShowLine: (showLine: boolean) => void;
    showLine: boolean;
}

const Overlay = ({setReset,setShowLine,showLine}:OverlayProps) => {
    return (
        <div className={Styles.demo3__overlay}>
            <h1>Click the button to see the animation</h1>
            <div className={Styles.demo3__overlay__buttonGroup}>
                <button onClick={()=>{setReset(true); console.log('reset')}}>Reset</button>
                <button onClick={()=>setShowLine(true)}>
                    {showLine ? 'Hide' : 'Show'}
                </button>
            </div>
        </div>
    )
}

const Demo3 = () => {

    const [reset,setReset] = useState(false);
    const [showLine,setShowLine] = useState(false);

    const onReset = () => setReset((prev)=>!prev);
    const onShowLine = () => setShowLine((prev)=>!prev);
    
    return (
        <div className={Styles.container}>
            <div className={Styles.demo3}>
                <Overlay setReset={onReset} setShowLine={onShowLine} showLine={showLine}/>
                <Canvas camera={{position:[-4,1,5] ,fov:45}}>
                    <ambientLight intensity={1}/>
                    <OrbitControls/>
                    <Demo3Scene reset={reset} showLine={showLine} setReset={onReset}/>
                </Canvas>
            </div>
        </div>
    )
}

export default Demo3