declare type VNodeProps = {
  [key: string]: any;
};
export declare type VNode = {
  tagName: string;
  props: VNodeProps;
  children: Array<VNode | string>;
};
export declare const h: (
  tagName: any,
  props?: VNodeProps,
  ...children: Array<VNode | string>
) => VNode;
export {};
