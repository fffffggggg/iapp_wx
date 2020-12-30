interface IApi {
  [name: string]: string
}

const domain: string = "https://www.shijinzhengqian.cn";

const api: IApi = {
  getLocationByIdCard: "/query/getLocationByIdCard"
}

export { api, domain }