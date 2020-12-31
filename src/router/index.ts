
import Taro from '@tarojs/taro'

interface IRoute {
  [key: string]: string
}

const routes: IRoute = {
  idCard: "/pages/idCard/index"
}

export const navigateTo = (option: Taro.navigateTo.Option) => {
  Taro.navigateTo(option)
}

export const navigateBack = (option: Taro.navigateBack.Option) => {
  Taro.navigateBack(option)

}

export default routes;