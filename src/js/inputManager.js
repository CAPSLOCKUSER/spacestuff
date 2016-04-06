import { visibilityChange } from './utils';

let playerDirection = 0;

const KEY_CODES = {
  DOWN: 40,
  UP: 38,
  SPACE: 32,
};

const keyStates = {
  down: false,
  up: false,
  space: false,
};

function onKeyDown(event) {
  switch (event.keyCode) {
    case KEY_CODES.UP:
      playerDirection = -1;
      keyStates.up = true;
      break;
    case KEY_CODES.DOWN:
      playerDirection = 1;
      keyStates.down = true;
      break;
    default:
      break;
  }
}

function onKeyUp(event) {
  switch (event.keyCode) {
    case KEY_CODES.UP:
      playerDirection = keyStates.down ? 1 : 0;
      keyStates.up = false;
      break;
    case KEY_CODES.DOWN:
      playerDirection = keyStates.up ? -1 : 0;
      keyStates.down = false;
      break;
    default:
      break;
  }
}

function resetInput() {
  playerDirection = 0;
  keyStates.down = false;
  keyStates.UP = false;
  keyStates.SPACE = false;
}

export default {
  awake() {
    document.addEventListener('keydown', onKeyDown, false);
    document.addEventListener('keyup', onKeyUp, false);
    document.addEventListener(visibilityChange, resetInput);
    window.onblur = resetInput;
  },
  getPlayerDirection() {
    return playerDirection;
  },
};
