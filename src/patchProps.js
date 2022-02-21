"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.patchProps = exports.patchProp = void 0;
var listener_1 = require("./listener");
var patchProp = function (node, key, value, nextValue) {
    if (key.startsWith('on')) {
        var event_1 = key.slice(2);
        node[event_1] = nextValue;
        if (!nextValue) {
            node.removeEventListener(event_1, listener_1.listener);
        }
        else if (!value) {
            node.addEventListener(event_1, listener_1.listener);
        }
        return;
    }
    if (nextValue == null || nextValue === false) {
        node.removeAttribute(key);
        return;
    }
    node.setAttribute(key, nextValue);
};
exports.patchProp = patchProp;
var patchProps = function (node, props, nextProps) {
    var mergedProps = __assign(__assign({}, props), nextProps);
    Object.keys(mergedProps).forEach(function (key) {
        if (props[key] !== nextProps[key]) {
            (0, exports.patchProp)(node, key, props[key], nextProps[key]);
        }
    });
};
exports.patchProps = patchProps;
