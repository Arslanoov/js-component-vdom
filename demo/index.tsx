import { h as createVNode } from '../src/createVNode';
import { patch } from '../src/patch';

const h = createVNode;

const store = {
  state: {
    count: 0,
  },
  onStateChange: () => {},
  setState(nextState) {
    this.state = nextState;
    this.onStateChange();
  },
};

const createApp = (store) => {
  const { count } = store.state;
  const decrement = () => store.setState({ count: store.state.count - 1 });
  const increment = () => store.setState({ count: store.state.count + 1 });

  return (
    <div {...{ class: 'container', 'data-count': String(count) }}>
      <div>Count: {String(count)}</div>
      <button onclick={decrement}>-1</button>
      <button onclick={increment}>+1</button>
    </div>
  );
};

let app = patch(createApp(store), document.getElementById('app'));

store.onStateChange = () => {
  app = patch(createApp(store), app);
};

/* setInterval(() => {
  store.setState({
    count: store.state.count + 1
  });
}, 1000); */
