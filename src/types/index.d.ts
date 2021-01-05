
declare namespace IAPP_WX {
  interface FetchDataFun {
    (path: string, params: { [name: string]: any }, method?: methodsType, option?: request.Option): RequestTask<any>
  }
  interface IFetchData {
    post: FetchDataFun,
    get: FetchDataFun
  }
  interface IProps {
    router: IRouter;
    fetchData: IAPP_WX.IFetchData;
    [key: string]: any
  }
}