"use strict";
exports.__esModule = true;
exports.patchNode = void 0;
var createDOMNode_1 = require("./createDOMNode");
var patchProps_1 = require("./patchProps");
var patchChildren_1 = require("./patchChildren");
var patchNode = function (node, vNode, nextVNode) {
    if (!nextVNode) {
        node.remove();
        return;
    }
    if (typeof vNode === "string" && typeof nextVNode === "string") {
        if (vNode !== nextVNode) {
            var nextNode = (0, createDOMNode_1.createDOMNode)(nextVNode);
            node.replaceWith(nextNode);
            return nextNode;
        }
        return node;
    }
    if (vNode.tagName !== nextVNode.tagName) {
        var nextNode = (0, createDOMNode_1.createDOMNode)(nextVNode);
        node.replaceWith(nextNode);
        return nextNode;
    }
    (0, patchProps_1.patchProps)(node, vNode.props, nextVNode.props);
    (0, patchChildren_1.patchChildren)(node, vNode.children, nextVNode.children);
    return node;
};
exports.patchNode = patchNode;
