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

    /*
    float speed = .4;

    vec3 base = uColor;
    vec3 custom = base + vec3(
        .2 * sin(uTime * .1 + .5) + speed,
        .2 * sin(uTime * .7 + .5) ,
        .2 * sin(uTime * .5 + .5) + speed/2.
    ); 
    //gl_FragColor = vec4(custom, a);
    */
    vec3 base = vec3(1.,1.,1.);
    float a = 1.;

    gl_FragColor = vec4(base, a*.4);
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
    //gl_FragColor = vec4(custom, a);
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