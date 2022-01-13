import * as THREE from "https://cdn.skypack.dev/three";
// set the scene :
const scene = new THREE.Scene();
// set the camera, first param : fov (field of view)
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry_box = new THREE.BoxGeometry();
const material_box = new THREE.MeshBasicMaterial({
  color: 0x00ff00,
});
const cube = new THREE.Mesh(geometry_box, material_box);

//create a line

const material_line = new THREE.LineBasicMaterial( {color: 0x0000ff});


const points = [];
points.push( new THREE.Vector3(-10,0,0));
points.push( new THREE.Vector3(0,10,0));
points.push( new THREE.Vector3(10,0,0));

const geometry_line = new THREE.BufferGeometry().setFromPoints( points);

const line = new THREE.Line( geometry_line,material_line)


scene.add(cube);
scene.add(line);

camera.position.z = 5;
renderer.render(scene, camera);
function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}

animate();
