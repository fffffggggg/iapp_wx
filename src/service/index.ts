
import { request, RequestTask } from '@tarojs/taro'
import { api, domain } from './api';



export interface FetchDataFun {
  (path: string, params: { [name: string]: any }, method?: methodsType, option?: request.Option): RequestTask<any>
}
export interface IFetchData {
  post: FetchDataFun,
  get: FetchDataFun
}



export type methodsType = "OPTIONS" | "POST" | "GET" | "HEAD" | "PUT" | "DELETE" | "TRACE" | "CONNECT";
/**
 * 默认请求封装
 *
 * @param {string} path api 地址
 * @param {{ [name: string]: any }} [params={}] 请求参数
 * @param {methodsType} [method="GET"] 默认方法GET
 * @param {request.Option} [option] taro.request.option的配置
 * @returns {RequestTask<any>} taro.request
 */
const defaultRequest = (path: string, params: { [name: string]: any } = {}, method: methodsType = "GET", option?: request.Option): RequestTask<any> => {
  // 判断是否是https开头的地址
  const hasDomain: boolean = path.startsWith('https://');
  const url: string = hasDomain ? path : domain + api[path];
  const defaultOption: request.Option = { url, method, data: params };
  return request(Object.assign({}, defaultOption, option));
}


const fetchData: IFetchData = {
  post: (path: string, params: { [name: string]: any } = {}, method: methodsType = "POST", option?: request.Option): RequestTask<any> => defaultRequest(path, params, method, option),
  get: defaultRequest
}

export default fetchData;