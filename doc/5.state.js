import React from 'react';
import ReactDOM from 'react-dom';
/**
 * 解决this指针的三种方法
 * 1、this.add.bind(this) 把add方法里面的this指针绑定为当前组件实例
 * 2、使用匿名函数
 * 3、使用类的属性
 */
class Counter extends React.Component {
  constructor(props) {
    super(props);
    // 在构造函数里，是唯一可以给this.state赋初始值的地方
    this.state = { number: 0, name: 'zhangsan' }; // 初始值 0
  }
  // // 组件挂载完成后调用
  // componentDidMount () {
  //   this.$timer = setInterval(() => {
  //     // setState有两个功能
  //     // 1、修改状态哦
  //     // 2、重新render
  //     this.setState({ date: new Date().toLocaleTimeString() })
  //   }, 1000);
  // }
  // add () {
  //   console.log('this', this); // undefined
  //   // Cannot read property 'setState' of undefined
  //   this.setState({ number: this.state.number + 1 });
  // }
  // 实现方法3 
  // 给类的实例增加一个add属性，而这个属性里的this绑死为组件实例
  // 这个方法是组件实例的,而不是放在原型上
  add = () => {
    console.log('this', this); // undefined
    // Cannot read property 'setState' of undefined
    // this.setState({ number: this.state.number + 1 });
    // console.log('1', this.state.number);
    // this.setState({ number: this.state.number + 1 });
    // console.log('2', this.state.number);
    //当调用setState的时候其实状态并没有直接改变，而是放入了一个队列中
    // this.setState((state) => ({ number: state.number + 1 }));
    // this.setState((state) => ({ number: state.number + 1 }));
    // this.state.number += 1;
    // this.forceUpdate()  强制刷新
    this.setState({ number: this.state.number + 1 })
  }
  render () {
    return (
      <>
        <p>{this.state.number}</p>
        {/* <button onClick={this.add}>+</button> */}
        {/* 实现方法 1 绑定this指针*/}
        {/* <button onClick={this.add.bind(this)}>+</button> */}
        {/* 实现方法 2 匿名函数*/}
        <button onClick={() => this.add()}>+</button>
      </>
    )
  }
}
ReactDOM.render(<Counter />, document.getElementById('root'));