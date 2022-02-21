import {h, hButton} from '../src/createVNode';
import { patch } from "../src/patch";

const store = {
  state: {
    count: 0,
  },
  onStateChange: () => {},
  setState(nextState) {
    this.state = nextState;
    this.onStateChange();
  }
};

const createApp = ({ state }) => {
  const { count } = state;
  return h('div', { class: 'container', 'data-count': count }, [
    h('h1', {}, ['Hello, Virtual DOM']),
    h('div', {}, [`Count: ${count}`]),
    h("div", {}, [
      hButton({
        text: '-1',
        onclick: () => store.setState({ count: store.state.count - 1 })
      }),
      hButton({
        text: '+1',
        onclick: () => store.setState({ count: store.state.count + 1 })
      })
    ])
  ]);
};

let app = patch(
  createApp(store),
  document.getElementById('app')
);

store.onStateChange = () => {
  app = patch(createApp(store), app);
};

setInterval(() => {
  store.setState({
    count: store.state.count + 1
  });
}, 1000);