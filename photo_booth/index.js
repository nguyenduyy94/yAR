import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import {CharacterControls} from "./characterControls";


const scene = new THREE.Scene();

const loader = new GLTFLoader();

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 15;

const renderer = new THREE.WebGLRenderer();
renderer.setClearColor( 0xffffff, 0);
renderer.setSize( window.innerWidth, window.innerHeight );

const orbitControl = new OrbitControls(camera, renderer.domElement);
orbitControl.enableDamping = true;
orbitControl.minDistance = 5;
orbitControl.maxDistance = 15;
orbitControl.enablePan = false;
orbitControl.maxPolarAngle = Math.PI / 2 - 0.05
orbitControl.update();

const characterControls = new CharacterControls(camera, orbitControl);

document.body.appendChild( renderer.domElement );


const clock = new THREE.Clock();
const keysPressed = {  } // Multiple keys can be pressed sametime

document.addEventListener("keydown", (e) => {
    keysPressed[e.key.toLowerCase()] = true
})

document.addEventListener("keyup", () => {
    keysPressed[e.key.toLowerCase()] = false
})

loader.load('./untitled.glb', function ( gltf ) {
    scene.add( gltf.scene );
}, undefined, function ( error ) {

    console.error( error );

} );

function animate() {
    let mixerUpdateDelta = clock.getDelta();
    characterControls.update(mixerUpdateDelta, )
    orbitControl.update();
    renderer.render( scene, camera );
    requestAnimationFrame( animate );
}
animate();