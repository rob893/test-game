import { GameEngine, Color } from '@entropy-engine/entropy-game-engine';
import { scene1 } from './scenes';

async function main() {
    const bodyElement = document.getElementById('body') as HTMLBodyElement;

    bodyElement.style.backgroundColor = Color.BlueGrey;

    const gameCanvas = document.getElementById('game-canvas') as HTMLCanvasElement;
    const gameEngine = new GameEngine(gameCanvas);

    gameEngine.developmentMode = true;

    gameEngine.setScenes([scene1]);

    await gameEngine.loadScene(1);
}

window.onload = () => {
    main();
};
