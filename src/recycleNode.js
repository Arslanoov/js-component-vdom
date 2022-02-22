"use strict";
exports.__esModule = true;
exports.recycleNode = void 0;
var createVNode_1 = require("./createVNode");
var NODE_TEXT_TYPE = 3;
var recycleNode = function (node) {
    if (NODE_TEXT_TYPE === node.nodeType) {
        return node.nodeValue;
    }
    var tag = node.nodeName.toLowerCase();
    var children = [].map.call(node.childNodes, exports.recycleNode);
    return (0, createVNode_1.h)(tag, {}, children);
};
exports.recycleNode = recycleNode;
