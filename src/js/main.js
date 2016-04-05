import '../less/main.less';
import GameHTML from '../jade/main.jade';

function createGame(gameParameters) {
  const container = gameParameters.container;
  container.innerHTML = GameHTML;

  function awake() {

  }

  return {
    awake,
  };
}

window.createGame = createGame;
