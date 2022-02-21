import { h } from '../src/createVNode';
import { createDOMNode } from '../src/createDOMNode';
import { patch } from "../src/patch";

const createApp = (state) => {
  const { count } = state;
  return h('div', { class: 'container', 'data-count': count }, [
    h('h1', {}, ['Hello, Virtual DOM']),
    h('div', {}, [`Count: ${count}`]),
  ]);
};

const state = { count: 0 };
let app = patch(
  createApp(state),
  document.getElementById('app')
);

setInterval(() => {
  state.count++;
  app = patch(createApp(state), app);
}, 1000);