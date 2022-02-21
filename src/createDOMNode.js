"use strict";
exports.__esModule = true;
exports.createDOMNode = void 0;
var patchProps_1 = require("./patchProps");
var createDOMNode = function (vNode) {
    if (typeof vNode === 'string') {
        return document.createTextNode(vNode);
    }
    var tagName = vNode.tagName, props = vNode.props, children = vNode.children;
    var node = document.createElement(tagName);
    (0, patchProps_1.patchProps)(node, {}, props);
    // TODO: Remove recursion, implement with Stack
    children.forEach(function (child) { return node.appendChild((0, exports.createDOMNode)(child)); });
    return node;
};
exports.createDOMNode = createDOMNode;
