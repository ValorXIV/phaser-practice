import { Scene } from 'phaser';

export class Boot extends Scene
{
    constructor ()
    {
        super('Boot');
    }

    preload ()
    {
        //  The Boot Scene is typically used to load in any assets you require for your Preloader, such as a game logo or background.
        //  The smaller the file size of the assets, the better, as the Boot Scene itself has no preloader.

        this.load.image('bg_fac', 'assets/engineer_faculty_ku.jpg');
        this.load.image('toto', 'assets/toto.png')
    }

    create ()
    {
        //  A global value to store the highscore in
        this.registry.set('clickcount', 0);

        this.scene.start('Preloader');

        // this.input.once('pointerdown', () => {

        //     this.scene.start('Preloader');

        // });
    }
}
