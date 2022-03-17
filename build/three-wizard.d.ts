/*!
Three.js Wizard
Copyright 2022, Anthony DePasquale (anthony@depasquale.org)
*/
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import ImmersiveControls from '@depasquale/three-immersive-controls';
interface WizardOptions {
    controls?: 'ImmersiveControls' | 'OrbitControls' | 'static';
    initialPosition?: THREE.Vector3;
    css?: boolean;
}
interface Wizard {
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    scene: THREE.Scene;
    controls?: ImmersiveControls | OrbitControls;
}
declare class Wizard {
    static setup: ({ css }?: {
        css?: boolean | undefined;
    }) => {
        camera: THREE.PerspectiveCamera;
        renderer: THREE.WebGLRenderer;
        scene: THREE.Scene;
    };
    constructor(options?: WizardOptions);
    start(renderLoop?: Function): void;
}
export default Wizard;
export { WizardOptions };
