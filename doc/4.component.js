import React from './react';
import ReactDOM from './react-dom';

/**
 * 我们把页面分成若干的单独的部分，单独编写，单独维护
 * 1、函数组件 组件需要返回且仅能返回一个React根元素 组件名称必须大写字母开头
 *   1、收集属性对象{name: 'tjwang', age: 10}
 *   2、会把props对象传入Welcome函数 并得到一个返回值
 * 2、类组件
 */

// function Welcome1 ({ name, age }) {
//   return <h1>hello {name}--{age}</h1>
// }
/**
 * 1、收集属性对象{name: 'tjwang', age: 10}
 * 2、把属性对象传给Welcome类的构造函数,并得到相应的实例
 * 3、调用render方法获取返回值
 * 
 */
// class Welcome2 extends React.Component {
//   constructor(props) {
//     super(props) // this.props = props
//   }
//   render () {
//     return <h1>hello {this.props.name}--{this.props.age}</h1>
//   }
// }

let data = { name: 'tjwang', age: 10 };
/**
 * let element = (
  <h1 className="title" style={{ color: 'red', fontSize: '50px' }}>hello<span>world</span></h1>
  )
 */

// let element = React.createElement("h1", {
//   className: "title",
//   style: {
//     color: 'red',
//     fontSize: '50px'
//   }
// }, "hello", /*#__PURE__*/React.createElement("span", null, "world"));

// function Welcome (props) {
//   return <h1>hello {props.name}--{props.age}</h1>
// }
function Welcome (props) {
  return React.createElement('h1', { id: 'welcome' }, props.name, props.age);
}
class Welcome3 extends React.Component {
  render () {
    return React.createElement('h1', { id: 'welcome' }, this.props.name, this.props.age);
  }
}
let element = React.createElement(Welcome3, { name: 'tjwang', age: 20 });
ReactDOM.render(element, document.getElementById('root'));