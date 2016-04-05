import PIXI from 'pixi.js';
import GameHTML from '../jade/main.jade';
import '../less/main.less';

function createGame(gameParameters) {
  const container = gameParameters.container;
  container.innerHTML = GameHTML;

  const canvas = container.querySelector('canvas.game');
  const renderer = PIXI.autoDetectRenderer(800, 600, { view: canvas });
  const stage = new PIXI.Container();

  var texture = PIXI.Texture.fromImage('./resources/background.png');
  var tilingSprite = new PIXI.extras.TilingSprite(texture, renderer.width, renderer.height);
  stage.addChild(tilingSprite);

  function awake() {
    update();
  }

  function update() {
    tilingSprite.tilePosition.x -= 0.3;

    renderer.render(stage);

    requestAnimationFrame(update);
  }

  return {
    awake,
  };
}

window.SpaceStuff = {
  createGame,
  VERSION: __VERSION__, // eslint-disable-line no-undef
  BUILD_DATE: __BUILD_DATE__, // eslint-disable-line no-undef
};
