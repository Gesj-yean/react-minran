import { GET, POST, PUT } from "./axios";

export const api = {
  homeList: (params: object) => GET("/homeList", params),
  historyList: (params?: object) => GET("/historyList", params),
  hotList: (params?: object) => GET("/hotList", params),
};
