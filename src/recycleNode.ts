import { h } from "./createVNode"

const NODE_TEXT_TYPE = 3

export const recycleNode = (node) => {
  if (NODE_TEXT_TYPE === node.nodeType) {
    return node.nodeValue
  }

  const tag = node.nodeName.toLowerCase()
  const children = [].map.call(node.childNodes, recycleNode)

  return h(tag, {}, children)
}