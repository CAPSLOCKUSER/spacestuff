import PIXI from 'pixi.js';
import InputManager from './inputManager';
import GameHTML from '../jade/main.jade';
import '../less/main.less';

function createGame(gameParameters) {
  const container = gameParameters.container;
  container.innerHTML = GameHTML;

  const canvas = container.querySelector('canvas.game');
  const renderer = PIXI.autoDetectRenderer(800, 600, {
    view: canvas,
    antialias: false,
    transparent: false,
    resolution: window.devicePixelRatio,
  });
  const stage = new PIXI.Container();

  const backgroundTexture = PIXI.Texture.fromImage('./resources/background.png');
  const tilingSprite = new PIXI.extras.TilingSprite(backgroundTexture, renderer.width, renderer.height);
  stage.addChild(tilingSprite);

  const playerTexture = PIXI.Texture.fromImage('./resources/player.png');

  const player = new PIXI.Sprite(playerTexture);
  player.texture.baseTexture.on('loaded', () => {
    player.position = new PIXI.Point(100, 300);
    player.anchor = new PIXI.Point(1, 0.5);
    stage.addChild(player);
  });

  let previousTime = Date.now();
  let currentTime = previousTime;
  let deltaTime = 0;

  function awake() {
    InputManager.awake();

    update();
  }

  function update() {
    previousTime = currentTime;
    currentTime = Date.now();
    deltaTime = currentTime - previousTime;

    tilingSprite.tilePosition.x -= 0.3;

    player.y += 0.25 * deltaTime * InputManager.getPlayerDirection();

    renderer.render(stage);

    requestAnimationFrame(update);
  }

  awake();
}

window.SpaceStuff = {
  awake: createGame,
  VERSION: __VERSION__, // eslint-disable-line no-undef
  BUILD_DATE: __BUILD_DATE__, // eslint-disable-line no-undef
};
