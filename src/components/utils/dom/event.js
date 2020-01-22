export function stopPropagation(eventTarget) {
  eventTarget.stopPropagation();
}
export function preventDefault(eventTarget) {
  if (eventTarget.cancelable || typeof eventTarget.cancelable !== 'boolean') {
    eventTarget.preventDefault();
  }
}

export function on(el, event, handler) {
  el.addEventListener(event, handler);
}
export function off(el, event, handler) {
  el.removeEventListener(event, handler);
}
