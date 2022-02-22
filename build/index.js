define("js-component-vdom",[],(function(){return function(){"use strict";var e={d:function(t,r){for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r:function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{createDOMNode:function(){return a},h:function(){return r},listener:function(){return n},mount:function(){return p},patch:function(){return h},patchChildren:function(){return l},patchNode:function(){return d},patchProp:function(){return u},patchProps:function(){return f},recycleNode:function(){return s}});var r=function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length,n=new Array(r>2?r-2:0),o=2;o<r;o++)n[o-2]=arguments[o];return"function"==typeof e?e(t,n):{tagName:e,props:t,children:n.flat()}};function n(e){return this[e.type](e)}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var u=function(e,t,r,o){if(t.startsWith("on")){var i=t.slice(2);return e[i]=o,void(o?r||e.addEventListener(i,n):e.removeEventListener(i,n))}null!=o&&!1!==o?e.setAttribute(t,o):e.removeAttribute(t)},f=function(e,t,r){var n=i(i({},t),r);Object.keys(n).forEach((function(n){t[n]!==r[n]&&u(e,n,t[n],r[n])}))},a=function e(t){if("string"==typeof t)return document.createTextNode(t);var r=t.tagName,n=t.props,o=t.children,i=document.createElement(r);return f(i,{},n),o.forEach((function(t){return i.appendChild(e(t))})),i},p=function(e,t){return t.replaceWith(e),e},l=function(e,t,r){e.childNodes.forEach((function(e,n){d(e,t[n],r[n])})),r.slice(t.length).forEach((function(t){e.appendChild(a(t))}))},d=function(e,t,r){if(r){if("string"==typeof t&&"string"==typeof r){if(t!==r){var n=a(r);return e.replaceWith(n),n}return e}if(t.tagName!==r.tagName){var o=a(r);return e.replaceWith(o),o}return f(e,t.props,r.props),l(e,t.children,r.children),e}e.remove()},s=function e(t){if(3===t.nodeType)return t.nodeValue;var n=t.nodeName.toLowerCase(),o=[].map.call(t.childNodes,e);return r(n,{},o)},h=function(e,t){var r=t.vi||s(t);return(t=d(t,r,e)).vi=e,t};return t}()}));