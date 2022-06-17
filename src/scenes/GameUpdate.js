import CONFIG from "../config.js";
import Button from "./Button.js";
export default class GameUpdate extends Phaser.Scene {
	
	constructor() {
		super("game-update");
        this.player;
        this.bot;
        this.playerScore = 0;
        this.botScore = 0;
        this.text;
        this.botVal = ["rock", "paper", "scissors"];
        this.playerScoreText;
        this.botScoreText;
    }
	
    preload() {
        this.load.image("rock", "assets/rock.png");
        this.load.image("paper", "assets/paper.png");
        this.load.image("scissors", "assets/scissors.png");
    }

    create() {
    	this.player = this.add.image(CONFIG.WIDTH / 2 - 150, CONFIG.HEIGHT / 2, "paper")
    	this.bot = this.add.image(CONFIG.WIDTH / 2 + 150, CONFIG.HEIGHT / 2, "paper")
    	this.bot.flipX = true;
    	this.text = this.add
    	.text(CONFIG.WIDTH / 2, 150, "Pick a Move", {
    		fontFamily: "Impact",
    		fontSize: "32px",
    		fill: "#351848"
    	})
    	.setOrigin(0.5);
    	this.add
    	.text(CONFIG.WIDTH / 5, 90, "Player", {
    		fontFamily: "Impact",
    		fontSize: "32px",
    		fill: "#351848"
    	}).setOrigin(0.5);
    	this.playerScoreText = this.add
    	.text(CONFIG.WIDTH / 5, 120, "0", {
    		fontFamily: "Impact",
    		fontSize: "32px",
    		fill: "#351848"
    	}).setOrigin(0.5);
    	this.add
    	.text(CONFIG.WIDTH - CONFIG.WIDTH / 5, 90, "Opponent", {
    		fontFamily: "Impact",
    		fontSize: "32px",
    		fill: "#351848"
    	}).setOrigin(0.5);
    	this.botScoreText = this.add
    	.text(CONFIG.WIDTH - CONFIG.WIDTH / 5, 120, "0", {
    		fontFamily: "Impact",
    		fontSize: "32px",
    		fill: "#351848"
    	}).setOrigin(0.5);
    	const button1 = new Button(CONFIG.WIDTH / 5, 625, "Rock", this, "playerMove", "rock", 1)
    	const button2 = new Button(CONFIG.WIDTH / 2, 625, "Paper", this, "playerMove", "paper", 1)
    	const button3 = new Button(4*CONFIG.WIDTH / 5, 625, "Scissors", this, "playerMove", "scissors",  1)
	}

    playerMove(move){
    	const botChoice = this.botVal[Math.floor(Math.random() * 3)];
        setTimeout(() => {
        	this.checkWinner(move, botChoice);
        	this.player.setTexture(move);
        	this.bot.setTexture(botChoice);
        }, 1000);     
	}
    
    updateScore(){
    	this.playerScoreText.setText(this.playerScore);
    	this.botScoreText.setText(this.botScore);
	}

    checkWinner(playerChoice, botChoice) {
    	//Check for a tie
    	if (playerChoice === botChoice) {
    		this.text.setText("It is a tie");
    		return;
    	}
    	//Rock<Paper
    	if (playerChoice === "rock") {
    		if (botChoice === "paper") {
    			this.text.setText("Computer Wins");
    			this.playerScore++;
    			this.updateScore();
    			return;
    		} 
    		else {
    			this.text.setText("Player Wins");
    			this.botScore++;
    			this.updateScore();
    			return;
    		}
    	}
    	//Paper<Scissors
    	if (playerChoice === "paper") {
    		if (botChoice === "scissors") {
    			this.text.setText("Computer Wins");
    			this.botScore++;
    			this.updateScore();
    			return;
    		} 
    		else {
    			this.text.setText("Player Wins");
    			this.playerScore++;
    			this.updateScore();
    			return;
    		}
    	}
    	//Scissors<Rock
    	if (playerChoice === "scissors") {
    		if (botChoice === "rock") {
    			this.text.setText("Computer Wins");
    			this.botScore++;
    			this.updateScore();
    			return;
    		} 
    		else {
    			this.text.setText("Player Wins");
    			this.playerScore++;
    			this.updateScore();
    			return;
    		}
    	}
	}    
}