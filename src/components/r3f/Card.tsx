import { useCursor, Text, MeshPortalMaterial } from '@react-three/drei';
import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import * as THREE from 'three'

interface CardProps {
    position?: [number, number, number];
    rotation?: [number, number, number];
    scale?: [number, number, number];
}

export type CardRefHandle = {
    group: THREE.Group;
    box: THREE.Mesh;
    text: THREE.Mesh;
}

const Card = forwardRef<CardRefHandle,CardProps>(({...props},ref) => {

    //ref 
    const cardRef = useRef<THREE.Group>(null!);
    const textRef = useRef<THREE.Mesh>(null!);
    const boxRef = useRef<THREE.Mesh>(null!);

    //state
    const [hovered, hover] = useState(false);
    useCursor(hovered, 'pointer');
    const [displayT, setDisplayT] = useState('Mouse Over');

    useImperativeHandle(ref,()=>({
        group:cardRef.current!,
        box:boxRef.current!,
        text:textRef.current!,
    }),[]);

    //mouse Event
    const onMouseHover = () => {
        if(!cardRef.current) return;
        hover((prev)=>!prev);
        setDisplayT('DoubleClick');
        cardRef.current.scale.set(.4,.4,.4);
    }

    const onMouseLeave = () => {
        if(!cardRef.current) return;
        hover((prev)=>!prev);
        setDisplayT('Mouse Over');
        cardRef.current.scale.set(.3,.3,.3);
    }

    //geometry
    const shape = new THREE.Shape();
    const x = -3.4/2.;
    const y = -2./2.;
    const radius = .5;
    shape.moveTo(x + radius, y);
    shape.lineTo(x + 3.4 - radius, y);
    shape.quadraticCurveTo(x + 3.4, y, x + 3.4, y + radius);
    shape.lineTo(x + 3.4, y + 2. - radius);
    shape.quadraticCurveTo(x + 3.4, y + 2., x + 3.4 - radius, y + 2.);
    shape.lineTo(x + radius, y + 2.);
    shape.quadraticCurveTo(x, y + 2., x, y + 2. - radius);
    shape.lineTo(x, y + radius);
    shape.quadraticCurveTo(x, y, x + radius, y);
    const geometry = new THREE.ShapeGeometry(shape);
    
    return (
        <group ref={cardRef} {...props} scale={[.4,.4,.4]}
            onPointerOver={(e)=>{ e.stopPropagation(); onMouseHover();}} 
            onPointerOut={(e)=>{e.stopPropagation(); onMouseLeave();}}
            onDoubleClick={(e)=>{e.stopPropagation(); alert('click');}}
        >
            <Text ref={textRef} material-transparent material-opacity={0}
                font={'/fonts/cute.ttf'} fontSize={.51} color={'#fff'} letterSpacing={0.03} position={[0,0,0.1]} 
            >
                {displayT}
            </Text>
            <mesh castShadow>
                <primitive attach="geometry" object={geometry}/>
                <MeshPortalMaterial side={THREE.DoubleSide} 
                    resolution={1024} blur={0} transparent opacity={0} 
                >
                    <mesh ref={boxRef}>
                        <planeGeometry args={[3.4,2]}/>
                        <meshStandardMaterial color="skyblue" transparent opacity={0}/>
                    </mesh>
                </MeshPortalMaterial>
            </mesh>
        </group>
    );
});

export default Card