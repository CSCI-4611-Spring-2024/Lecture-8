/* Lecture 8
 * CSCI 4611, Spring 2024, University of Minnesota
 * Instructor: Evan Suma Rosenberg <suma@umn.edu>
 * License: Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 */ 

import * as gfx from 'gophergfx'

export class App extends gfx.GfxApp
{
    private ground: gfx.Mesh3;

    // --- Create the App class ---
    constructor()
    {
        // initialize the base class gfx.GfxApp
        super();

        this.ground = gfx.Geometry3Factory.createBox(50, 1, 50);
    }


    // --- Initialize the graphics scene ---
    createScene(): void 
    {
        this.camera.setPerspectiveCamera(60, 1920/1080, 0.1, 100);
        this.camera.position.set(0, 1.5, 0);

        const ambientLight = new gfx.AmbientLight(new gfx.Color(0.4, 0.4, 0.4));
        
        this.ground.position.set(0, -.5, 0);
        this.ground.material.setColor(new gfx.Color(83/255, 209/255, 110/255));

        this.scene.add(ambientLight);
        this.scene.add(this.ground);
    }

    
    // --- Update is called once each frame by the main graphics loop ---
    update(deltaTime: number): void 
    {

    }
}