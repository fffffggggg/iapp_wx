import { Component } from 'react'
import './app.scss'
import 'taro-ui/dist/style/index.scss' // 全局引入一次即可

class App extends Component {

  componentDidMount() { }

  componentDidShow() { }

  componentDidHide() { }

  componentDidCatchError() { }

  // this.props.children 是将要会渲染的页面
  render() {
    console.log('this.props.children: ', this.props.children);
    return this.props.children
  }
}

export default App
