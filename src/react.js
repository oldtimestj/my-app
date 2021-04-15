class Component {
  static isReactComponent = true; //子类都会继承此静态属性，类组件的标识符
  constructor(props) {
    this.props = props;
  }
}
function createElement (type, config = {}, children) {
  let propName;
  const props = {};
  for (propName in config) {
    props[propName] = config[propName];
  }
  const childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    props.children = Array.from(arguments).slice(2);
  }
  return ReactElement(type, props)
}
function ReactElement (type, props) {
  const element = { type, props };
  return element;
}
export default {
  createElement,
  Component
}