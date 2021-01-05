import * as React from 'react';
import { View, Text } from '@tarojs/components'
import { AtButton, AtInput, AtToast } from 'taro-ui'
import './index.scss';
export default class IDCardPage extends React.Component<IAPP_WX.IProps, any> {
  constructor(props) {
    super(props);
    this.state = {
      idCard: "",
      idCardMsg: "",
      isOpened: false
    }
  }

  IDCardHandleChange = (value) => {
    this.setState({
      idCard: value
    })
  }
  searchIdCard = async () => {
    const { idCard } = this.state;
    const { fetchData } = this.props;
    const res = await fetchData.post("getLocationByIdCard", { idCard })
    if (res?.data?.code == "000000") {
      this.setState({
        idCardMsg: res.data.data
      })
    } else {
      this.setState({ isOpened: true, text: res.data.msg, icon: "close-circle" })
    }
  }

  componentDidMount() {
    const { util } = this.props;
    util.setNavigationBarTitle({ title: "身份证查询" })
  }
  render() {
    const { text, icon, isOpened } = this.state;
    return (<View>
      {/* <Text>idCard</Text> */}
      <View>
        <AtInput
          name='idCard'
          title='idCard'
          type='text'
          placeholder='idCard'
          value={this.state.idCard}
          onChange={this.IDCardHandleChange}
        >
        </AtInput>
        <AtButton type="primary" full={true} circle={false} onClick={this.searchIdCard}>查询</AtButton>
        <AtToast isOpened={isOpened} text={text} icon={icon} duration={1500}></AtToast>
      </View>
      <View className="id-card-content">
        <Text>
          归属地：{this.state.idCardMsg}
        </Text>
      </View>
    </View>)
  }
}