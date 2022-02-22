import type { VNode } from "./createVNode"
import { patchProps } from "./patchProps"

export const createDOMNode = (vNode: VNode | string): Node => {
  if (typeof vNode === "string") {
    return document.createTextNode(vNode)
  }

  const { tagName, props, children } = vNode

  const node = document.createElement(tagName)
  patchProps(node, {}, props)

  // TODO: Remove recursion, implement with Stack
  children.forEach((child) => node.appendChild(createDOMNode(child)))

  return node
}