import { listener } from "./listener"

export const patchProp = (node, key, value, nextValue) => {
  if (key.startsWith("on")) {
    const event = key.slice(2)
    node[event] = nextValue

    if (!nextValue) {
      node.removeEventListener(event, listener)
    } else if (!value) {
      node.addEventListener(event, listener)
    }

    return
  }

  if (nextValue == null || nextValue === false) {
    node.removeAttribute(key)
    return
  }

  node.setAttribute(key, nextValue)
}

export const patchProps = (node, props, nextProps) => {
  const mergedProps = {
    ...props,
    ...nextProps
  }

  Object.keys(mergedProps).forEach((key) => {
    if (props[key] !== nextProps[key]) {
      patchProp(node, key, props[key], nextProps[key])
    }
  })
}