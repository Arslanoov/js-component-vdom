import { patchNode } from "./patchNode"
import { createDOMNode } from "./createDOMNode"

export const patchChildren = (parentNode, vChildren, vNextChildren) => {
  parentNode.childNodes.forEach((child, i) => {
    patchNode(child, vChildren[i], vNextChildren[i])
  })

  vNextChildren.slice(vChildren.length).forEach((child) => {
    parentNode.appendChild(createDOMNode(child))
  })
}