import { h } from '../src/createVNode';
import { createDOMNode } from '../src/createDOMNode';

const el = h('div', {
  class: 'some-class',
}, [
  h('span', {}, ['Some text'])
]);

const node = createDOMNode(el);

console.log(node);