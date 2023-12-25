import * as THREE from 'three'

export class CharacterControls {
    orbitControl;
    camera;

    constructor(camera, orbitControls) {
        this.camera = camera;
        this.orbitControl = orbitControls;
    }

    update(clockDelta, keyPressed) {
        const directionPressed = DIRECTIONS.some(key => keysPressed[key] === true)


    }
}