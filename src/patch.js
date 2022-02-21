"use strict";
exports.__esModule = true;
exports.patch = void 0;
var patchNode_1 = require("./patchNode");
var recycleNode_1 = require("./recycleNode");
var patch = function (vNextNode, node) {
    var vNode = node.vi || (0, recycleNode_1.recycleNode)(node);
    node = (0, patchNode_1.patchNode)(node, vNode, vNextNode);
    node.vi = vNextNode;
    return node;
};
exports.patch = patch;
