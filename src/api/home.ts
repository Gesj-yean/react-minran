import { GET, POST, PUT } from "./axios";

export const api = {
  homeList: (params: object) => GET("/homeList", params),
};
