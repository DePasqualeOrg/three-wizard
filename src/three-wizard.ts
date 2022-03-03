/*!
Three.js Wizard
Copyright 2022, Anthony DePasquale (anthony@depasquale.org)
*/

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// import ImmersiveControls from '@depasquale/three-immersive-controls';

interface WizardOptions {
  controls?: 'ImmersiveControls' | 'OrbitControls' | 'static',
  initialPosition?: THREE.Vector3,
}

interface Wizard {
  camera: THREE.PerspectiveCamera,
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  controls?: OrbitControls,
  // controls?: ImmersiveControls | OrbitControls,
}

class Wizard {
  static setup = () => {
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.01, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    const scene = new THREE.Scene();

    // HTML
    const container = document.createElement('container');
    container.id = 'container';
    document.body.appendChild(container);
    container.appendChild(renderer.domElement);

    // CSS
    const style = document.createElement('style');
    style.innerHTML = 'body { margin: 0; background-color: #000; overscroll-behavior: none; touch-action: none; }';
    document.head.appendChild(style);

    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }, false);

    return { camera, renderer, scene };
  };
  constructor({ controls = 'static', initialPosition = new THREE.Vector3(0, 1.6, 5) }: WizardOptions = {}) {
    const { camera, renderer, scene } = Wizard.setup();
    this.camera = camera;
    this.renderer = renderer;
    this.scene = scene;

    // Controls
    if (controls.toLowerCase() === 'orbitcontrols') {
      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
      this.controls.enableDamping = true;
      // !! Figure out better solution for initial position
      this.camera.position.copy(initialPosition);
      this.controls.update();
    } else if (controls.toLowerCase() === 'immersivecontrols') {
      // !! Still need to implement ImmersiveControls
      // this.controls = new ImmersiveControls(this.camera, this.renderer, this.scene, options);
    } else if (controls.toLowerCase() === 'static') {
      this.camera.position.copy(initialPosition);
    } else {
      throw new Error(`Unknown controls type ${controls} specified`);
    }
  }
  start(renderLoop?: Function) {
    this.renderer.setAnimationLoop(() => {
      this.controls?.update();
      renderLoop?.();
      this.renderer.render(this.scene, this.camera);
    });
  }
}

export default Wizard;
