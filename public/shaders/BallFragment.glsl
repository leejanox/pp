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
}