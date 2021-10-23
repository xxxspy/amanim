const fragmentShader = `
uniform bool wireframeActive;

uniform float yBoundaryMin; 
uniform float yBoundaryMax; 

uniform float range = yBoundaryMax - yBoundaryMin;

varying vec2 vUv;
varying vec3 pos;

float HueToRGB(float f1, float f2, float hue) {
    if (hue < 0.0)
        hue += 1.0;
    else if (hue > 1.0)
        hue -= 1.0;
    float res;
    if ((6.0 * hue) < 1.0)
        res = f1 + (f2 - f1) * 6.0 * hue;
    else if ((2.0 * hue) < 1.0)
        res = f2;
    else if ((3.0 * hue) < 2.0)
        res = f1 + (f2 - f1) * ((2.0 / 3.0) - hue) * 6.0;
    else
        res = f1;
    return res;
}

vec3 HSLToRGB(vec3 hsl) {
    vec3 rgb;

    if (hsl.y == 0.0) {
        rgb = vec3(hsl.z); // Luminance
    }
    else {
        float f2;
        
        if (hsl.z < 0.5)
            f2 = hsl.z * (1.0 + hsl.y);
        else
            f2 = (hsl.z + hsl.y) - (hsl.y * hsl.z);
        
        float f1 = 2.0 * hsl.z - f2;
        
        rgb.r = HueToRGB(f1, f2, hsl.x + (1.0/3.0));
        rgb.g = HueToRGB(f1, f2, hsl.x);
        rgb.b= HueToRGB(f1, f2, hsl.x - (1.0/3.0));
    }
    return rgb;
}

vec4 userDefinedColor() {
    float h = 0.7 ;
    float s = 1.0;
    float l = 0.5;
    return vec4(HSLToRGB(vec3(h, s, l)), 1.0);
}

void main() {
    vec4 color = userDefinedColor();
    if (wireframeActive) {
        if (mod(vUv.x, 0.02) < 0.003 || mod(vUv.y, 0.02) < 0.003) {
            color = vec4(0.1, 0.1, 0.1, 1);
        } else {
            color = vec4(color.xyz, 0.7);
        }
    }
    gl_FragColor = color;
}
`
const vertexShader = `
varying vec2 vUv;
varying vec3 pos;
uniform float uMin;
uniform float uMax;
float uRange = uMax - uMin;

uniform float vMin;
uniform float vMax;
float vRange = vMax - vMin;
vec3 userDefinedPosition() {
    float u = uMin + (position.x + 0.5) * uRange;
    float v = vMin + (position.y + 0.5) * vRange;
    vec3 newpos = vec3((1.5 * u), ((0.1 * u*u) * cos(v)), ((0.1 * u*u) * sin(v)));
    return newpos.xzy * vec3(1.0, 1.0, -1.0);
}

void main() {
    vUv = uv; 

    vec3 new_position = userDefinedPosition();
    pos = new_position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(new_position, 1.0);
}`

const graphGeometry = new THREE.PlaneBufferGeometry(1, 1, 300, 300);

const uniforms = {
    colorB: {type: 'vec3', value: new THREE.Color(0xACB6E5)},
    colorA: {type: 'vec3', value: new THREE.Color(0x74ebd5)},
    yBoundaryMin: {type: 'float', value: -3.2},
    yBoundaryMax: {type: 'float', value: 3.2},
    wireframeActive: { type: "bool", value: false}
}
const material = new THREE.ShaderMaterial({
    uniforms: uniforms,
    side: THREE.DoubleSide,
    fragmentShader: fragmentShader,
    vertexShader: vertexShader,
    transparent: true
})
const camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 10000 );
camera.position.z = 10;

const scene = new THREE.Scene()

const graph = new THREE.Mesh(graphGeometry, material );

scene.add(graph)

const renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );

const sphere = new THREE.SphereGeometry();
const object = new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( 0xff0000 ) );
const box = new THREE.BoxHelper( object, 0xffff00 );
scene.add( box );
function draw() {

    requestAnimationFrame( draw );
    
    // experiment with code from the snippets menu here

    renderer.render( scene, camera );

}

$(()=>{
    $('body').append(renderer.domElement)
    draw()
})