import * as React from 'react';
import { View, Text, Swiper, SwiperItem } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.scss'
import { AtButton, AtInput } from 'taro-ui'

// http://42.192.74.35:8080/query/getLocationByIdCard
export default class FeaturePage extends React.Component<any, any> {

  constructor(props) {
    super(props);
    this.state = {
      idCard: ""
    }
  }

  IDCardHandleChange = (value) => {
    console.log('value: ', value);
    this.setState({
      idCard: value
    })
  }
  searchIdCard = async () => {
    const { idCard } = this.state;
    console.log('idCard: ', idCard);
    const res = await Taro.request({ url: 'https://42.192.74.35:8080/query/getLocationByIdCard', data: { idCard }, method: 'POST' })
    console.log('res: ', res);
  }

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
      <View>
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
        <View>
          <AtInput
            name='idCard'
            title='idCard'
            type='text'
            placeholder='idCard'
            value={this.state.idCard}
            onChange={this.IDCardHandleChange}
          />
          <AtButton onClick={this.searchIdCard}>查询</AtButton>
        </View>
      </View>
    )
  }
}