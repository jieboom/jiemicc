export function stopPropagation(eventTarget) {
  eventTarget.stopPropagation();
}
export function preventDefault(eventTarget) {
  if (eventTarget.cancelable || typeof eventTarget.cancelable !== 'boolean') {
    eventTarget.preventDefault();
  }
}

export function on(el, event, handler) {
  el.addEventLister(event, handler);
}
export function off(el, event, handler) {
  el.removeEventLister(event, handler);
}
