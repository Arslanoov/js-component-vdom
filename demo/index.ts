import { h } from '../src/createVNode';
import { createDOMNode } from '../src/createDOMNode';
import { mount } from '../src/mount';
import { patchNode } from '../src/patchNode';

const createApp = (state) => {
  const { count } = state;
  return h('div', { class: 'container', 'data-count': count }, [
    h('h1', {}, ['Hello, Virtual DOM']),
    h('div', {}, [`Count: ${count}`]),
  ]);
};

const state = { count: 0 };
let vApp = createApp(state);
let app = mount(
  createDOMNode(vApp),
  document.getElementById('app')
);

setInterval(() => {
  state.count++;

  const vNextApp = createApp(state);

  app = patchNode(app, vApp, vNextApp);
  vApp = vNextApp;
}, 1000);