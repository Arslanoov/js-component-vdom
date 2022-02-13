export const mount = (node: Node, target: HTMLElement) => {
  target.replaceWith(node);
  return node;
};