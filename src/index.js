import React from 'react';
import ReactDOM from 'react-dom';
/**
 * 解决this指针的三种方法
 * 1、this.add.bind(this) 把add方法里面的this指针绑定为当前组件实例
 * 2、使用匿名函数
 * 3、使用类的属性
 */
class Counter extends React.Component {
  render () {
    return (
      <>
        <input />+<input /><button> = </button><input />
      </>
    )
  }
}
ReactDOM.render(<Counter />, document.getElementById('root'));