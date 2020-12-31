
import Taro from '@tarojs/taro'

export interface IRoute {
  [key: string]: string
}

export const routes: IRoute = {
  idCard: "/pages/idCard/index"
}

export const navigateTo = (option: Taro.navigateTo.Option) => {
  Taro.navigateTo(option)
}

export const navigateBack = (option: Taro.navigateBack.Option) => {
  Taro.navigateBack(option)
}

interface INavigate {
  (option: Taro.navigateBack.Option): void
}
interface IRouter {
  routes: IRoute,
  navigateBack: INavigate,
  navigateTo: INavigate,
}

export const router: IRouter = {
  routes,
  navigateBack,
  navigateTo
}

export default router;