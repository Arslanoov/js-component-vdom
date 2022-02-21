type VNodeProps = {
  [key: string]: any,
};

export type VNode = {
  tagName: string,
  props: VNodeProps,
  children: Array<VNode | string>
};

export const h = (tagName, props: VNodeProps = {}, ...children: Array<VNode | string>): VNode => {
  if (typeof tagName === 'function') {
    return tagName(props, children);
  }

  return {
    tagName,
    props,
    children: children.flat(),
  };
};
