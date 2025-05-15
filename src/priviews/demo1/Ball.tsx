import { forwardRef, useMemo}  from "react"
import * as THREE from 'three'
//import vert from './vert.glsl?raw'
//import frag from './frag.glsl?raw'

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
        vertexShader:`
varying vec2 vUv;
varying vec3 vPosition;

uniform float uTime;
uniform vec3 uMouse;
uniform vec3 uColor;

void main() {
    vUv = uv;

    float time = uTime; 
    float speed = 9.; 
    float amplitude = .5; //진폭
    float frequency = 1.; //주기
    float phase = .2; //위상차

    float wave = sin(time * speed + vPosition.x * frequency) * amplitude + phase;

    vec3 newPos = position;
    newPos.y += wave;

    vec4 modelPos = modelViewMatrix * vec4(newPos, 1.); //model
    vec4 projected = projectionMatrix * modelPos;  //projection

    vec2 screenPos = (projected.xy /projected.w);

    float dist = distance(screenPos, uMouse.xy);
    float vDist = dist; // distance to mouse

    newPos += normal * (1.6/(vDist + .1));

    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPos,1.);
    gl_PointSize = 1.4; // Set the size of the point
}`,
        fragmentShader:`
        varying vec2 vUv;
varying vec3 vPosition;

uniform float uTime;
uniform vec3 uMouse;
uniform vec3 uColor;

void main() {

    /*
    float speed = .4;

    vec3 base = uColor;
    vec3 custom = base + vec3(
        .2 * sin(uTime * .1 + .5) + speed,
        .2 * sin(uTime * .7 + .5) ,
        .2 * sin(uTime * .5 + .5) + speed/2.
    ); 
    */
    vec3 base = vec3(1.,1.,1.);
    float a = 1.;

    gl_FragColor = vec4(base, a*.4);
}`,
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