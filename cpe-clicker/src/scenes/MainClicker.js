import { Scene } from 'phaser';

export class MainClicker extends Scene
{
    constructor ()
    {
        super('MainClicker');
    }

    create ()
    {
        //  Get the current highscore from the registry
        const score = this.registry.get('clickcount');
        this.score = score

        const textStyle = { fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff', stroke: '#000000', strokeThickness: 8 };

        this.add.image(512, 384, 'bg_fac');

        const main_character = this.add.sprite(512, 384, 'toto');
        main_character.setInteractive();

        this.scoreText = this.add.text(512, 32, `${score}`, textStyle).setAlign('center').setOrigin(0.5);

        this.input.on('gameobjectdown', (pointer, gameObject) => this.click(gameObject))
    }

    click ()
    {
        this.score++;
        this.scoreText.setText(this.score);
    }

    update ()
    {
        this.registry.set('clickcount', this.score);
    }
}