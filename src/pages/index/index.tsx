import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { FooterBar } from '../components'
import './index.scss'
// import Taro from '@tarojs/taro'
import UserPage from '../user/index'
import RouterComponent from '../router';

interface ITabListMap {
  [name: number]: string
}
interface IState {
  current: number,
}

interface IProps {
  [name: string]: any
}


export default class Index extends Component<IProps, IState> {
  constructor(props) {
    super(props)
    this.state = {
      current: 0,
    }
  }
  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  footerBarHandler = (val) => {
    this.setState({
      current: val
    })
  }

  render() {
    const { current } = this.state;
    return (
      <View className='index'>
        {/* 页面 router */}
        <RouterComponent current={current} />
        {/* tabBar  */}
        <FooterBar handler={this.footerBarHandler} />
      </View>
    )
  }
}
