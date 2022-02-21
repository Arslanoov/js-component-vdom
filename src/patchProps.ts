export const patchProp = (node, key, value, nextValue) => {
  if (nextValue === false || nextValue === null) {
    node.removeAttribute(key);
    return;
  }

  node.setAttribute(key, nextValue);
}

export const patchProps = (node, props, nextProps) => {
  const mergedProps = {
    ...props,
    ...nextProps
  };

  Object.keys(mergedProps).forEach((key) => {
    if (props[key] !== nextProps[key]) {
      patchProp(node, key, props[key], nextProps[key]);
    }
  });
}