"use strict";
exports.__esModule = true;
exports.h = void 0;
var h = function (tagName, props) {
    if (props === void 0) { props = {}; }
    var children = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        children[_i - 2] = arguments[_i];
    }
    if (typeof tagName === 'function') {
        return tagName(props, children);
    }
    return {
        tagName: tagName,
        props: props,
        children: children.flat()
    };
};
exports.h = h;
