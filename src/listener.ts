export function listener(event) {
  return this[event.type](event);
}
