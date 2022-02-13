type VNodeProps = {
  [key: string]: any,
};

type VNode = {
  tagName: string,
  props: VNodeProps,
  children: VNode[]
};

export const h = (tagName: string, props: VNodeProps = {}, children: VNode[] = []): VNode => ({
  tagName,
  props,
  children,
});