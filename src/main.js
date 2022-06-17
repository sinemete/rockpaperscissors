import MainScene from "./scenes/MainScene.js";
import GameUpdate from "./scenes/GameUpdate.js";
import CONFIG from "./config.js";
const config = {
	type: Phaser.AUTO,
	width: CONFIG.WIDTH,
	height: CONFIG.HEIGHT,
	backgroundColor: "#F2F2F2",
	scene: [MainScene, GameUpdate],
	scale: {
		mode: Phaser.Scale.FIT,
		autoCenter: Phaser.Scale.CENTER_BOTH
	}
};
export default new Phaser.Game(config)