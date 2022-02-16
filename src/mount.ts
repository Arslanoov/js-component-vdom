export const mount = (node: Node, target: Element) => {
  target.innerHTML = '';
  target.appendChild(node);
  return node;
};