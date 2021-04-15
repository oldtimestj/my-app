function render (element, parentNode) {
  if (typeof element === 'string' || typeof element === 'number') {
    return parentNode.appendChild(document.createTextNode(element));
  }
  let type, props;
  type = element.type; // type 可能为字符串或者函数 --》 函数式组件
  props = element.props;
  if (type.isReactComponent) {  // 说明此组件是类组件
    let returnElement = new type(props).render();
    type = returnElement.type;
    props = returnElement.props;
  } else if (typeof type === 'function') {
    let returnElement = type(props); // 新生成的元素
    type = returnElement.type;
    props = returnElement.props;
  }
  let domElement = document.createElement(type);
  for (let propName in props) {
    if (propName === 'className') {
      domElement.className = props[propName];
    } else if (propName === 'style') {
      let styleObj = props[propName];
      // for(let attr in styleObj) {
      //   domElement.style[attr] = styleObj[attr];
      // }
      let cssText = Object.keys(styleObj).map(attr => {
        return `${attr.replace(/(A-Z)/g, function () { return '-' + arguments[1].toLowerCase() })}: ${styleObj[attr]}`
      }).join(';')
      domElement.style.cssText = cssText;
    } else if (propName === 'children') {
      let children = Array.isArray(props.children) ? props.children : [props.children];
      children.forEach(child => render(child, domElement));
    } else {
      domElement.setAttribute(propName, props[propName]);
    }
  }
  parentNode.appendChild(domElement);
}

export default {
  render
}