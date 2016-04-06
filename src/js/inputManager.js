let playerDirection = 0;

const KEY_CODES = {
  DOWN: 40,
  UP: 38,
  SPACE: 32,
};

function onKeyDown(event) {
  switch (event.keyCode) {
    case KEY_CODES.UP:
      playerDirection = -1;
      break;
    case KEY_CODES.DOWN:
      playerDirection = 1;
      break;
    default: break;
  }
}

function onKeyUp(event) {
  switch (event.keyCode) {
    case KEY_CODES.UP:
    case KEY_CODES.DOWN:
      playerDirection = 0;
      break;
    default: break;
  }
}

export default {
  awake() {
    document.addEventListener('keydown', onKeyDown, false);
    document.addEventListener('keyup', onKeyUp, false);
  },
  getPlayerDirection() {
    return playerDirection;
  },
};
