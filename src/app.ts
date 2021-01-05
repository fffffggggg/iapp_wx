import React, { Component } from 'react'
import './app.scss'
import 'taro-ui/dist/style/index.scss' // 全局引入一次即可
import router from './router';
import fetchData from './service'
import util from './util'
class App extends Component {

  componentDidMount() { }

  componentDidShow() { }

  componentDidHide() { }

  componentDidCatchError() { }

  // this.props.children 是将要会渲染的页面
  render() {
    return React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child as React.ReactElement, { router, fetchData, util })
    })
  }
}

export default App
