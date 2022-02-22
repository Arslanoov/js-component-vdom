export const mount = (node: Node, target: Element) => {
  target.replaceWith(node);
  return node;
};
