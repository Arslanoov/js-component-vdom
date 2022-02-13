import { h } from '../src/createVNode';
import { createDOMNode } from '../src/createDOMNode';
import { mount } from '../src/mount';

const el = h('div', {
  class: 'some-class',
}, [
  h('span', {}, ['Some text'])
]);

mount(
  createDOMNode(el),
  document.querySelector('#root')
);