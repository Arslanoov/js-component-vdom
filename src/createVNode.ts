type VNodeProps = {
  [key: string]: any,
};

export type VNode = {
  tagName: string,
  props: VNodeProps,
  children: VNode[] | string[]
};

export const h = (tagName: string, props: VNodeProps = {}, children: VNode[] | string[] = []): VNode => ({
  tagName,
  props,
  children,
});