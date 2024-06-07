import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { ViewHelper } from "three/addons/helpers/ViewHelper.js";

export function animate( applet ) {
	requestAnimationFrame( function() { animate(applet); } );

    applet.renderer.clear();
	applet.renderer.render( applet.scene, applet.camera );
    applet.viewHelper.render( applet.renderer );
}

export class threeApplet {
    constructor(width, height, divId) {
        const renderer = new THREE.WebGLRenderer( { antialias: true } );
        renderer.setSize( width, height );
        renderer.autoClear = false;

        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0xffffff);

        // camera, such that North East Down makes sense
        const camera = new THREE.PerspectiveCamera( 40, width/height, 0.1, 1000 );
        camera.up.set( 0, 0, -1 ); // for orbit controls to make sense
        camera.position.x = -2;
        camera.position.y = 1.5;
        camera.position.z = -0.75;
        camera.setRotationFromEuler( new THREE.Euler(-110*3.1415/180, 0, 55 * 3.1415/180, 'ZYX'))

        const gd = new THREE.GridHelper( 2, 2 );
        gd.rotation.x = -0.5*3.1415
        scene.add( gd );
        scene.add( new THREE.AxesHelper ( 0.5 ));

        // interactive camera controls and triad in the corner
        const controls = new OrbitControls( camera, renderer.domElement );
        document.addEventListener('keydown', function(event) { // reset view on space
            if (event.code === 'Space') { controls.reset(); } });
        let viewHelper = new ViewHelper( camera, renderer.domElement );
        viewHelper.controls = controls;
        viewHelper.controls.center = controls.target;
        //window.onpointerup = function (event) { // enable clicking of the triad
        //    viewHelper.handleClick( event ) };
        
        this.renderer = renderer;
        this.scene = scene;
        this.camera = camera;
        this.viewHelper = viewHelper;

        document.getElementById(divId).appendChild( this.renderer.domElement );
    }
}


//window.onresize() // call once
