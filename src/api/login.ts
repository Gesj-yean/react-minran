import { GET, POST, PUT } from "./axios";

export const api = {
  login: (params: object) => POST("/login", params),
  register: (params: object) => POST("/register", params),
  resetPass: (params: object) => PUT("/login", params),
};
