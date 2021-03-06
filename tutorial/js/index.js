import * as THREE from "https://cdn.skypack.dev/three";
import * as resize from './resize.js';

const main = () =>{
    const canvas = document.querySelector('#c');
    const renderer =  new THREE.WebGLRenderer({canvas})

    const fov = 75; // field of view 
    const aspect = 2; // canvas default
    const near = 0.1; 
    const far = 5;
    const camera = new THREE.PerspectiveCamera(fov, aspect,near,far);
    camera.position.z = 2;

    const scene = new THREE.Scene();

    {
        const color = 0xFFFFFF;
        const intensity = 1;
        const light = new THREE.DirectionalLight(color,intensity);
        light.position.set(-1,2,4);
        scene.add(light);
    }

    const boxWidth =1;
    const boxHeight = 1;
    const boxDepth = 1;
    const geometry = new THREE.BoxGeometry(boxWidth,boxHeight,boxDepth);
    
    const makeInstance = (geometry, color, x)=>{
        const material = new THREE.MeshPhongMaterial({color});
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        cube.position.x = x;

        return cube;
    }

    const cubes = [
        makeInstance(geometry,0xbd1c0c, 0),
        makeInstance(geometry,0xffffff, -2),
        makeInstance(geometry,0x1288aa, 2),
    ]


    
    
    
    
    const render = (time) => {
        time *= 0.001; // in seconds
        

        if(resize.resizeRendererToDisplaySize(renderer)){
            const canvas = renderer.domElement;
            camera.aspect = canvas.clientWidth / canvas.clientHeight;
            camera.updateProjectionMatrix();  
        }
          


        cubes.forEach( (cube,ndx) => {
            const speed = 1 + ndx * .1;
            const rot = time * speed;
            cube.rotation.x = rot;
            cube.rotation.y = rot;
        });

        renderer.render(scene, camera);

        requestAnimationFrame(render);
    }

    requestAnimationFrame(render);



}

main()