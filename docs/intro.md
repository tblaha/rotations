# Intro and Scope

<!--<script type="module" src="https://cdnjs.cloudflare.com/ajax/libs/three.js/0.165.0/three.module.min.js" integrity="sha512-0G15KaT2U/WJ6wwX9Z1x21HTOTeEAfuoONoM+MlACocymus+J/P27baIIwuLMujv8zjM4GREXdW9u3Py2etUKw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>-->

<script type="importmap">
  {
    "imports": {
      "three": "https://cdn.jsdelivr.net/npm/three@0.165.0/build/three.module.js",
      "three/addons/": "https://cdn.jsdelivr.net/npm/three@0.165.0/examples/jsm/"
    }
  }
</script>


## Test

A random equation:

$$ b = Ax $$

### A THREE.js applet

<div id="three0"/>

<script type="module">
import { threeApplet, animate } from "/_static/js/threeApp.js";
const app0 = new threeApplet( 640, 480, "three0" );

import * as THREE from "three";

let ah = new THREE.AxesHelper ( 0.5 );
ah.setRotationFromEuler( new THREE.Euler(0.2, 0.6, 0.7) );
app0.scene.add( ah );

animate( app0 );
</script>

### Another THREE.js applet

<div id="three1"/>

<script type="module">
import { threeApplet, animate } from "/_static/js/threeApp.js";
const app1 = new threeApplet( 640, 480, "three1" );
animate( app1 );
</script>

