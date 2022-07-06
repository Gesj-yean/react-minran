import { GET } from "./axios";

export const api = {
  messageDetail: (params: object) => GET("/message", params),
};
