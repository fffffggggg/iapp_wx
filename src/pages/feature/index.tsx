import * as React from 'react';
import Taro from '@tarojs/taro'
import './index.scss'
import { AtGrid, } from 'taro-ui'
import { AtGridProps, AtGridItem } from 'taro-ui/types/grid';
import routes, { navigateTo } from '@/router';
// import fetchData from '@/service'
// http://42.192.74.35:8080/query/getLocationByIdCard


interface IState<T> {
  list: Array<T>
}
export default class FeaturePage extends React.Component<any, IState<AtGridItem>> {

  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          value: "身份证查询",
          iconInfo: { value: "credit-card", color: "#108ee9" },
          type: "idCard"
        },
        {
          iconInfo: { value: "phone", color: "#106ee9" },
          value: "手机号码查询",
          type: "phone"
        },
      ]
    }
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

  handleClick = (item: AtGridItem, i: number): void => {
    console.log('item: ', item);
    console.log('i: ', i);
    const path = routes[item.type]
    console.log('path: ', path);
    if (path) {
      navigateTo({ url: path });
    }
  }

  componentDidMount() {
    this.init();
  }
  render() {
    const { list } = this.state;
    console.log('this.props.children:1 ', this.props.children);
    return (
      <AtGrid data={list} onClick={this.handleClick} />
    )
  }
}