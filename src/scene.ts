import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";

function animate() {
  requestAnimationFrame(animate);

  controls.update();
  renderer.render(scene, camera);
}

const canvas = document.getElementById("canvas") as HTMLCanvasElement;

const scene = new THREE.Scene();

const width = canvas.offsetWidth;
const heigth = canvas.offsetHeight;

// camera
const camera = new THREE.PerspectiveCamera(50, width / heigth, 0.1, 1000);
camera.position.set(100, 100, 100);

// renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
  alpha: true,
});
renderer.setSize(width, heigth);

// controls
const controls = new OrbitControls(camera, canvas);

// base grid
const gridHelper = new THREE.GridHelper(100, 10);
scene.add(gridHelper);

animate();

export { scene };
