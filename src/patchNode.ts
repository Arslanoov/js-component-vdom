import { VNode } from "./createVNode"
import { createDOMNode } from "./createDOMNode"
import {patchProps} from "./patchProps"
import {patchChildren} from "./patchChildren"

export const patchNode = (node, vNode: VNode, nextVNode: VNode) => {
  if (!nextVNode) {
    node.remove()
    return
  }

  if (typeof vNode === "string" && typeof nextVNode === "string") {
    if (vNode !== nextVNode) {
      const nextNode = createDOMNode(nextVNode)
      node.replaceWith(nextNode)
      return nextNode
    }

    return node
  }

  if (vNode.tagName !== nextVNode.tagName) {
    const nextNode = createDOMNode(nextVNode)
    node.replaceWith(nextNode)
    return nextNode
  }

  patchProps(node, vNode.props, nextVNode.props)

  patchChildren(node, vNode.children, nextVNode.children)

  return node
}