import * as React from 'react';
import { View, Text, Swiper, SwiperItem } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.scss'


export default class FeaturePage extends React.Component {
  init = () => {
    // title
    Taro.setNavigationBarTitle({
      title: '功能'
    })
    // 
    Taro.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#106ee9',
      // animation: {
      //   duration: 400,
      //   timingFunc: 'easeIn'
      // }
    })
    Taro.setBackgroundTextStyle({
      textStyle: 'dark' // 下拉背景字体、loading 图的样式为dark
    })

  }

  componentDidMount() {
    this.init();
  }
  render() {
    return (
      <Swiper
        className='swiper-box'
        indicatorColor='#999'
        indicatorActiveColor='#333'
        vertical
        circular
        indicatorDots
        autoplay>
        <SwiperItem className="swiper-item">
          <View className='demo-text-1'>1</View>
        </SwiperItem>
        <SwiperItem>
          <View className='demo-text-2'>2</View>
        </SwiperItem>
        <SwiperItem className="swiper-item">
          <View className='demo-text-3'>3</View>
        </SwiperItem>
      </Swiper>
    )
  }
}