import { h } from '../src/createVNode';
import { createDOMNode } from '../src/createDOMNode';
import { mount } from '../src/mount';

const createApp = state => {
  const { count } = state;
  return h('div', { class: 'container', 'data-count': count }, [
    h('h1', {}, ['Hello, Virtual DOM']),
    h('div', {}, [`Count: ${count}`]),
  ]);
};

const state = { count: 0 };
const app = document.getElementById('app');

mount(createDOMNode(createApp(state)), app);

setInterval(() => {
  state.count++;
  mount(createDOMNode(createApp(state)), app);
}, 1000);