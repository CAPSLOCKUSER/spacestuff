export function clamp(value, min, max) {
  if (value < min) return min;
  if (value > max) return max;
  return value;
}

export let hidden = 'hidden';
export let visibilityChange = 'visibilitychange';

if (typeof document.mozHidden !== 'undefined') {
  hidden = 'mozHidden';
  visibilityChange = 'mozvisibilitychange';
} else if (typeof document.msHidden !== 'undefined') {
  hidden = 'msHidden';
  visibilityChange = 'msvisibilitychange';
} else if (typeof document.webkitHidden !== 'undefined') {
  hidden = 'webkitHidden';
  visibilityChange = 'webkitvisibilitychange';
}
