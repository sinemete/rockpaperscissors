import CONFIG from "../config.js";
import Button from "./Button.js";
import GameUpdate from "./GameUpdate.js";
export default class MainScene extends Phaser.Scene {

	constructor() {
		super("main-scene");
	}
	preload() {
        this.load.image("rock", "assets/rock.png");
        this.load.image("paper", "assets/paper.png");
        this.load.image("scissors", "assets/scissors.png");
    }
	create() {
		let player = this.add.image(CONFIG.WIDTH / 2 - 150, CONFIG.HEIGHT / 2, "paper")
    	let bot = this.add.image(CONFIG.WIDTH / 2 + 150, CONFIG.HEIGHT / 2, "paper")
    	bot.flipX = true;
        // Title
        this.add
            .text(CONFIG.WIDTH / 2, 200, "Rock Paper Scissors", {
                fontFamily: "Impact",
                fontSize: "72px",
                fill: "#351848"
            })
            .setOrigin(0.5);

        //add Start button using custom button class
        const button = new Button(CONFIG.WIDTH / 2, 625, "Start", this, "game-update", "",0)
    }
}