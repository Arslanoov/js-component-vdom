import type { VNode } from './createVNode';

export const createDOMNode = (vNode: VNode | string) => {
  if (typeof vNode === 'string') {
    return document.createTextNode(vNode);
  }

  const { tagName, props, children } = vNode;

  const node = document.createElement(tagName);
  Object.entries(props).forEach(([prop, value]) => {
    node.setAttribute(prop, value);
  });

  // TODO: Remove recursion, implement with Stack
  children.forEach((child) => node.appendChild(createDOMNode(child)));

  return node;
}