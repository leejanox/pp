varying vec2 vUv;
varying vec3 vPosition;

uniform float uTime;
uniform vec3 uMouse;
uniform vec3 uColor;
uniform float uVolume;

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

    //vec4 mvPosition = modelViewMatrix * vec4(newPos, 1.); //model
    //gl_Position = projectionMatrix * mvPosition;  //projection
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPos,1.); //clip 좌표계로 변환
    gl_PointSize = 1.4; // Set the size of the point
}