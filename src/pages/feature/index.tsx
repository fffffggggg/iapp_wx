import * as React from 'react';
import './index.scss'
import { AtGrid, } from 'taro-ui'
import { AtGridItem } from 'taro-ui/types/grid';
// import { routes, navigateTo } from '@/router';
// import fetchData from '@/service'
// http://42.192.74.35:8080/query/getLocationByIdCard


interface IState<T> {
  list: Array<T>
}
export default class FeaturePage extends React.Component<IAPP_WX.IProps, IState<AtGridItem>> {

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
    const { util } = this.props;
    // title
    util.setNavigationBarTitle({
      title: '功能'
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

  }

  handleClick = (item: AtGridItem, i: number): void => {
    // js 结构语法
    const { router: { routes, navigateTo } } = this.props;
    const path = routes[item.type]
    if (path) {
      navigateTo({ url: path });
    }
  }

  componentDidMount() {
    this.init();
  }
  render() {
    const { list } = this.state;
    return (
      <AtGrid data={list} onClick={this.handleClick} />
    )
  }
}