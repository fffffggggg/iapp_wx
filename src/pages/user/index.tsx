import * as React from 'react';
import './index.scss'
import { View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'

export default class UserPage extends React.Component {
  init = () => {
    Taro.setNavigationBarTitle({
      title: '用户'
    })
    Taro.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#10e951',
      animation: {
        duration: 400,
        timingFunc: 'easeIn'
      }
    })
  }

  componentDidMount() {
    this.init();
  }
  render() {
    return (
      <View>
        <Text>UserPage</Text>
      </View>
    )
  }
}