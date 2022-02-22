"use strict";
exports.__esModule = true;
exports.listener = void 0;
function listener(event) {
    return this[event.type](event);
}
exports.listener = listener;
