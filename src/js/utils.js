export function clamp(value, min, max) {
  if (value < min) return min;
  if (value > max) return max;
  return value;
}

export let hidden;
export let visibilityChange;

if (typeof document.hidden !== 'undefined') { // Opera 12.10 and Firefox 18 and later support
  hidden = 'hidden';
  visibilityChange = 'visibilitychange';
} else if (typeof document.mozHidden !== 'undefined') {
  hidden = 'mozHidden';
  visibilityChange = 'mozvisibilitychange';
} else if (typeof document.msHidden !== 'undefined') {
  hidden = 'msHidden';
  visibilityChange = 'msvisibilitychange';
} else if (typeof document.webkitHidden !== 'undefined') {
  hidden = 'webkitHidden';
  visibilityChange = 'webkitvisibilitychange';
}
