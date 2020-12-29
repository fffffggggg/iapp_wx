import * as React from 'react';
import './index.scss'
import { View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'

export default class HomePage extends React.Component<any, any> {

  constructor(props) {
    super(props);
    this.state = {
      systemInfo: {},
      batteryInfo: {}
    }
  }

  getSystemInfo = (): void => {
    Taro.getSystemInfo()
      .then(res => {
        console.log('res', res)
        this.setState({
          systemInfo: res
        })
      })
  }
  getBatteryInfo = (): void => {
    Taro.getBatteryInfo().then(res => {
      console.log('res:getBatteryInfo ', res);
      this.setState({
        batteryInfo: res
      })
    })
  }


  init = () => {
    this.getSystemInfo();
    // title
    Taro.setNavigationBarTitle({
      title: '主页'
    })
    // 
    Taro.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#106ee9',
      animation: {
        duration: 400,
        timingFunc: 'easeIn'
      }
    })
    Taro.setBackgroundTextStyle({
      textStyle: 'dark' // 下拉背景字体、loading 图的样式为dark
    })
    // 显示红点
    // Taro.showTabBarRedDot({ index: 1 })
    // 设备电量
    this.getBatteryInfo();

  }

  componentDidMount() {
    this.init();
  }
  render() {
    const { systemInfo, batteryInfo } = this.state;
    return (
      <View>
        <Text>home</Text>
        <Text>{JSON.stringify(systemInfo)}</Text>
        <Text>是否正在充电：{batteryInfo.isCharging ? '是' : '否'}</Text>
        <Text>电池电量：{batteryInfo.level}%</Text>
      </View>
    )
  }
}