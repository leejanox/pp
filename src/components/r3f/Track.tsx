import * as THREE from 'three'
import { Line, MeshReflectorMaterial } from '@react-three/drei'

interface TractProps {
    points: THREE.Vector3[];
    color?: string;
}

const Track = ({ points, color }: TractProps) => {
    const pi = Math.PI;

    //material
    const mat = {
        mirror:1.,
        color:'#fff',
        roughness:0.1,
        metalness:0.95,
        side:THREE.DoubleSide,
    }

    //curve
    const curve = new THREE.CubicBezierCurve3(
        new THREE.Vector3(20, 0, -15), // 시작점
        new THREE.Vector3(-20, 0, -2), // 제어점1
        new THREE.Vector3(10, 0, ), // 제어점2
        new THREE.Vector3(-1, 0, 1) // 끝점
    );

    const curvePoint = curve.getPoints(100);

    return (
        <>
            <mesh receiveShadow rotation-x={-pi/2}>
                <planeGeometry args={[100,100]} />
                <MeshReflectorMaterial {...mat} />
            </mesh>
            {color==='#fff' && <Line points={points?? curvePoint} color={color} lineWidth={2} dashed={false}/>}
        </>
    )
}

export default Track;