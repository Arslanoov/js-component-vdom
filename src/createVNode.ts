type VNodeProps = {
  [key: string]: any,
};

export type VNode = {
  tagName: string,
  props: VNodeProps,
  children: Array<VNode | string>
};

export const h = (tagName: string, props: VNodeProps = {}, children: Array<VNode | string> = []): VNode => ({
  tagName,
  props,
  children,
});

export const hButton = (props) => {
  const { text, onclick } = props;
  return h('button', { onclick }, [ text ]);
}