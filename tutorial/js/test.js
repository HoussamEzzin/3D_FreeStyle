import * as THREE from "https://cdn.skypack.dev/three";

import * as resize from './resize.js';

const main = () => {
    const canvas = document.querySelector('#d');
    const renderer = new THREE.WebGLRenderer({canvas});

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
    
    


    
    const geometry = new THREE.DodecahedronGeometry();
    const material = new THREE.MeshBasicMaterial({
            color: 0xff0000
        });
    const dodecahedron = new THREE.Mesh(geometry, material);
    

    scene.add(dodecahedron);


    var wireframe = new THREE.WireframeGeometry( geometry );

      var line = new THREE.LineSegments( wireframe );
      scene.add( line );

      var aLight = new THREE.AmbientLight(0x404040, 5);
      scene.add(aLight);
    const render = (time) => {

        time *= 0.001;

        dodecahedron.rotation.x = time;
        dodecahedron.rotation.y = time;


        if(resize.resizeRendererToDisplaySize(renderer)){
            const canvas = renderer.domElement;
            camera.aspect = canvas.clientWidth / canvas.clientHeight;
            camera.updateProjectionMatrix();  
        }
        
        renderer.render(scene, camera);
        requestAnimationFrame(render);
    };

    requestAnimationFrame(render);
    

}

main()