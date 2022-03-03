/*!
Three.js Wizard
Copyright 2022, Anthony DePasquale (anthony@depasquale.org)
*/
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
interface WizardOptions {
    controls?: 'ImmersiveControls' | 'OrbitControls' | 'static';
    initialPosition?: THREE.Vector3;
}
interface Wizard {
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    scene: THREE.Scene;
    controls?: OrbitControls;
}
declare class Wizard {
    static setup: () => {
        camera: THREE.PerspectiveCamera;
        renderer: THREE.WebGLRenderer;
        scene: THREE.Scene;
    };
    constructor({ controls, initialPosition }?: WizardOptions);
    start(renderLoop?: Function): void;
}
export default Wizard;
