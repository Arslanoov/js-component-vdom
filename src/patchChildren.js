"use strict";
exports.__esModule = true;
exports.patchChildren = void 0;
var patchNode_1 = require("./patchNode");
var createDOMNode_1 = require("./createDOMNode");
var patchChildren = function (parentNode, vChildren, vNextChildren) {
    parentNode.childNodes.forEach(function (child, i) {
        (0, patchNode_1.patchNode)(child, vChildren[i], vNextChildren[i]);
    });
    vNextChildren.slice(vChildren.length).forEach(function (child) {
        parentNode.appendChild((0, createDOMNode_1.createDOMNode)(child));
    });
};
exports.patchChildren = patchChildren;
