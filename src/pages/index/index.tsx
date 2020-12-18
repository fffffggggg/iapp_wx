import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { FooterBar } from '../components'
import './index.scss'
import Taro from '@tarojs/taro'
import UserPage from '../user/index'
interface ITabListMap {
  [name: number]: string
}
interface IState {
  current: number,
  tabListMap: ITabListMap
}

interface IProps {
  [name: string]: any
}


export default class Index extends Component<IProps, IState> {
  constructor(props) {
    super(props)
    this.state = {
      current: 0,
      tabListMap: {
        0: 'pages/index/index',
        1: 'pages/user/index',
        2: 'pages/user/index'
      }
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
    const url = this.state.tabListMap[val];
    console.log('url: ', url);
    // Taro.switchTab({
    //   url
    // })
  }

  render() {
    return (
      <View className='index'>
        {
          this.state.current == 2 ? <UserPage /> : <Text>{this.state.current}</Text>
        }
        <FooterBar handler={this.footerBarHandler} />
      </View>
    )
  }
}
