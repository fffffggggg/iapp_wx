import * as React from 'react';
import './index.scss'
import { View, Text } from '@tarojs/components'
// import Taro from '@tarojs/taro'
import md5 from 'js-md5';
interface IProps extends IAPP_WX.IProps {
  // [name: string]: any
}

interface IState {
  systemInfo: any,
  batteryInfo: any
}

export default class HomePage extends React.Component<IProps, IState> {

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


  init = (): void => {
    const { util } = this.props;
    // this.getSystemInfo();
    // title
    util.setNavigationBarTitle({
      title: '主页'
    })
    // 
    util.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#106ee9',
      // animation: {
      //   duration: 400,
      //   timingFunc: 'easeIn'
      // }
    })
    util.setBackgroundTextStyle({
      textStyle: 'dark' // 下拉背景字体、loading 图的样式为dark
    })
    // 显示红点
    // Taro.showTabBarRedDot({ index: 1 })
    // 设备电量
    // this.getBatteryInfo();
    this.getLocation();
  }

  getLocation = async () => {
    const { util, fetchData } = this.props;
    // wgs84 返回 gps 坐标，gcj02 返回可用于 Taro.openLocation 的坐标
    let latitude: string, longitude: string;
    const res = await util.getLocation({ type: "gcj02" });
    latitude = res.latitude;
    longitude = res.longitude;
    // https://apis.map.qq.com/ws/geocoder/v1/?location=
    const key = "VXSBZ-PLECW-O34RW-RIECV-ZSKP7-XRFEK";
    const reqMD5 = md5(`/ws/geocoder/v1/?key=${key}&location=${latitude},${longitude}sRG73KxOJiHPWGarv8Fw9ykwHUdMgit`)
    console.log('reqMD5: ', reqMD5);
    const { data: { result } } = await fetchData.get("https://apis.map.qq.com/ws/geocoder/v1/", { location: latitude + "," + longitude, key, sig: reqMD5 })
    console.log('result: ', result);
    // const data = await util.chooseLocation({ latitude, longitude })
    // console.log('data: ', data);
    const { ad_info: { adcode, city_code } } = result;
    console.log('adcode: ', adcode);
    const a = await fetchData.get("https://restapi.amap.com/v3/weather/weatherInfo", { key: "9f37020a4dba655663f74df38ca06f88", city: adcode })
    console.log('a: ', a);
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