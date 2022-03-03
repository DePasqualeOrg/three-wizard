# Three.js Wizard

This tool does all the magical incantations necessary for creating a scene with Three.js:

- Create `camera`, `renderer`, and `scene` instances
- Size the renderer's DOM element to fill the browser window, with the appropriate pixel ratio
- Add the renderer's DOM element to the DOM
- Apply CSS to the page
- Add an event listener to resize the renderer's DOM element and update the camera when the browser window is resized
- Add your choice of controls
- Set up the animation loop with your render routine
- Update the controls each frame

### Installation

```
npm install @depasquale/three-wizard
```

### Usage

```javascript
import Wizard from '@depasquale/three-wizard';

const wizard = new Wizard({
  controls: 'OrbitControls', // Choose from `OrbitControls` and `static` (more options coming soon)
});

// You can access these if necessary
const { scene, camera, renderer, controls } = wizard;

// Add things to the scene
// ...
```

Define the render loop in which things are updated each frame. (Three.js Wizard takes care of updating the controls and telling the renderer to render, so there's no need to include this boilerplate code.) Then start the animation.

```javascript
const render = () => {
  // Update things in the scene
  // ...
};

wizard.start(render);
```

### Example

A full example is provided in the `example` directory. To try it locally in your browser, run:
```
npm run example
```

Or try it [here](https://unpkg.com/@depasquale/three-wizard/example/index.html).

### To-do

- Add more controls options
- Add option to specify a target for the renderer's DOM element, instead of the full browser window