import { patchNode } from "./patchNode"
import { recycleNode } from "./recycleNode"

export const patch = (vNextNode, node) => {
  const vNode = node.vi || recycleNode(node)

  node = patchNode(node, vNode, vNextNode)
  node.vi = vNextNode

  return node
}